import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react';

import Switch from '.';

describe('Switch', () => {
  it('should render the switch correctly', () => {
    const { getByRole } = render(<Switch />)
    expect(getByRole('switch')).toBeTruthy()
  })
})
