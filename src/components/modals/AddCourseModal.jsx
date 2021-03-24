import { useState } from 'react'
import Modal from 'react-modal'

import { Wrapper } from '../../styles/containers'
import { Btn, Input, Label, Text } from '../../styles/items'
Modal.setAppElement('#root')

export default ({ isOpen, closeModal }) => {
  const [title, setTitle] = useState('')
  const [code, setCode] = useState('')
  const [credits, setCredits] = useState('')

  const handleAdd = () => {
    console.log(`"${title}" added`)
    closeModal()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="add course"
      style={modalStyles}
    >
      <Text color="white" fontSize="2rem">
        add course
      </Text>
      <Wrapper width="auto" margin="1rem" column>
        <Label modal>title</Label>
        <Input
          fontSize="1.25rem"
          border
          placeholder="title"
          modal
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Wrapper>
      <Wrapper width="auto" margin="1rem" column>
        <Label modal>code</Label>
        <Input
          fontSize="1.25rem"
          border
          placeholder="code"
          modal
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </Wrapper>
      <Wrapper width="auto" margin="1rem" column>
        <Label modal>credits</Label>
        <Input
          fontSize="1.25rem"
          border
          placeholder="credits"
          modal
          value={credits}
          onChange={(e) => setCredits(e.target.value)}
        />
      </Wrapper>
      {title && code && credits ? (
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
