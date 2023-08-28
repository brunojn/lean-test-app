import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../components/Button'; 
import '@testing-library/jest-dom';

describe('Button', () => {
  it('renders the button with the provided label', () => {
    const label = 'Click me';
    const onClickMock = jest.fn(); 
    const { getByText } = render(<Button label={label} onClick={onClickMock} />);
    const button = getByText(label);
    expect(button).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', () => {
    const onClickMock = jest.fn();
    const label = 'Click me';
    const { getByText } = render(<Button label={label} onClick={onClickMock} />);
    const button = getByText(label);

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
