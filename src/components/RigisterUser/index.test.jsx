/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'
import RigisterUser from './index'

it('render registration form', () => {
  const { container } = render(<RigisterUser />)
  expect(container).toMatchSnapshot()
})
