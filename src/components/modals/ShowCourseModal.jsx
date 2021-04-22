import Modal from 'react-modal'
import { useProxy } from 'valtio'
import store from '../../store'
import { useMutation } from '@apollo/client'

import { modalStyles, Wrapper } from '../../styles/containers'
import { Text, Title, Btn } from '../../styles/items'
import { DELETE_COURSE } from '../../api/mutations'
import { GET_COURSES } from '../../api/queries'
Modal.setAppElement('#root')

export default ({ isOpen, closeModal, course, openCourseEditModal }) => {
  const { isAdmin } = useProxy(store)
  const [deleteCourse, { error }] = useMutation(DELETE_COURSE, {
    refetchQueries: [{ query: GET_COURSES }],
  })

  const courseModalStyles = course && {
    ...modalStyles,
    content: {
      ...modalStyles.content,
      background: course.required ? '#7577C480' : '#199E8480',
    },
  }

  const handleDelete = () => {
    confirm(`delete ${course.course_title}?`) &&
      deleteCourse({
        variables: {
          course_id: course.course_id,
        },
      })
    if (error) console.log(error)

    console.log(`successssfully deleted ${course.course_title}`)
    closeModal()
  }
  return (
    course && (
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="add course"
        style={courseModalStyles}
      >
        <Wrapper
          column
          alignItems="center"
          justifyContent="space-between"
          height="auto"
        >
          <Title>{course.course_title}</Title>
          <Text fontSize="2rem">{course.course_code}</Text>
          <Text fontSize="1.5rem">{course.credits} credits</Text>
          <Text fontSize="1.5rem">{course.course_description}</Text>
          {isAdmin && (
            <Wrapper
              width="100%"
              height="auto"
              justifyContent="space-between"
              alignItems="space-between"
              wrapperBtns
            >
              <Btn link onClick={handleDelete}>
                delete
              </Btn>
              <Btn onClick={openCourseEditModal} tertiary>
                edit
              </Btn>
            </Wrapper>
          )}
        </Wrapper>
      </Modal>
    )
  )
}
