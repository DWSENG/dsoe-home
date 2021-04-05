import Modal from 'react-modal'

import { Wrapper, modalStyles } from '../../styles/containers'
import { Btn, Input, Label, Title } from '../../styles/items'
import useForm from '../hooks/useForm'
Modal.setAppElement('#root')

export default ({ isOpen, closeModal }) => {
  const [{ first, last, email }, handleChange] = useForm({
    first: '',
    last: '',
    email: '',
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
      <Title>Add a Student</Title>
      <Wrapper
        glass
        padding="0 1rem 1rem 1rem"
        radius=".5rem"
        width="auto"
        margin="1rem"
        column
      >
        <Label modal>first</Label>
        <Input
          name="first"
          fontSize="1.25rem"
          placeholder="first"
          modal
          value={first}
          onChange={handleChange}
        />
      </Wrapper>
      <Wrapper
        glass
        padding="0 1rem 1rem 1rem"
        radius=".5rem"
        width="auto"
        margin="1rem"
        column
      >
        <Label modal>last</Label>
        <Input
          name="last"
          fontSize="1.25rem"
          placeholder="last"
          modal
          value={last}
          onChange={handleChange}
        />
      </Wrapper>
      <Wrapper
        glass
        padding="0 1rem 1rem 1rem"
        radius=".5rem"
        width="auto"
        margin="1rem"
        column
      >
        <Label modal>email</Label>
        <Input
          name="email"
          fontSize="1.25rem"
          type="email"
          placeholder="email"
          modal
          value={email}
          onChange={handleChange}
        />
      </Wrapper>
      {first && last && email ? (
        <Btn secondary onClick={handleAdd}>
          add
        </Btn>
      ) : (
        <Btn secondaryDisabled>add</Btn>
      )}
    </Modal>
  )
}
