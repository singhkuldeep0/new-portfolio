export const allProjectsQuery = () => {
    const query = `*[_type == "projects"] | order(_createdAt desc)`;
    return query;
};

export const myDetailsQuery = ()=>{
    
}