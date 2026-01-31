# Vishnu Vaaku - Celestial Terracotta Theme
## Version 1.2.0 - Product Page & Checkout Fixes

---

## 📋 Version History

### v1.2.0 (Current)
- **Buy Now button** - Direct checkout instead of Add to Cart
- **Single unit purchase** - Removed quantity selector
- **BookX app styling** - Book your slot button now matches theme

### v1.1.0
- Fixed scattered stars background
- Added flower petals to mandala
- Added contact form to Contact page
- Replaced Search with social links in footer
- Created Achievements page template
- Services page cards match homepage style
- Increased card opacity
- Aligned hero photo with title

### v1.0.0
- Initial theme release

---

## 🐛 Fixes in v1.2.0

| # | Issue | Solution |
|---|-------|----------|
| 1 | Add to Cart not needed | Changed to **Buy Now** button that goes directly to checkout |
| 2 | Quantity selector not needed | Removed quantity selector (fixed at 1 unit) |
| 3 | BookX button not matching theme | Added comprehensive CSS to style BookX "Book your slot" button |

---

## 🚀 Installation Steps

### Step 1: Upload Theme
1. Go to **Shopify Admin** → **Online Store** → **Themes**
2. Click **"Add theme"** → **"Upload zip file"**
3. Upload `vishnu-vaaku-theme-v1.2.zip`

### Step 2: Publish
1. Preview the theme
2. Click **Publish** when ready

---

## ⚙️ Product Page Changes

### Buy Now Button (FIX #1)
The "Add to Cart" button has been replaced with a **"Buy Now"** button that:
- Adds the product to cart with quantity 1
- Immediately redirects to checkout
- No cart page visit needed

### No Quantity Selector (FIX #2)
- Quantity field is hidden (set to 1 automatically)
- Users can only purchase single units
- Clean, simple purchase flow

### BookX Button Styling (FIX #3)
The BookX app's "Book your slot" button now matches the theme:

**Styled appearance:**
- Transparent background with terracotta gold border
- Matches theme typography (Josefin Sans)
- Uppercase letters with letter-spacing
- Hover effect: fills with gold, lifts up with shadow

**CSS selectors used:**
```css
.bookx-booking-button
.bookx-btn
[class*="bookx"] button
[class*="BookX"] button
.book-slot-button
.booking-button
.shopify-app-block button
div[data-app] button
```

If your BookX button uses a different class, you may need to add it to the CSS.

---

## 🎨 Button Styling Reference

### Primary Button (Buy Now)
```css
background: #d4a574;
color: #1a1420;
padding: 1.25rem 2rem;
font-size: 1rem;
```

### Secondary Button (Book Your Slot)
```css
background: transparent;
color: #d4a574;
border: 2px solid #d4a574;
padding: 1rem 2rem;
font-size: 0.9rem;
```

---

## 📝 Customizing BookX Button

If the BookX button doesn't pick up the styling, you can:

### Option 1: Use Theme Editor
1. Go to **Theme Editor** → **Theme Settings**
2. Add Custom CSS:
```css
.YOUR-BOOKX-CLASS button {
  background: transparent !important;
  color: #d4a574 !important;
  border: 2px solid #d4a574 !important;
  /* ... other styles */
}
```

### Option 2: Edit theme.css
1. Go to **Edit Code** → **Assets** → **theme.css**
2. Find the BookX styling section
3. Add your specific class selector

### Option 3: Inspect & Identify
1. Right-click the BookX button
2. Select "Inspect"
3. Find the class name
4. Add to the CSS selectors

---

## 🛒 Purchase Flow

**Before (v1.1):**
1. User clicks "Add to Cart"
2. User visits cart page
3. User clicks "Checkout"
4. User completes purchase

**After (v1.2):**
1. User clicks "Buy Now"
2. User is taken directly to checkout
3. User completes purchase

---

## 📁 Files Changed in v1.2

### Modified
- `sections/main-product.liquid` - New Buy Now form, removed quantity, added BookX styles
- `assets/theme.css` - Added BookX button styling and trust badges

---

## ✨ Trust Badges

The product page now includes optional trust badges:
- ✧ Secure Payment
- ☽ Personal Guidance
- ★ 5-Star Rated

To enable/disable:
1. Go to **Theme Editor**
2. Click on **Product** section
3. Toggle "Show trust badges"

---

## 📋 All Features Summary

### Homepage
- Hero with aligned astrologer photo
- Animated scattered stars
- Rotating mandala with flower petals
- Services section with card styling
- Testimonials with increased opacity
- FAQ section
- CTA section

### Product Page
- Buy Now direct checkout
- No quantity selector
- BookX app integration styling
- Trust badges

### Contact Page
- Full contact form
- Subject dropdown
- Success message styling

### Achievements Page
- Achievement cards
- Customizable icons
- CTA section

### Footer
- Social links (Instagram, YouTube, Facebook)
- Navigation links
- Copyright

---

## 📞 Support

For questions or customization:
- Website: VishnuVaaku.com
- Contact: Through the contact page

---

**Theme Version:** 1.2.0  
**Shopify Compatibility:** Online Store 2.0  
**Last Updated:** January 2026

---

*Crafted with cosmic intention ✧*
