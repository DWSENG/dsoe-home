import Modal from 'react-modal'

import { modalStyles } from '../../styles/containers'
import { Text, Title } from '../../styles/items'
Modal.setAppElement('#root')

export default ({ isOpen, closeModal, course }) => {
  course && console.log('REQUIRED: ', course.required)

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
        <Title>{course.courseTitle}</Title>
        <Text fontSize="2rem">{course.courseCode}</Text>
        <Text fontSize="1.5rem">{course.credits} credits</Text>
        <Text fontSize="1.5rem">{course.courseDescription}</Text>
      </Modal>
    )
  )
}
