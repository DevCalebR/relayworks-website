export function VideoSection() {
  return (
    <section className="section video-section" id="demo">
      <div className="section-heading">
        <p className="eyebrow">Demo</p>
        <h2>Watch the local PDF-to-package workflow.</h2>
        <p>
          The requested demo video file was not present at build time. This placeholder marks where
          the approved video should be embedded when it is available.
        </p>
      </div>
      <div className="video-placeholder" role="img" aria-label="Demo video placeholder">
        <span>Demo video placeholder</span>
        <p>Place `RelayWorks_Demo_v1.mp4` in `public/video/` to replace this placeholder.</p>
      </div>
    </section>
  );
}
