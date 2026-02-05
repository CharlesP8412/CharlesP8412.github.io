import { useState, useCallback, useEffect } from 'react';
import GalleryItem from './GalleryItem';

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  image: string;
  gitHubLink: string;
  demoLink?: string;
  stack: string[];
  features: string[];
  order: number;
  content?: string;
}

interface TechStackItem {
  name: string;
  icon: string;
}

interface GalleryProps {
  projects: Project[];
  techStackData: Array<{ key: string; value: TechStackItem }>;
}

export default function Gallery({ projects, techStackData }: GalleryProps) {
  const [form, setForm] = useState('');
  const [results, setResults] = useState<Project[]>(projects);

  // Reconstruct Map from array
  const techStackMap = new Map(techStackData.map((item) => [item.key, item.value]));

  const toggleLightbox = useCallback((selectedIndex: string) => {
    // Future: Add lightbox functionality here
    console.log('Project selected:', selectedIndex);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setForm(value);
  };

  const search = (searchTerm: string, list: Project[]): Project[] => {
    if (!list) {
      return [];
    }
    if (!searchTerm) {
      return list;
    }
    searchTerm = searchTerm.toLowerCase();
    const sResults: { [key: string]: Project } = {};

    list.forEach((proj) => {
      Object.values(proj).forEach((val) => {
        let valStr = '';
        if (typeof val === 'object' && Array.isArray(val)) {
          valStr = val.join(' ').toLowerCase();
        } else if (typeof val === 'string') {
          valStr = val.toLowerCase();
        }

        if (valStr && valStr.includes(searchTerm)) {
          sResults[proj.id] = proj;
        }
      });
    });

    return Object.values(sResults);
  };

  useEffect(() => {
    setResults(search(form, projects));
  }, [form]);

  const projectList =
    results &&
    results.map((obj, i) => {
      return (
        <GalleryItem
          key={obj.id}
          id={obj.id}
          source={obj.image}
          thumbnail={obj.thumbnail}
          caption={obj.title}
          description={obj.description}
          techStack={obj.stack}
          position={i.toString()}
          toggleLightbox={toggleLightbox}
          techStackData={techStackMap}
        />
      );
    });

  return (
    <>
      <span className="projectSearch">
        <h2 className="title">Recent Work</h2>
        <input
          type="text"
          id="projects"
          name="projects"
          onChange={handleChange}
          value={form}
          placeholder="Search Projects..."
        />
      </span>
      <div>
        <br />
        {projects && <div className="row">{projectList}</div>}
      </div>
    </>
  );
}
