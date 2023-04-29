import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Header from "../components/Banner/Header";

describe("Header component", () => {
    it("should render rotating React logo", () => {
        render(<Header />);
        const rotatingReactLogo = screen.getByTestId("rotating-react");
        const rotatingReactLogoStyles =
            window.getComputedStyle(rotatingReactLogo);
        expect(rotatingReactLogoStyles.animation).toContain("spin");
    });

    it('should navigate to correct location when clicked', () => {
        render(<Header />);
        const servicesLink = screen.getByTestId('services-link');
        fireEvent.click(servicesLink);
        expect(servicesLink.getAttribute('href')).toEqual('#services');
    
        const recommendationsLink = screen.getByText('Recommendations');
        fireEvent.click(recommendationsLink);
        expect(recommendationsLink.getAttribute('href')).toEqual('#recommendation');
    
        const connectLink = screen.getByText('Connect');
        fireEvent.click(connectLink);
        expect(connectLink.getAttribute('href')).toEqual('#footer');
    });
});

