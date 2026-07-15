import type { Metadata } from "next";

const resumeUrl = "/resume/Caleb_Rogers_Software_Engineer_Resume.pdf";

export const metadata: Metadata = {
  title: "Resume",
  description: "View or download Caleb Rogers' software engineering resume.",
  alternates: { canonical: "/resume/" },
};

export default function ResumePage() {
  return (
    <main id="main-content" className="inner-page resume-page">
      <header className="resume-heading">
        <div><p className="eyebrow">Resume</p><h1>Caleb Rogers<br />Software Engineer</h1></div>
        <a className="button primary" href={resumeUrl} download>Download PDF <span aria-hidden="true">↓</span></a>
      </header>
      <p className="resume-note">AI applications · full-stack development · native macOS · Python · Swift · FastAPI · Next.js · React · TypeScript</p>
      <object className="resume-viewer" data={resumeUrl} type="application/pdf" aria-label="Caleb Rogers software engineering resume">
        <p>Your browser cannot display the PDF. <a href={resumeUrl}>Open the resume directly.</a></p>
      </object>
    </main>
  );
}
