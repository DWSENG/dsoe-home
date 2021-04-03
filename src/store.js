import { proxy } from 'valtio'

const store = proxy({
  isAuthenticated: true,
  userAccount: { name: ' , david', username: 'magdavj@dunwoody.edu' },
  isAdmin: false,
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
    { title: 'Database Systems', id: 'SENG3401', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3501',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3402', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3502',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3403', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3503',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3404', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3504',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3405', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3505',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3406', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3506',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3407', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3507',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3408', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3508',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3409', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3509',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3410', credits: '5', required: true },
    {
      title: 'Human Computer Interaction',
      id: 'SENG3510',
      credits: '3',
      required: false,
    },
    { title: 'Database Systems', id: 'SENG3411', credits: '5', required: true },
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
  plan: {
    remaining: [
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
        id: 'SENG3401',
        credits: '5',
        required: true,
      },
      {
        title: 'Human Computer Interaction',
        id: 'SENG3501',
        credits: '3',
        required: false,
      },
      {
        title: 'Database Systems',
        id: 'SENG3402',
        credits: '5',
        required: true,
      },
      {
        title: 'Human Computer Interaction',
        id: 'SENG3502',
        credits: '3',
        required: false,
      },
      {
        title: 'Database Systems',
        id: 'SENG3403',
        credits: '5',
        required: true,
      },
      {
        title: 'Human Computer Interaction',
        id: 'SENG3503',
        credits: '3',
        required: false,
      },
    ],
    term1: [],
    term2: [],
    term3: [],
    term4: [],
    term5: [],
    term6: [],
  },
})

export const setPlan = (_plan) => {
  store.plan = _plan
}

export const authenticate = (account) => {
  store.isAuthenticated = true
  store.userAccount = account
}
export const signout = () => {
  store.isAuthenticated = false
  store.userAccount = {}
}
export const toggleAdmin = () => {
  store.isAdmin = !store.isAdmin
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
