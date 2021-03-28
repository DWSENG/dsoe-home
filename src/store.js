import { proxy } from 'valtio'

const store = proxy({
  isAuthenticated: false,
  userAccount: {},
  isAdmin: true,
  courseSearch: '',
  studentSearch: '',
  termSearch: '',
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
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3500',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3500',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3500',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3500',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3500',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3500',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3500',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3500',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3500',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3500',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3500',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3500',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3500',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3500',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3500',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3500',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3500',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3400', credits: '5', required: true },
  ],
  terms: [
    {
      season: 'fall',
      credits: 0,
      year: 2018,
      courses: [
        {
          title: 'Database Systems',
          id: 'SENG3400',
          credits: '5',
          required: true,
        },
        {
          title: 'Human Computer Interaction',
          id: 'SENG3500',
          credits: '3',
          required: false,
        },
        {
          title: 'Database Systems',
          id: 'SENG3400',
          credits: '5',
          required: true,
        },
        {
          title: 'Human Computer Interaction',
          id: 'SENG3500',
          credits: '3',
          required: false,
        },
      ],
    },
    {
      season: 'spring',
      credits: 0,
      year: 2019,
      courses: [
        {
          title: 'Database Systems',
          id: 'SENG3400',
          credits: '5',
          required: true,
        },
        {
          title: 'Human Computer Interaction',
          id: 'SENG3500',
          credits: '3',
          required: false,
        },
        {
          title: 'Human Computer Interaction',
          id: 'SENG3500',
          credits: '3',
          required: false,
        },
        {
          title: 'Database Systems',
          id: 'SENG3400',
          credits: '5',
          required: true,
        },
        {
          title: 'Human Computer Interaction',
          id: 'SENG3500',
          credits: '3',
          required: false,
        },
      ],
    },
    {
      season: 'fall',
      credits: 0,
      year: 2019,
      courses: [
        {
          title: 'Database Systems',
          id: 'SENG3400',
          credits: '5',
          required: true,
        },
        {
          title: 'Human Computer Interaction',
          id: 'SENG3500',
          credits: '3',
          required: false,
        },
        {
          title: 'Human Computer Interaction',
          id: 'SENG3500',
          credits: '3',
          required: false,
        },
        {
          title: 'Database Systems',
          id: 'SENG3400',
          credits: '5',
          required: true,
        },
        {
          title: 'Human Computer Interaction',
          id: 'SENG3500',
          credits: '3',
          required: false,
        },
      ],
    },
    {
      season: 'spring',
      credits: 0,
      year: 2020,
      courses: [
        {
          title: 'Database Systems',
          id: 'SENG3400',
          credits: '5',
          required: true,
        },
        {
          title: 'Human Computer Interaction',
          id: 'SENG3500',
          credits: '3',
          required: false,
        },
        {
          title: 'Database Systems',
          id: 'SENG3400',
          credits: '5',
          required: true,
        },
        {
          title: 'Human Computer Interaction',
          id: 'SENG3500',
          credits: '3',
          required: false,
        },
      ],
    },
    {
      season: 'fall',
      credits: 0,
      year: 2020,
      courses: [
        {
          title: 'Database Systems',
          id: 'SENG3400',
          credits: '5',
          required: true,
        },
        {
          title: 'Human Computer Interaction',
          id: 'SENG3500',
          credits: '3',
          required: false,
        },
        {
          title: 'Human Computer Interaction',
          id: 'SENG3500',
          credits: '3',
          required: false,
        },
        {
          title: 'Database Systems',
          id: 'SENG3400',
          credits: '5',
          required: true,
        },
        {
          title: 'Human Computer Interaction',
          id: 'SENG3500',
          credits: '3',
          required: false,
        },
      ],
    },
    {
      season: 'spring',
      credits: 0,
      year: 2021,
      courses: [
        {
          title: 'Human Computer Interaction',
          id: 'SENG3500',
          credits: '3',
          required: false,
        },
        {
          title: 'Database Systems',
          id: 'SENG3400',
          credits: '5',
          required: true,
        },
        {
          title: 'Human Computer Interaction',
          id: 'SENG3500',
          credits: '3',
          required: false,
        },
      ],
    },
    { season: 'fall', credits: 0, year: 2021, courses: [] },
  ],
  students: [
    { name: 'david', username: 'magdavj@dunwoody.edu', year: 3 },
    { name: 'david', username: 'magdavj@dunwoody.edu', year: 3 },
    { name: 'david', username: 'magdavj@dunwoody.edu', year: 3 },
    { name: 'david', username: 'magdavj@dunwoody.edu', year: 3 },
    { name: 'david', username: 'magdavj@dunwoody.edu', year: 3 },
    { name: 'david', username: 'magdavj@dunwoody.edu', year: 3 },
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
export const setStudentSearch = (search) => {
  store.studentSearch = search
}
export const setTermSearch = (search) => {
  store.termSearch = search
}

export const getCourse = (id) => {
  return store.courses.find(
    (course) => course.id.toLowerCase() == id.toLowerCase()
  )
}

export const addCourse = () => {}

export default store
