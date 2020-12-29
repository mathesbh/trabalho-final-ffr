import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

test('Menu filmes', () => {
  render(<BrowserRouter>
    <App />
  </BrowserRouter>);
  const menu = screen.getByText('Filmes');
  expect(menu).toBeInTheDocument();
});
