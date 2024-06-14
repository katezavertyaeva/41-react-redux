import Button from "components/Button/Button"
import { UsersPageWrapper, UserCard, Paragraph } from "./styles"

import { useAppSelector, useAppDispatch } from "store/hooks"
import { userSliceSelectors, usersSliceActions } from "store/redux/users/usersSlice"

function Users() {
  const users = useAppSelector(userSliceSelectors.users)
  const dispatch = useAppDispatch();

  const userCards = users.map((user) => {
    return (
      <UserCard key={user.id}>
        <Paragraph>{user.fullName}</Paragraph>
        <Paragraph>{user.age}</Paragraph>
        <Paragraph>{user.jobTitle}</Paragraph>
        <Button name='Delete' onClick={() => { dispatch(usersSliceActions.deleteUser(user.id)) }} />
      </UserCard>
    )
  })

  const deleteAllUsers = () => {
    dispatch(usersSliceActions.deleteAllUsers())
  }

  return (
    <UsersPageWrapper>
      {userCards}
      {users.length > 0 && <Button name='Delete All Users' onClick={deleteAllUsers} />}
    </UsersPageWrapper>
  )
}

export default Users
