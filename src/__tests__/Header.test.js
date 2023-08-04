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
    
        const testimonialsLink = screen.getByText('Testimonials');
        fireEvent.click(testimonialsLink);
        expect(testimonialsLink.getAttribute('href')).toEqual('#recommendation');
    
        const connectLink = screen.getByText('Connect');
        fireEvent.click(connectLink);
        expect(connectLink.getAttribute('href')).toEqual('#footer');
    });

    it("should toggle the navigation menu when clicking the bars", () => {
        render(<Header />);
        const bars = screen.getByTestId("bars");
        const nav = screen.getByTestId("nav");

        fireEvent.click(bars);
        expect(nav.style.height).toBe("100vh");

        fireEvent.click(bars);
        expect(nav.style.height).toBe("0px");
    });

    it("should close the navigation menu when clicking a link on small screen", () => {
        render(<Header />);
        const servicesLink = screen.getByTestId("services-link");
        const nav = screen.getByTestId("nav");

        window.matchMedia = jest.fn().mockImplementation((query) => {
            return {
                matches: query.includes("(max-width: 640px)"),
                media: query,
                addListener: () => {},
                removeListener: () => {},
            };
        });

        fireEvent.click(screen.getByTestId("bars"));
        expect(nav.style.height).toBe("100vh");

        fireEvent.click(servicesLink);
        expect(nav.style.height).toBe("0px");
    });
});

