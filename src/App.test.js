/*
 * @Author: chenyang.yao
 * @Date: 2020-01-17 16:07:39
 * @LastEditTime: 2020-01-17 16:36:31
 * @LastEditors: chenyang.yao
 */
import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
