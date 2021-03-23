import { Page } from '../styles/containers'
import { Text } from '../styles/items'

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
    <a target="_blank" href="https://github.com/davidbrekke/dsoe-home">
      <Text>github</Text>
    </a>
  </Page>
)
