/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'
import Form from './index'

it('render task form', () => {
  const { container } = render(<Form />)
  expect(container).toMatchSnapshot()
})
