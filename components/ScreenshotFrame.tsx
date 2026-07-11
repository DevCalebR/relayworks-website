import Image from "next/image";

type ScreenshotFrameProps = {
  src: string;
  alt: string;
  title: string;
  caption?: string;
  priority?: boolean;
};

export function ScreenshotFrame({ src, alt, title, caption, priority = false }: ScreenshotFrameProps) {
  return (
    <figure className="browser-frame">
      <div className="browser-bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <Image src={src} alt={alt} width={1440} height={1100} priority={priority} />
      <figcaption>
        <strong>{title}</strong>
        {caption ? <span>{caption}</span> : null}
      </figcaption>
    </figure>
  );
}
