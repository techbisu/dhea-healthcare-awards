import fs from 'node:fs';
import path from 'node:path';

const downloadsDir = path.resolve('public/downloads');
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

const membersDir = path.resolve('public/images/members');
if (!fs.existsSync(membersDir)) {
  fs.mkdirSync(membersDir, { recursive: true });
}

// Function to generate a valid minimal PDF file with text content
function createPdfBuffer(title, subtitle, description) {
  const content = `BT
/F1 20 Tf
50 720 Td
(${title}) Tj
/F1 12 Tf
0 -30 Td
(${subtitle}) Tj
/F1 10 Tf
0 -25 Td
(Dose Daily Healthcare Excellence Awards - DHEA 2026) Tj
0 -18 Td
(December 2026 | Kolkata, West Bengal, India) Tj
0 -30 Td
(${description.replace(/[()]/g, '')}) Tj
0 -25 Td
(Official website: https://www.dosedaily.in | Contact: awards@dosedaily.in) Tj
ET`;

  const streamLength = Buffer.byteLength(content, 'utf8');

  const pdf = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 612 792]
  /Contents 4 0 R
  /Resources <<
    /Font <<
      /F1 5 0 R
    >>
  >>
>>
endobj
4 0 obj
<<
  /Length ${streamLength}
>>
stream
${content}
endstream
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000256 00000 n 
0000000307 00000 n 
trailer
<<
  /Size 6
  /Root 1 0 R
>>
startxref
386
%%EOF`;

  return Buffer.from(pdf, 'utf8');
}

const pdfFiles = [
  {
    name: 'DHEA-2026-Awards-Brochure.pdf',
    title: 'DHEA 2026 - Official Awards Brochure',
    subtitle: 'Comprehensive Participation and Nomination Guide',
    description: 'Detailed information regarding 100+ categories, eligibility, judging process, and ceremony details.'
  },
  {
    name: 'DHEA-2026-Sponsorship-Brochure.pdf',
    title: 'DHEA 2026 - Sponsorship and Brand Alliance Kit',
    subtitle: 'Exhibition Floor Plans and Branding Packages',
    description: 'Title, Powered-by, and Category sponsorship options with complete branding deliverables.'
  },
  {
    name: 'DHEA-2026-Entry-Guidelines.pdf',
    title: 'DHEA 2026 - Official Entry Guidelines',
    subtitle: 'Scoring Matrix and Dossier Checklist',
    description: 'Essential preparation criteria, compliance checks, and audit documentation standards.'
  },
  {
    name: 'DHEA-2026-Categories-Directory.pdf',
    title: 'DHEA 2026 - 100+ Award Categories Directory',
    subtitle: 'Listing of All Healthcare and Medical Verticals',
    description: 'Hospitals, Clinics, Doctors, Diagnostics, Pharma, Biotech, and HealthTech categories.'
  },
  {
    name: 'DHEA-2026-Offline-Nomination-Form.pdf',
    title: 'DHEA 2026 - Offline Nomination Entry Form',
    subtitle: 'Official Application Form for Postal or Email Submission',
    description: 'Complete all applicant details and institutional endorsement for physical dossier submission.'
  },
  {
    name: 'DHEA-2026-Delegate-Registration.pdf',
    title: 'DHEA 2026 - Delegate Registration Form',
    subtitle: 'VIP Passes and Corporate Table Booking',
    description: 'Reserve your presence at the national conclave and gala dinner ceremony in Kolkata.'
  },
  {
    name: 'DHEA-2026-Jury-Charter.pdf',
    title: 'DHEA 2026 - Jury Charter and Code of Conduct',
    subtitle: 'Independent and Conflict-of-Interest Audited Process',
    description: 'Governance and scoring framework ensuring complete transparency.'
  }
];

pdfFiles.forEach(file => {
  const filePath = path.join(downloadsDir, file.name);
  fs.writeFileSync(filePath, createPdfBuffer(file.title, file.subtitle, file.description));
  console.log(`Generated: ${filePath}`);
});

console.log('Sample PDFs generated successfully!');
