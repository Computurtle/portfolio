import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";
import projectsData from "../data/projects.json";
import "./Projects.css";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  links: {
    github?: string;
    itchio?: string;
    website?: string;
  };
  featured?: boolean;
}

function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null);

  const projects: Project[] = projectsData;

  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort();

  const filteredProjects = filter
    ? projects.filter((project) => project.tags.includes(filter))
    : projects;

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      <div className="filter-container">
        <button
          className={`filter-tag ${filter === null ? "active" : ""}`}
          onClick={() => setFilter(null)}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`filter-tag ${filter === tag ? "active" : ""}`}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${project.featured ? "featured" : ""}`}
          >
            <div className="project-image">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="project-image-placeholder">
                  <span>{project.title.charAt(0)}</span>
                </div>
              )}
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-links">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="project-link github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}

                {project.links.itchio && (
                  <a
                    href={project.links.itchio}
                    className="project-link itchio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiItchdotio /> itch.io
                  </a>
                )}

                {project.links.website && (
                  <a
                    href={project.links.website}
                    className="project-link website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
