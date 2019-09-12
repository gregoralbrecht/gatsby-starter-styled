import React from 'react'
import { render } from '@test'
import Flex from '../Flex'
import 'jest-styled-components'

test('<Flex> renders', () => {
  const { getByText } = render(<Flex>Hello world</Flex>)

  expect(getByText(`Hello world`)).toMatchSnapshot()
  expect(getByText(`Hello world`)).toHaveStyle(`display: flex`)
})

test('<Flex> renders with props', () => {
  const { getByText } = render(
    <Flex m={2} px={[1, 2, 3]}>
      Hello world
    </Flex>
  )

  expect(getByText(`Hello world`)).toMatchSnapshot()
  expect(getByText(`Hello world`)).toHaveStyle(`margin: 8px`)
})

test('<Flex> renders with as prop', () => {
  const { getByText } = render(
    <Flex m={2} as="header">
      Hello world
    </Flex>
  )

  expect(getByText(`Hello world`)).toMatchSnapshot()
  expect(getByText(`Hello world`)).toHaveStyle(`margin: 8px`)
})
