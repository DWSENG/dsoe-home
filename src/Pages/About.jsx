import { Page } from '../styles/containers'
import { Text, A } from '../styles/items'
import { FaGithub } from 'react-icons/fa'

export default () => (
  <Page column alignItems="center" justifyContent="center">
    <Text margin="1rem" fontSize="2rem" color="black">
      Dunwoody College of Technology
    </Text>
    <Text margin="1rem" fontSize="1.5rem">
      Academic plan builder and term designer for the Software Engineering
      Program
    </Text>
    <Text margin="1rem">senior project by David Magnuson</Text>
    <A href="https://github.com/davidbrekke/dsoe-home">
      <FaGithub size={25} />
    </A>
  </Page>
)
