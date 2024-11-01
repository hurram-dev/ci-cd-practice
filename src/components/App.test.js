import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

test('app snapshot test', () => {
  const appComponent = renderer.create(<App />)
  const appTree = appComponent.toJSON()

  expect(appTree).toMatchSnapshot()
})
