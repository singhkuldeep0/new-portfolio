  export const allProjectsQuery = () => {
    const query = `*[_type == "projects"]`;
    return query;
  };

  export const projectDetailQuery = (projectId) => {
    const query = `*[_type == "projects" && _id == '${projectId}']`;
    return query;
  };

  export const mydetailsquery = ()=>{
    const query =  `*[_type == 'mydetails']`
    return query
  }

export const technologiesQuery = () => {
  const query = `*[_type == "technologies"]`;
  return query
}

