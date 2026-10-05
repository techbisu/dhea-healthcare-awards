# DHEA 2026 Central Configuration Guide (`config.json`)

All key website data, members details, images, downloadable PDF files, dates, and contact information are centrally managed in:
📁 [`src/data/config.json`](file:///d:/React/Astro-conf/src/data/config.json)

---

## 1. Configuring Members (Jury, Advisory Board, Secretariat)

Inside `config.json`, locate the `"members"` object:

```json
"members": {
  "juryMembers": [
    {
      "id": "dr-ak-mukherjee",
      "name": "Dr. A. K. Mukherjee",
      "role": "Former Director General of Health Services (DGHS)",
      "institution": "Ministry of Health & Family Welfare, Govt. of India",
      "badge": "Jury Chair",
      "panel": "DHEA 2026 Panel",
      "verified": true,
      "image": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
      "localImagePath": "/images/members/dr-ak-mukherjee.jpg",
      "bio": "Distinguished healthcare policy veteran who spearheaded national public health guidelines...",
      "category": "Leadership & Public Policy",
      "social": {
        "linkedin": "https://linkedin.com",
        "website": "https://mohfw.gov.in"
      }
    }
  ]
}
```

### How to use local images:
1. Place member photos in `public/images/members/` (e.g. `public/images/members/john-doe.jpg`).
2. Set `"image": "/images/members/john-doe.jpg"`.
3. You can also use any external CDN URL (e.g. Unsplash, AWS S3, Cloudinary).

---

## 2. Configuring Downloadable PDF Documents

Inside `config.json`, locate the `"downloads"` object:

```json
"downloads": {
  "awardsBrochure": {
    "id": "awards-brochure",
    "title": "Official Awards Brochure & Entry Kit",
    "subtitle": "Complete Guide to DHEA 2026 Categories & Guidelines",
    "fileName": "DHEA-2026-Awards-Brochure.pdf",
    "filePath": "/downloads/DHEA-2026-Awards-Brochure.pdf",
    "fileSize": "3.4 MB",
    "fileType": "PDF",
    "badge": "Primary Brochure",
    "description": "Exhaustive brochure covering 100+ categories, eligibility criteria, and submission format."
  },
  "sponsorshipBrochure": {
    "id": "sponsorship-brochure",
    "title": "Sponsorship & Brand Alliance Kit",
    "fileName": "DHEA-2026-Sponsorship-Brochure.pdf",
    "filePath": "/downloads/DHEA-2026-Sponsorship-Brochure.pdf",
    "fileSize": "4.8 MB"
  },
  "entryGuidelines": { ... },
  "categoryList": { ... },
  "others": [
    {
      "id": "custom-document",
      "title": "Your Custom PDF Document Title",
      "fileName": "custom-file.pdf",
      "filePath": "/downloads/custom-file.pdf",
      "fileSize": "1.5 MB",
      "badge": "Custom",
      "description": "Short description of this document"
    }
  ]
}
```

### How to add a new PDF:
1. Place the PDF file into `public/downloads/your-document.pdf`.
2. Add or update the path in `config.json` under `"filePath": "/downloads/your-document.pdf"`.
3. The document will automatically appear in the interactive Download modal dropdown and download triggers across the site!

---

## 3. Configuring Event Dates & Metadata

```json
"site": {
  "name": "DHEA 2026",
  "fullName": "Dose Daily Healthcare Excellence Awards",
  "eventDateDisplay": "December 2026",
  "city": "Kolkata",
  "locationDisplay": "Kolkata, India",
  "venue": "Biswa Bangla Convention Centre, New Town, Kolkata"
},
"dates": {
  "nominationsOpen": "15 July 2026",
  "earlyBirdDeadline": "15 August 2026",
  "nominationDeadline": "15 September 2026",
  "extendedDeadline": "30 September 2026",
  "screeningVerification": "October 2026",
  "juryEvaluation": "October – November 2026",
  "awardsCeremony": "December 2026"
}
```

---

## 4. Contact & Secretariat Details

```json
"contact": {
  "secretariatName": "DHEA Awards Secretariat",
  "organization": "Dose Daily Healthcare Excellence Awards",
  "primaryEmail": "awards@dosedailynews.com",
  "helpline": "+91 98300 XXXXX",
  "website": "https://www.dosedailynews.com",
  "operatingHours": "Monday to Saturday, 10:00 AM – 6:30 PM IST"
}
```

---

## 5. Forms & Email Submission Setup (Web3Forms)

All forms across the site (Contact Us, Award Nomination, Delegate Booking, Brochure Download, and Sponsorship Inquiry) support direct email submission via **Web3Forms**.

### How to activate live email delivery:
1. Visit **[https://web3forms.com](https://web3forms.com)** and enter your recipient email (e.g. `awards@dosedailynews.com`) to generate a free Access Key.
2. Configure your Access Key either:
   - In `src/data/config.json`:
     ```json
     "forms": {
       "provider": "web3forms",
       "web3formsAccessKey": "YOUR-ACCESS-KEY-HERE",
       ...
     }
     ```
   - OR create a `.env` file in the project root:
     ```env
     PUBLIC_WEB3FORMS_KEY=your-access-key-here
     ```
3. When no key is set (or during local development), the website automatically operates in **simulation mode** so testers can test all workflows and downloads without failing or requiring credentials!

