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

export const articlesQuery = ()=>{
  const query = `*[_type == "articles"]`
  return query
}

export const articleDetailQuery = (articleId) => {
  const query = `*[_type == "articles" && _id == '${articleId}']`;
  return query;
};
