import gql from "graphql-tag";

export const PROJECTS = gql`
    query Projects {
        projects(orderBy: createdAt_DESC) {
            id
            name
            description
            year
            url
            githubUrl
            technologies {
                id
                name
            }
        }
    }
`;