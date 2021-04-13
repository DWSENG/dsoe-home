import { gql } from '@apollo/client'

export const CREATE_COURSE = gql`
  mutation createCourse(
    $course_title: String!
    $course_code: String!
    $credits: Int!
    $course_description: String!
    $required: Boolean!
  ) {
    createCourse(
      course_title: $course_title
      course_code: $course_code
      credits: $credits
      course_description: $course_description
      required: $required
    ) {
      course_id
      course_title
      course_code
      credits
      course_description
      required
    }
  }
`
