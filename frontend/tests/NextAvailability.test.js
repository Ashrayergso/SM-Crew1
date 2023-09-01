import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NextAvailabilityPage from '../NextAvailabilityComponents/NextAvailabilityPage';

describe('<NextAvailabilityPage />', () => {
  test('it should mount', () => {
    render(<NextAvailabilityPage />);
    
    const nextAvailabilityPage = screen.getByTestId('NextAvailabilityPage');

    expect(nextAvailabilityPage).toBeInTheDocument();
  });
});