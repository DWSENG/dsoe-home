import Modal from 'react-modal'
import { useProxy } from 'valtio'

import store from '../../store'
import { modalStyles, Wrapper } from '../../styles/containers'
import { Text, Title, Btn } from '../../styles/items'
Modal.setAppElement('#root')

export default ({ isOpen, closeModal, course, openCourseEditModal }) => {
  const { isAdmin } = useProxy(store)

  const courseModalStyles = course && {
    ...modalStyles,
    content: {
      ...modalStyles.content,
      background: course.required ? '#7577C480' : '#199E8480',
    },
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
          overflow
        >
          <Title>{course.course_title}</Title>
          <Text fontSize="2rem">{course.course_code}</Text>
          <Text fontSize="1.5rem">{course.credits} credits</Text>
          <Text fontSize="1.5rem">{course.course_description}</Text>
          <Wrapper
            width="100%"
            height="auto"
            justifyContent="space-between"
            alignItems="space-between"
            wrapperBtns
          >
            <Btn link>delete</Btn>
            <Btn onClick={openCourseEditModal} tertiary>
              edit
            </Btn>
          </Wrapper>
        </Wrapper>
      </Modal>
    )
  )
}
