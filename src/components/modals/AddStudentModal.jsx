import Modal from 'react-modal'

import { Wrapper } from '../../styles/containers'
import { Btn, Input, Label, Text } from '../../styles/items'
import useForm from '../hooks/useForm'
Modal.setAppElement('#root')

export default ({ isOpen, closeModal }) => {
  const [{ name, username, year }, handleChange] = useForm({
    name: '',
    username: '',
    year: '',
  })

  const handleAdd = () => {
    /**
     * TODO
     */
    console.log(`"${name}" added`)
    closeModal()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="add student"
      style={modalStyles}
    >
      <Text color="white" fontSize="2rem">
        add student
      </Text>
      <Wrapper width="auto" margin="1rem" column>
        <Label modal>name</Label>
        <Input
          name="name"
          fontSize="1.25rem"
          border
          placeholder="name"
          modal
          value={name}
          onChange={handleChange}
        />
      </Wrapper>
      <Wrapper width="auto" margin="1rem" column>
        <Label modal>username</Label>
        <Input
          name="username"
          fontSize="1.25rem"
          border
          placeholder="username"
          modal
          value={username}
          onChange={handleChange}
        />
      </Wrapper>
      <Wrapper width="auto" margin="1rem" column>
        <Label modal>year</Label>
        <Input
          name="year"
          fontSize="1.25rem"
          border
          placeholder="year"
          modal
          value={year}
          onChange={handleChange}
        />
      </Wrapper>
      {name && username && year ? (
        <Btn secondary onClick={handleAdd}>
          add
        </Btn>
      ) : (
        <Btn secondaryDisabled>add</Btn>
      )}
    </Modal>
  )
}

const modalStyles = {
  content: {
    margin: 'auto',
    width: 'max-content',
    height: 'max-content',
    position: 'absolute',
    borderRadius: '1em',
    border: 'none',
    background: '#9e2933',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '2px 2px 20px 3px rgba(0,0,0,.45)',
  },
  overlay: {
    background: 'rgba(255, 255, 255, 0.85)',
  },
}
