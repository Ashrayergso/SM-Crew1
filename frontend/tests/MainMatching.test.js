import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainMatchingPage from '../MainMatchingComponents/MainMatchingPage';

describe('<MainMatchingPage />', () => {
  test('it should mount', () => {
    render(<MainMatchingPage />);
    
    const mainMatchingPage = screen.getByTestId('MainMatchingPage');

    expect(mainMatchingPage).toBeInTheDocument();
  });
});