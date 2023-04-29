import { render, screen } from '@testing-library/react';
import Header from '../components/Banner/Header'

describe('Header component', () => {
  it('should render rotating React logo and pulsing button', () => {
    render(<Header />);
    const rotatingReactLogo = screen.getByTestId('rotating-react-logo');
    expect(rotatingReactLogo).toHaveClass('react-icons-spin');
    const pulseButton = screen.getByTestId('pulse-button');
    expect(pulseButton).toHaveClass('pulse');
  });
});