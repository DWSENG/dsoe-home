// card component for the students in the students page

import { Card, Text } from '../../styles/items'

export default ({ student: { first_name, last_name, email } }) => {
  return (
    <Card radius=".75rem" column width="auto" height="max-content">
      <Text>
        {first_name} {last_name}
      </Text>
      <Text>{email}</Text>
    </Card>
  )
}
