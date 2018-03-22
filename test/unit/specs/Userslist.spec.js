// Import Vue and the component being tested
import Vue from 'vue'
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

// Mount an instance and inspect the render output
it('renders the correct message', () => {
  const Constructor = Vue.extend(UsersList)
  const vm = new Constructor().$mount()
  expect(vm.$el.textContent.trim()).to.equal('La top 10 dei partecipanti. Sei tra loro?')
})

