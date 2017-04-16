export const fetchAllProjects = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/projects',
    data
  })
}

export const fetchSingleProject = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/${id}`
  })
}

export const createProject = (project) => {
  return $.ajax({
    method: 'POST',
    url: 'api/projects',
    dataType: 'json',
    contentType: false,
    processData: false,
    data: project
  })
}

export const editProject = (project) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/projects/${project.get("project[id]")}`,
    dataType: 'json',
    contentType: false,
    processData: false,
    data: project
  })
}

export const deleteProject = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/projects/${id}`
  })
}
