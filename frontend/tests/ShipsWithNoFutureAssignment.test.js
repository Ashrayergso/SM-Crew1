import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShipsWithNoFutureAssignmentPage from '../src/ShipsWithNoFutureAssignmentComponents/ShipsWithNoFutureAssignmentPage';

describe('ShipsWithNoFutureAssignmentPage', () => {
  test('renders ShipsWithNoFutureAssignmentPage component', () => {
    render(<ShipsWithNoFutureAssignmentPage />);
    expect(screen.getByText('Ships With No Future Assignment')).toBeInTheDocument();
  });

  // Add more tests as per your requirements
});