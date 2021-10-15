import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import { App } from './app';

it('renders correctly', async () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('heading')).toHaveTextContent('Welcome');
});
