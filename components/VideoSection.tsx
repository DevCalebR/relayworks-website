export function VideoSection() {
  return (
    <section className="section video-section" id="demo">
      <div className="section-heading">
        <p className="eyebrow">Demo</p>
        <h2>Watch the local PDF-to-package workflow.</h2>
        <p>
          See RelayWorks process a PDF locally and generate structured,
          AI-ready output files.
        </p>
      </div>

      <div className="video-frame">
        <video
          controls
          preload="metadata"
          playsInline
          aria-label="RelayWorks AI Document Processing Kit demonstration"
        >
          <source
            src="/video/RelayWorks_Demo_v1.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>
      </div>
    </section>
  );
}
