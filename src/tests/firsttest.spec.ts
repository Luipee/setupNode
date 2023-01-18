import { User} from '../models/User'

test('it should be okay', () => {
  const user = new User()

  user.name = "Luis"

  expect(user.name).toEqual('Luis')
})