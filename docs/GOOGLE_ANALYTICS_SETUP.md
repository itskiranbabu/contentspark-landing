# Google Analytics Setup Guide

## 📊 Setting Up Google Analytics 4

### Step 1: Create Google Analytics Account

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click **Start measuring**
3. Enter Account name: **ContentSpark**
4. Configure data sharing settings
5. Click **Next**

### Step 2: Create Property

1. Property name: **ContentSpark Website**
2. Reporting time zone: **India Standard Time**
3. Currency: **Indian Rupee (₹)**
4. Click **Next**

### Step 3: Business Information

1. Industry: **Marketing & Advertising**
2. Business size: **Small (1-10 employees)**
3. How you plan to use Google Analytics: Select relevant options
4. Click **Create**

### Step 4: Set Up Data Stream

1. Choose platform: **Web**
2. Website URL: `https://contentspark-landing-lvch.vercel.app`
3. Stream name: **ContentSpark Landing Page**
4. Click **Create stream**

### Step 5: Get Measurement ID

1. After creating the stream, you'll see your **Measurement ID**
2. It looks like: `G-XXXXXXXXXX`
3. Copy this ID

### Step 6: Add to Vercel Environment Variables

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your **contentspark-landing** project
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: Your Measurement ID (e.g., `G-XXXXXXXXXX`)
   - **Environment**: Production, Preview, Development
5. Click **Save**

### Step 7: Redeploy

1. Go to **Deployments** tab
2. Click on the latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger automatic deployment

### Step 8: Verify Installation

1. Visit your website: https://contentspark-landing-lvch.vercel.app
2. Open browser DevTools (F12)
3. Go to **Network** tab
4. Look for requests to `google-analytics.com` or `gtag`
5. In Google Analytics, go to **Reports** → **Realtime**
6. You should see your visit in real-time

## 📈 Key Metrics to Track

### 1. **Acquisition**
- Traffic sources (Direct, Organic, Social, Referral)
- Campaign performance
- Landing pages

### 2. **Engagement**
- Page views
- Average engagement time
- Bounce rate
- Scroll depth

### 3. **Conversions**
- Contact form submissions
- Button clicks
- Pricing page views

## 🎯 Setting Up Custom Events

### Track Contact Form Submissions

Update `components/CTA.tsx`:

```typescript
// Add this after successful form submission
if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'form_submission', {
    event_category: 'Contact',
    event_label: 'Contact Form',
    value: 1
  })
}
```

### Track Button Clicks

```typescript
// Add to any CTA button
onClick={() => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'CTA',
      event_label: 'Get Started Button',
    })
  }
}}
```

### Track Pricing Plan Selection

```typescript
// Add to pricing buttons
onClick={() => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'select_plan', {
      event_category: 'Pricing',
      event_label: plan.name,
      value: plan.price
    })
  }
}}
```

## 🔔 Setting Up Alerts

1. In Google Analytics, go to **Admin**
2. Under **Property**, click **Custom Alerts**
3. Create alerts for:
   - Traffic drops (>50% decrease)
   - Spike in form submissions
   - High bounce rate (>70%)

## 📊 Custom Reports

### 1. **Lead Generation Report**
- Dimensions: Source/Medium, Landing Page
- Metrics: Form Submissions, Conversion Rate

### 2. **Content Performance**
- Dimensions: Page Path
- Metrics: Page Views, Avg. Time on Page, Bounce Rate

### 3. **Campaign Performance**
- Dimensions: Campaign Name, Source
- Metrics: Sessions, Conversions, Cost per Conversion

## 🎨 Enhanced Measurement

Enable these in GA4:

1. **Page views** ✅ (Auto-enabled)
2. **Scrolls** ✅
3. **Outbound clicks** ✅
4. **Site search** (if you add search)
5. **Video engagement** (if you add videos)
6. **File downloads** ✅

## 🔒 Privacy & GDPR Compliance

### Add Cookie Consent (Optional but Recommended)

Install a cookie consent library:

```bash
npm install react-cookie-consent
```

Update layout:

```typescript
import CookieConsent from 'react-cookie-consent'

// Add in layout
<CookieConsent
  location="bottom"
  buttonText="Accept"
  declineButtonText="Decline"
  cookieName="contentsparkConsent"
  style={{ background: "#2B373B" }}
  buttonStyle={{ background: "#0066FF", color: "#fff", fontSize: "13px" }}
  expires={150}
>
  We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
</CookieConsent>
```

## 📱 Mobile App Tracking (Future)

When you launch mobile apps:

1. Create separate data streams for iOS and Android
2. Implement Firebase SDK
3. Track app-specific events

## ✅ Checklist

- [ ] Google Analytics account created
- [ ] Property and data stream set up
- [ ] Measurement ID added to Vercel
- [ ] Site redeployed
- [ ] Real-time tracking verified
- [ ] Custom events configured
- [ ] Conversion goals set up
- [ ] Custom reports created
- [ ] Alerts configured
- [ ] Cookie consent added (optional)

## 🆘 Troubleshooting

**Analytics not showing data?**
- Check if Measurement ID is correct
- Verify environment variable is set in Vercel
- Clear browser cache
- Check browser console for errors
- Wait 24-48 hours for full data processing

**Events not tracking?**
- Verify gtag is loaded (check Network tab)
- Check event syntax
- Test in GA4 DebugView mode

## 📚 Resources

- [GA4 Documentation](https://support.google.com/analytics/answer/9304153)
- [GA4 Event Reference](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [Next.js Analytics Guide](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)