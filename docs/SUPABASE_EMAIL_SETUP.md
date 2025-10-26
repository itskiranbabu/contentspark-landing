# Supabase Email Notifications Setup

## 📧 Email Notifications for Contact Form Submissions

### Step 1: Enable Email Service in Supabase

1. Go to your Supabase Dashboard
2. Navigate to **Database** → **Functions**
3. Create a new Edge Function for email notifications

### Step 2: Create Database Function

Run this SQL in your Supabase SQL Editor:

```sql
-- Create a function to send email notifications
CREATE OR REPLACE FUNCTION notify_new_contact_submission()
RETURNS TRIGGER AS $$
BEGIN
  -- This will be handled by Edge Function
  PERFORM net.http_post(
    url := 'YOUR_EDGE_FUNCTION_URL',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := json_build_object(
      'name', NEW.name,
      'email', NEW.email,
      'phone', NEW.phone,
      'company', NEW.company,
      'message', NEW.message,
      'created_at', NEW.created_at
    )::text
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger
CREATE TRIGGER on_contact_submission_created
  AFTER INSERT ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_contact_submission();
```

### Step 3: Alternative - Use Supabase Webhooks

1. Go to **Database** → **Webhooks**
2. Click **Create a new webhook**
3. Configure:
   - **Table**: contact_submissions
   - **Events**: INSERT
   - **Type**: HTTP Request
   - **URL**: Your email service endpoint (e.g., SendGrid, Resend, or custom)

### Step 4: Using Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Create Edge Function:

```typescript
// supabase/functions/send-contact-email/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  const { name, email, phone, company, message } = await req.json()

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'ContentSpark <hello@contentspark.in>',
      to: ['hello@contentspark.in'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }),
  })

  const data = await res.json()
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  })
})
```

### Step 5: Deploy Edge Function

```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link your project
supabase link --project-ref YOUR_PROJECT_REF

# Deploy function
supabase functions deploy send-contact-email --no-verify-jwt

# Set secret
supabase secrets set RESEND_API_KEY=your_resend_api_key
```

### Step 6: Update Database Trigger

```sql
CREATE OR REPLACE FUNCTION notify_new_contact_submission()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://YOUR_PROJECT_REF.supabase.co/functions/v1/send-contact-email',
    headers := '{"Content-Type": "application/json", "Authorization": "Bearer YOUR_ANON_KEY"}'::jsonb,
    body := json_build_object(
      'name', NEW.name,
      'email', NEW.email,
      'phone', NEW.phone,
      'company', NEW.company,
      'message', NEW.message
    )::text
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

## 🔔 Alternative: Simple Email with SendGrid

If you prefer SendGrid:

```sql
-- Enable http extension
CREATE EXTENSION IF NOT EXISTS http;

-- Create function
CREATE OR REPLACE FUNCTION send_email_notification()
RETURNS TRIGGER AS $$
DECLARE
  sendgrid_api_key TEXT := 'YOUR_SENDGRID_API_KEY';
BEGIN
  PERFORM net.http_post(
    url := 'https://api.sendgrid.com/v3/mail/send',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || sendgrid_api_key
    ),
    body := jsonb_build_object(
      'personalizations', jsonb_build_array(
        jsonb_build_object(
          'to', jsonb_build_array(
            jsonb_build_object('email', 'hello@contentspark.in')
          ),
          'subject', 'New Contact Form Submission from ' || NEW.name
        )
      ),
      'from', jsonb_build_object('email', 'noreply@contentspark.in'),
      'content', jsonb_build_array(
        jsonb_build_object(
          'type', 'text/html',
          'value', '<h2>New Contact</h2><p>Name: ' || NEW.name || '</p><p>Email: ' || NEW.email || '</p><p>Phone: ' || NEW.phone || '</p><p>Message: ' || NEW.message || '</p>'
        )
      )
    )::text
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger
CREATE TRIGGER on_new_contact
  AFTER INSERT ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION send_email_notification();
```

## ✅ Testing

1. Submit a test form on your website
2. Check your email inbox
3. Verify the email contains all form data
4. Check Supabase logs for any errors

## 🔒 Security Notes

- Never expose API keys in client-side code
- Use Supabase Edge Functions for secure email sending
- Enable RLS (Row Level Security) on your tables
- Use environment variables for all secrets

## 📊 Monitoring

- Check Supabase Dashboard → Logs for function execution
- Monitor email delivery rates
- Set up alerts for failed deliveries