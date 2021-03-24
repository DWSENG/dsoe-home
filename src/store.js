import { proxy } from 'valtio'

const store = proxy({
  isAuthenticated: false,
  userAccount: {},
  courseSearch: '',
  courses: [
    // {
    //   title: 'Operating Systems',
    //   courseId: 1,
    //   courseCode: 'SENG3400',
    //   preReqId: null,
    //   courseDescription: '',
    //   programId: null,
    //   required: false,
    //   instructionType: '',
    //   category: '',
    //   subCategory: '',
    //   commentSetId: null,
    //   credits: 4,
    // },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3500',
      credits: '3',
      required: false,
    },
    { title: 'Security I', id: 'SENG3400', credits: '2', required: true },
    {
      title: 'Software Architecture',
      id: 'SENG3400',
      credits: '3',
      required: true,
    },
    {
      title: 'Operating Systems',
      id: 'SENG3400',
      credits: '4',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3400',
      credits: '3',
      required: false,
    },
    { title: 'Security I', id: 'SENG3400', credits: '2', required: true },
    {
      title: 'Software Architecture',
      id: 'SENG3400',
      credits: '3',
      required: true,
    },
    {
      title: 'Operating Systems',
      id: 'SENG3400',
      credits: '4',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3400',
      credits: '3',
      required: false,
    },
    { title: 'Security I', id: 'SENG3400', credits: '2', required: true },
    {
      title: 'Software Architecture',
      id: 'SENG3400',
      credits: '3',
      required: true,
    },
    {
      title: 'Operating Systems',
      id: 'SENG3400',
      credits: '4',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3400',
      credits: '3',
      required: false,
    },
    { title: 'Security I', id: 'SENG3400', credits: '2', required: true },
    {
      title: 'Software Architecture',
      id: 'SENG3400',
      credits: '3',
      required: true,
    },
    {
      title: 'Operating Systems',
      id: 'SENG3400',
      credits: '4',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3400',
      credits: '3',
      required: false,
    },
    { title: 'Security I', id: 'SENG3400', credits: '2', required: true },
    {
      title: 'Software Architecture',
      id: 'SENG3400',
      credits: '3',
      required: true,
    },
  ],
})

export const authenticate = (account) => {
  store.isAuthenticated = true
  store.userAccount = account
}
export const signout = () => {
  store.isAuthenticated = false
  store.userAccount = {}
}

export const setCourseSearch = (search) => {
  store.courseSearch = search
}

export const getCourse = (id) => {
  return store.courses.find(
    (course) => course.id.toLowerCase() == id.toLowerCase()
  )
}

export default store
