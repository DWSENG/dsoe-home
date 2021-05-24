// this file defines the quieres to be used with the apollo server

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
      user_id
      first_name
      last_name
      is_admin
      email
    }
  }
`

export const GET_USER_BY_AZURE_TOKEN = gql`
  query userAzureToken($azure_token: String!) {
    userAzureToken(azure_token: $azure_token) {
      first_name
      last_name
      email
      is_admin
    }
  }
`
