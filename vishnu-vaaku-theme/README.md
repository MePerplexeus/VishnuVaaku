# Vishnu Vaaku - Celestial Terracotta Theme
## Version 1.1.0 - Bug Fixes Applied

---

## 🐛 Bug Fixes in This Version

| # | Issue | Fix Applied |
|---|-------|-------------|
| 1 | Stars showing as diagonal line | Stars now scattered randomly across viewport using CSS nth-child positioning |
| 2 | Flower petals missing from mandala | Added 8 flower petal paths to the SVG mandala decoration |
| 3 | No contact form on Contact page | Created new contact page template with full form |
| 4 | Search link in footer | Replaced with Instagram, YouTube, Facebook social links |
| 5 | No achievements page | Created new achievements page template for Vishnupriya S Soma |
| 6 | Services page cards different from homepage | Collection page now uses same card style as homepage services |
| 7 | Low opacity on cards/boxes | Increased opacity to 0.9 (similar to sticky header) for all cards |
| 8 | Hero photo not aligned with title | Photo now starts at same top position as the title heading |

---

## 🚀 Installation Steps

### Step 1: Upload the Theme

1. Log in to your Shopify admin: `https://your-store.myshopify.com/admin`
2. Go to **Online Store** → **Themes**
3. Click **"Add theme"** → **"Upload zip file"**
4. Select `vishnu-vaaku-theme.zip`
5. Wait for upload to complete

### Step 2: Publish

1. Find theme in "Theme library"
2. Click **"Actions"** → **"Preview"** to review
3. Click **"Actions"** → **"Publish"** when ready

---

## ⚙️ Settings Adjustments Required

### FIX #4: Configure Footer Social Links

After installing the theme:

1. Go to **Online Store** → **Themes** → **Customize**
2. Scroll down and click on the **Footer** section
3. Under "Social Links", enter your URLs:
   - Instagram URL
   - YouTube URL
   - Facebook URL
   - Twitter URL (optional)
4. Save changes

### FIX #3: Set Up Contact Page

1. Go to **Online Store** → **Pages**
2. Find or create your "Contact" page
3. In the page editor, click **"Theme template"** dropdown
4. Select **"page.contact"**
5. Save the page
6. Customize the contact form in Theme Editor:
   - Click on the Contact page in the editor
   - Configure email, phone, location if desired

### FIX #5: Create Achievements Page

1. Go to **Online Store** → **Pages**
2. Click **"Add page"**
3. Title: "Achievements" (or similar)
4. In **"Theme template"** dropdown, select **"page.achievements"**
5. Save the page
6. Customize in Theme Editor:
   - Add/edit achievement blocks
   - Change icons (use emojis like ✧ ☽ ★ ◇ ☼)
   - Update titles and descriptions
7. Add to navigation menu if desired

---

## 🎨 Theme Customization

### Colors (Theme Settings)

| Setting | Default | Description |
|---------|---------|-------------|
| Primary accent | #d4a574 | Terracotta gold |
| Secondary accent | #c49464 | Darker gold |
| Background | #1a1420 | Deep burgundy |
| Text | #f5ebe0 | Warm cream |

### Typography

- **Headings**: Cormorant Garamond (elegant serif)
- **Body**: Josefin Sans (clean sans-serif)

---

## 📄 Page Templates Available

| Template | Use For |
|----------|---------|
| `page.default` | Standard pages |
| `page.contact` | Contact page with form |
| `page.achievements` | Achievements/milestones |

---

## 📁 Files Modified/Added

### Modified
- `assets/theme.css` - Fixed star positions, opacity, hero alignment
- `layout/theme.liquid` - Fixed mandala SVG with flower petals
- `sections/footer.liquid` - Added social links instead of Search
- `sections/hero.liquid` - Aligned photo with title
- `sections/main-collection.liquid` - Same card style as homepage

### Added
- `templates/page.contact.json` - Contact page template
- `sections/main-contact.liquid` - Contact form section
- `templates/page.achievements.json` - Achievements page template
- `sections/main-achievements.liquid` - Achievements section

---

## 💡 Additional Tips

### Hero Photo Alignment (FIX #8)
The astrologer photo in the hero section now aligns with the top of the "Celestial Guidance" title. On mobile, the photo is hidden to prioritize content. The CSS uses `top: 8rem` instead of `top: 50%` to achieve this alignment.

### Card Opacity (FIX #7)
All cards now use higher opacity backgrounds:
- Service cards: `rgba(45, 31, 47, 0.9)`
- Testimonial cards: `rgba(26, 20, 32, 0.85)`
- FAQ hover: `rgba(212, 165, 116, 0.12)`
- CTA box: `rgba(77, 53, 64, 0.4)`

### Contact Form Subjects
The contact form includes predefined subjects:
- General Inquiry
- Personal Consultation
- Know Your Rashi Report
- Collaboration
- Other

---

## 📞 Support

For additional customization or questions:
- Website: VishnuVaaku.com
- Contact: Through the contact page

---

**Theme Version:** 1.1.0  
**Shopify Compatibility:** Online Store 2.0  
**Last Updated:** January 2026

---

*Crafted with cosmic intention ✧*
