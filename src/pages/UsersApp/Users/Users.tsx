import { UsersPageWrapper, UserCard, Paragraph } from "./styles"

import { useAppSelector } from "store/hooks"
import { userSliceSelectors } from "store/redux/usersSlice/usersSlice"

function Users() {
  const users = useAppSelector(userSliceSelectors.users)

  const userCards = users.map((user) => {
    return (
      <UserCard key={user.id}>
        <Paragraph>{user.fullName}</Paragraph>
        <Paragraph>{user.age}</Paragraph>
        <Paragraph>{user.jobTitle}</Paragraph>
      </UserCard>
    )
  })

  return (
    <UsersPageWrapper>
      {userCards}
    </UsersPageWrapper>
  )
}

export default Users
