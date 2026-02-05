import { v4 as uuidv4 } from 'uuid';
import type { Project } from './Gallery';

interface ProjectDetailsProps {
  currentIndex: number;
  views: Project[];
  setLightBox: (value: boolean) => void;
}

export default function ProjectDetails({ currentIndex, views, setLightBox }: ProjectDetailsProps) {
  const project = views[currentIndex];
  let btnSpacing = '';

  const features =
    project &&
    project.features.map((feat) => {
      return <li key={uuidv4()}>{feat}</li>;
    });

  const stack =
    project &&
    project.stack.map((tech) => {
      return <li key={uuidv4()}>{tech}</li>;
    });

  let links = [
    <a key={uuidv4()} href={project.gitHubLink} className="button" rel="noreferrer" target="_blank">
      GitHub Repo
    </a>,
  ];

  if (project.demoLink) {
    btnSpacing = 'detailButtons';
    links.push(
      <a key={uuidv4()} href={project.demoLink} className="button" rel="noreferrer" target="_blank">
        Demo
      </a>,
    );
  } else {
    btnSpacing = '';
  }

  return (
    <article className="projectDisplay">
      <section className="projectImages">
        <img src={project.image} alt="" />
        <span>{/* Thumbs */}</span>
      </section>
      <section className="projectDetails">
        <h1>
          <u>{project.title}</u>
        </h1>
        <h4>{project.description}</h4>

        <table>
          <tbody>
            <tr>
              <th>Built With:</th>
              <th>Features:</th>
            </tr>
            <tr>
              <td>
                <ul>{stack}</ul>
              </td>
              <td>
                <ul>{features}</ul>
              </td>
            </tr>
          </tbody>
        </table>
        <span className={btnSpacing}>{links}</span>
        <br />
        {project && project.content}
        {/* Fixed Close Button */}
        <i onClick={() => setLightBox(false)} className="icon fa-close closeDetails"></i>
      </section>
    </article>
  );
}
