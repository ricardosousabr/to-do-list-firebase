/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'
import Form from './index'

it('renders homepage unchanged', () => {
  const { container } = render(<Form />)
  expect(container).toMatchSnapshot()
})
