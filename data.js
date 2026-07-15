/* ================================================================
   TAPFOLIO — CLIENT DATA
   ================================================================
   This is the ONLY file you should ever need to touch per client.
   index.html reads this object and renders the entire page from it.

   Workflow:
   1. Duplicate the Master Template folder, rename it to the client.
   2. Edit the values below (colors, profile, links, vCard info).
   3. Save. Open index.html — done. No build step, ever.
   ================================================================ */

const clientData = {

  // --------------------------------------------------------------
  // THEME — drives every color on the page (buttons, borders,
  // shadows, marquee, background dot-grid, "Save Contact" button)
  // --------------------------------------------------------------
  theme: {
    bgColor: "#FFFFFF",      // page background
    accentColor: "#39FF14",  // TapFolio brand accent — used on the "Save Contact" button + marquee
    fontColor: "#0A0A0A"     // text, borders, and hard shadows (the "ink" color)
  },

  // --------------------------------------------------------------
  // PROFILE
  // --------------------------------------------------------------
  profile: {
    avatar: "profile.jpeg",
    name: "Ermaan Singh",
    title: "IT Student (Cybersecurity)",
    bio: "Cybersecurity enthusiast with a strong foundation in IT infrastructure, network security, and emerging security technologies.",
    location: "Ipoh, Perak, Malaysia"
  },

  // --------------------------------------------------------------
  // MARQUEE — the scrolling ticker at the very top of the page
  // --------------------------------------------------------------
  marquee: "TAPFOLIO • NETWORK WITHOUT BOUNDARIES",

  // --------------------------------------------------------------
  // LINKS — rendered top to bottom, in this order.
  // "icon" must match a Lucide icon name from lucide.dev/icons
  // --------------------------------------------------------------
  links: [
    { platform: "Instagram", url: "https://instagram.com/ermaan.singh", icon: "instagram" },
    { platform: "TikTok", url: "https://tiktok.com/@ermaan.singh ", icon: "tiktok" },    // Uses custom inline SVG (Lucide has no TikTok logo)
    { platform: "WhatsApp", url: "https://wa.me/qr/XMXUD7W6TUSSI1", icon: "message-circle" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/ermaan-singh-820a69384/", icon: "linkedin" }
  ],

  // --------------------------------------------------------------
  // VCARD — powers the "Save Contact" button. On click, the engine
  // generates a real .vcf file in the browser (no server needed)
  // and triggers a download using this phone/email + the profile
  // name/title above.
  //
  // Values are Base64-encoded to deter automated scrapers.
  // The render engine decodes them at runtime with atob().
  // --------------------------------------------------------------
  vcard: {
    phone_b64: "KzYwMTY3MTI3ODY5",          // Base64 of "+60167127869"
    email_b64: "ZXJtYWFuMTk3MEBnbWFpbC5jb20=" // Base64 of "ermaan1970@gmail.com"
  }

};
