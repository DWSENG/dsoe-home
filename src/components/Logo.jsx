// Logo component
// used in Nav

import { Img, Text } from '../styles/items'
import logo from '../images/logo-white.png'

export default ({ handleNav }) => (
  <>
    <Img src={logo} alt="Dunwoody" onClick={() => handleNav('dashboard')} />
    <Text
      logo
      color="white"
      fontSize="2.5rem"
      margin="0 15%"
      onClick={() => handleNav('dashboard')}
    >
      D
    </Text>
  </>
)
