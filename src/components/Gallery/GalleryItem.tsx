import { useCallback } from 'react';

interface TechStackItem {
  name: string;
  icon: string;
}

interface GalleryItemProps {
  id: string;
  source: string;
  thumbnail: string;
  caption: string;
  description: string;
  position: string;
  toggleLightbox: (position: string) => void;
  techStack: string[];
  techStackData: Map<string, TechStackItem>;
}

export default function GalleryItem({
  id,
  source,
  thumbnail,
  caption,
  description,
  position,
  toggleLightbox,
  techStack,
  techStackData,
}: GalleryItemProps) {
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      toggleLightbox(position);
    },
    [position, toggleLightbox],
  );

  const stackIcons =
    techStack &&
    techStack.map((stack, index) => {
      const techData = techStackData.get(stack.trim());
      if (!techData || !techData.icon) {
        return null;
      }

      return (
        <img
          className="stackIco"
          key={`${stack}-${index}`}
          src={techData.icon}
          alt={techData.name}
          title={techData.name}
          width="25"
          height="25"
        />
      );
    });

  return (
    <article key={id} className="6u 12u$(xsmall) work-item">
      <a className="image fit thumb" href={source} onClick={onClick}>
        <img src={thumbnail} alt="" />
      </a>
      <span>
        <h3 className="title">{caption}</h3>
        {stackIcons}
      </span>
      <p>{description}</p>
    </article>
  );
}
