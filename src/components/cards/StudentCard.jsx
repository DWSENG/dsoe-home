import { Card, Text } from '../../styles/items'

export default ({ student }) => {
  return (
    <Card radius=".75rem" column width="auto" height="max-content">
      <Text>
        {student.first} {student.last}
      </Text>
      <Text>{student.email}</Text>
    </Card>
  )
}
