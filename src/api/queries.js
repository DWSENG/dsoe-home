import { gql } from '@apollo/client'

export const GET_COURSE = gql`
  query Course($courseId: Int!) {
    course(courseId: $courseId) {
      courseId
      courseCode
      courseTitle
      courseDescription
      credits
      required
    }
  }
`
export const GET_COURSES = gql`
  query {
    courses {
      courseId
      courseCode
      courseTitle
      credits
      required
      courseDescription
    }
  }
`
export const GET_USERS = gql`
  query {
    users {
      userId
      first
      last
      isAdmin
      email
    }
  }
`
