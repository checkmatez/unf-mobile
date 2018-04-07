import React from 'react'
import renderer from 'react-test-renderer'

import ErrorBoundary from './ErrorBoundary'

test('renders passed children when no error occurs', () => {
  const tree = renderer
    .create(<ErrorBoundary>Some text children</ErrorBoundary>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

const ThrowOnMount = () => {
  throw new Error('test error')
  /* eslint-disable no-unreachable */
  return null
}

test('renders error message if children threw error', () => {
  // eslint-disable-next-line no-console
  console.error = jest.fn()
  const tree = renderer
    .create(
      <ErrorBoundary>
        <ThrowOnMount />
      </ErrorBoundary>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
