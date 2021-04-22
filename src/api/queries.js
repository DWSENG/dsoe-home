import { gql } from '@apollo/client'

export const GET_COURSE = gql`
  query Course($courseId: Int!) {
    course(courseId: $courseId) {
      course_id
      course_code
      course_title
      credits
      required
      course_description
    }
  }
`
export const GET_COURSES = gql`
  query {
    courses {
      course_id
      course_code
      course_title
      credits
      required
      course_description
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
