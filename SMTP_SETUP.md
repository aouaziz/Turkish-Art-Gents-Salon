# SMTP Configuration for Turkish Art Gents Salon

## Using cPanel Email (info@turkishartgentssalon.com)

Create a `.env.local` file in your project root with these settings:

```env
# cPanel SMTP Settings
SMTP_HOST=mail.turkishartgentssalon.com
SMTP_PORT=465
SMTP_USER=info@turkishartgentssalon.com
SMTP_PASS=your-email-password-here
```

### How to Find Your cPanel SMTP Settings:

1. **SMTP Host**: Usually `mail.yourdomain.com` 
   - For you: `mail.turkishartgentssalon.com`
   - Or check your cPanel → Email Accounts → "Configure Email Client"

2. **SMTP Port**: 
   - **465** (SSL/TLS - Recommended)
   - OR **587** (STARTTLS)

3. **SMTP User**: Your full email address
   - `info@turkishartgentssalon.com`

4. **SMTP Password**: The password you set for this email account in cPanel

### Alternative: If Port 465 Doesn't Work

Some hosting providers prefer port 587. If you have issues, try:

```env
SMTP_HOST=mail.turkishartgentssalon.com
SMTP_PORT=587
SMTP_USER=info@turkishartgentssalon.com
SMTP_PASS=your-email-password-here
```

### Steps to Set Up:

1. **Create `.env.local` file** in `/home/aouaziz/Desktop/salon/`
2. **Copy the settings above** and replace `your-email-password-here` with your actual password
3. **Restart your dev server**: Stop `npm run dev` and start it again
4. **Test the form** on your website

### Common cPanel Email Ports:

- **Port 465**: SSL (Secure) - Most common
- **Port 587**: TLS/STARTTLS - Alternative
- **Port 25**: Usually blocked by hosting providers

### Troubleshooting:

If emails don't send:
1. Check your cPanel email password is correct
2. Verify the email account exists in cPanel
3. Try switching between port 465 and 587
4. Check if your hosting provider has any SMTP restrictions
5. Look at the browser console and terminal for error messages

### Security Note:

- Never commit `.env.local` to Git (it's already in .gitignore)
- Keep your email password secure
- Consider using a dedicated email account for form submissions

---

## Example `.env.local` File:

```env
# cPanel SMTP Configuration
SMTP_HOST=mail.turkishartgentssalon.com
SMTP_PORT=465
SMTP_USER=info@turkishartgentssalon.com
SMTP_PASS=YourSecurePassword123!
```

After creating this file, restart your development server and the booking form will send emails to info@turkishartgentssalon.com!
