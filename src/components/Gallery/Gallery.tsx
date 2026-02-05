import { useState, useCallback, useEffect } from 'react';
import GalleryItem from './GalleryItem';
import { projects, type Project } from '../../data/projects';

export default function Gallery() {
  const [form, setForm] = useState('');
  const [results, setResults] = useState<Project[]>(projects);

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
          source={obj.source}
          thumbnail={obj.thumbnail}
          caption={obj.caption}
          description={obj.description}
          techStack={obj.stack}
          position={i.toString()}
          toggleLightbox={toggleLightbox}
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
