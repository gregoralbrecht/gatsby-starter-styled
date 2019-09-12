import React from 'react'
import { render } from '@test'

/**
 * This just verifies that by importing ` @ds/test` will enable
 * automatic cleanup between tests. See:
 * https://testing-library.com/docs/react-testing-library/setup#skipping-auto-cleanup
 */
test('first', () => {
  render(<div>hello</div>)
})

test('second', () => {
  expect(document.body.innerHTML).toEqual('')
})
