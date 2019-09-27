import React from 'react'
import { render } from '@test'
import Box from '../Box'
import 'jest-styled-components'

test('<Box> renders', () => {
  const { getByText } = render(<Box>Hello world</Box>)

  expect(getByText(`Hello world`)).toMatchSnapshot()
})

test('<Box> renders with props', () => {
  const { getByText } = render(
    <Box m={2} px={[1, 2, 3]}>
      Hello world
    </Box>
  )

  expect(getByText(`Hello world`)).toMatchSnapshot()
  expect(getByText(`Hello world`)).toHaveStyle(`margin: 8px`)
})

test('<Box> renders with as prop', () => {
  const { getByText } = render(
    <Box m={2} as="header">
      Hello world
    </Box>
  )

  expect(getByText(`Hello world`)).toMatchSnapshot()
  expect(getByText(`Hello world`)).toHaveStyle(`margin: 8px`)
})
