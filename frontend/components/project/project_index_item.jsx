import React from 'react';
import { Link } from 'react-router';

const ProjectIndexItem = ({ project, router }) => {
  return (
    <Link to={ `/projects/${project.id}` }>
      <div className="cover-image"></div>
      <div className="project-info-bar">
        <span className="title">
          { project.title }
        </span>
        <br/>
        <span className="author">
          { project.user.username }
        </span>
      </div>
    </Link>
  );
};

export default ProjectIndexItem;
