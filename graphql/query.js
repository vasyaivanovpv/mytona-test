import gql from "graphql-tag";

export const LOCATIONS_QUERY = gql`
  query($cursor: Int) {
    locations(page: $cursor) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
        residents {
          id
          image
        }
      }
    }
  }
`;

export const LOCATION_QUERY = gql`
  query($id: ID) {
    location(id: $id) {
      name
      type
    }
  }
`;

export const RESIDENTS_QUERY = gql`
  query($id: ID) {
    location(id: $id) {
      name
      residents {
        id
        name
        species
        image
      }
    }
  }
`;

export const RESIDENT_QUERY = gql`
  query($id: ID) {
    character(id: $id) {
      image
      name
      status
      species
      location {
        id
        name
      }
      origin {
        name
      }
    }
  }
`;
