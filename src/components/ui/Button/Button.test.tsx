import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react';

import Button from '.';

describe('Button', () => {
  it('should render the button correctly', () => {
    const { getByRole } = render(<Button>Click Me!</Button>)
    expect(getByRole('button').textContent).toBe('Click Me!')
  })
})
