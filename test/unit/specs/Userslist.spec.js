import UsersList from '../../../src/components/UsersList'

describe('UsersList', () => {
  it('has a mounted hook', () => {
    expect(typeof UsersList.mounted).to.equal('function')
  })
})

it('sets the correct default data', () => {
  expect(typeof UsersList.data).to.equal('function')
  const defaultData = UsersList.data()
  expect(defaultData.paragraph).to.equal('La top 10 dei partecipanti. Sei tra loro?')
  expect(defaultData.limitationList).to.equal(10)
  expect(defaultData.usersLoaded).to.equal(false)
  expect(defaultData.usersUrl).to.equal('https://api.github.com/users/octocat/followers')
})
