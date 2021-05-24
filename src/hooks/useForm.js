// Form hook that takes in a forms initial values and return the values with a setter function

import { useState } from 'react'

export default (initialValues) => {
  const [values, setValues] = useState(initialValues)
  return [
    values,
    (evt) => {
      setValues({ ...values, [evt.target.name]: evt.target.value })
    },
    () => {
      setValues({})
    },
  ]
}
