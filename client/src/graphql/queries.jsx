import { gql } from "@apollo/client";

// export const GET_PROGRAM_DATA = gql`
//   query GetAllProgramData {
//     programs {
//       course
//       id
//       semester
//       year
//     }
//   }
// `;

export const GET_PROJECTS_DATA = gql`
  query GetAllProjects {
    projects {
      creator
      description
      name
      slug
      image {
        id
        fileName
        url
      }
      program {
        ... on Program {
          id
          course
        }
      }
    }
  }
`;

export const GET_PROJECT_DETAIL = gql`
  query GetProjectDetail($slug: String!) {
    project(where: { slug: $slug }) {
      creator
      description
      id
      image {
        url
      }
      name
      program {
        ... on Program {
          id
          course
          semester
          year
          points
        }
      }
      slug
      content {
        html
      }
    }
  }
`;

export const GET_ALL_TEAM_MEMBERS = gql`
  query GetAllTeamMembers {
    teamMembers {
      firstname
      lastname
      image {
        url
      }
    }
  }
`;

export const GET_ALL_BLOGS = gql`
  query GetAllBlogs {
    blogs {
      content {
        html
      }
      creator
      description
      name
      image {
        url
      }
      slug
      tags {
        name
      }
    }
  }
`;

export const GET_BLOG_DETAIL = gql`
  query GetBlogDetail($slug: String!) {
    blog(where: { slug: $slug }) {
      content {
        html
      }
      creator
      description
      name
      image {
        url
      }
      slug
    }
  }
`;

export const GET_SEARCH_DATA = gql`
  query GetSearchInfo($_search: String = "") {
    blogs(where: { _search: $_search }) {
      name
      slug
      content {
        html
      }
      creator
      description
    }
    programs(where: { _search: $_search }) {
      id
      course
    }
    projects(where: { _search: $_search }) {
      content {
        html
      }
      creator
      description
      image {
        url
      }
      name
      program {
        ... on Program {
          course
        }
      }
    }
    teamMembers(where: { _search: $_search }) {
      firstname
      lastname
      image {
        url
      }
    }
  }
`;

export const GET_ALL_PROGRAMS = gql`
  query GetAllPrograms {
    programs(first: 25) {
      course
      points
      projects {
        slug
      }
      semester
      year
    }
  }
`;

export const GET_ALL_SERVICES = gql`
  query GetAllServices {
    services {
      content {
        html
      }
      description
      image {
        url
      }
      slug
      title
    }
  }
`;

export const GET_SERVICE_DETAIL = gql`
  query GetServiceDetail($slug: String!) {
    service(where: { slug: $slug }) {
      content {
        html
      }
      description
      image {
        url
      }
      title
      slug
    }
  }
`;
