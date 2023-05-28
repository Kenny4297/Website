import { render, screen } from '@testing-library/react';
import Projects from '../components/Projects/Projects';
import React from 'react';

jest.mock("../components/Projects/Slider", () => {
  return function DummySlider() {
    return (
      <div data-testid="slider-comp">Slider</div>
    );
  };
});

describe('Projects', () => {
  it('renders the slider component', () => {
    render(<Projects />);
    const sliderElement = screen.getByTestId("slider-comp");

    expect(sliderElement).toBeInTheDocument();
  });
});
