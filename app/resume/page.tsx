import type { Metadata } from "next";
import resumeData from "@/resume/resume.json";

const resumeUrl = "/resume/Caleb_Rogers_Software_Engineer_Resume.pdf";
const resumeDocxUrl = "/resume/Caleb_Rogers_Software_Engineer_Resume.docx";

export const metadata: Metadata = {
  title: "Resume",
  description: "View or download Caleb Rogers' software engineering resume.",
  alternates: { canonical: "/resume/" },
  authors: [{ name: resumeData.name, url: resumeData.contact.linkedin }],
  other: { "linkedin:profile": resumeData.contact.linkedin },
};

export default function ResumePage() {
  return (
    <main id="main-content" className="inner-page resume-page">
      <header className="resume-heading">
        <div><p className="eyebrow">Resume</p><h1>Caleb Rogers<br />Software Engineer</h1></div>
        <div className="resume-downloads">
          <a className="button primary" href={resumeUrl} download>Download PDF <span aria-hidden="true">↓</span></a>
          <a className="button secondary" href={resumeDocxUrl} download>Download DOCX <span aria-hidden="true">↓</span></a>
        </div>
      </header>
      <p className="resume-note">AI applications · full-stack development · native macOS · Python · Swift · FastAPI · Next.js · React · TypeScript</p>
      <nav className="resume-contact" aria-label="Resume contact links">
        <a href={resumeData.contact.portfolio}>Portfolio: {resumeData.contact.portfolio}</a>
        <a href={resumeData.contact.github}>GitHub: {resumeData.contact.github}</a>
        <a href={resumeData.contact.linkedin}>LinkedIn: {resumeData.contact.linkedin}</a>
      </nav>
      <object className="resume-viewer" data={resumeUrl} type="application/pdf" aria-label="Caleb Rogers software engineering resume">
        <p>Your browser cannot display the PDF. <a href={resumeUrl}>Open the resume directly.</a></p>
      </object>
    </main>
  );
}
