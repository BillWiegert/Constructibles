import React from 'react';
import { Link } from 'react-router';

const ProjectIndexItem = ({ project, router }) => {
  return (
    <div>
      <Link to={ `/projects/${project.id}` }>
        <img className="cover-image" src={project.cover_image_url}/>
      </Link>
      <div className="project-info-bar">
        <Link to={ `/projects/${project.id}` }>
          <span className="title">
            { project.title }
          </span>
        </Link>
        <br/>
        <span className="author">
          by { project.user.username }
        </span>
      </div>
    </div>
  );
};

export default ProjectIndexItem;
