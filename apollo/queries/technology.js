import gql from "graphql-tag";

export const TECHNOLOGIES = gql`
    query Technologies {
        technologies {
            id
            description
            logo {
                url
            }
        }
    }
`;