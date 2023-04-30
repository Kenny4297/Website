import { render, screen, fireEvent } from "@testing-library/react";
import ProfComponent, {pulse} from "../components/Banner/ProfComponent";
import React from "react";

describe("ProfComponent", () => {
    it("should navigate to the correct links when clicked", () => {
        render(<ProfComponent />);
        const linkedinLink = screen.getByTitle("LinkedIn");
        fireEvent.click(linkedinLink);
        expect(linkedinLink).toHaveAttribute(
            "href",
            "https://www.linkedin.com/in/kedgard-cordero/"
        );

        const githubLink = screen.getByTitle("GitHub");
        fireEvent.click(githubLink);
        expect(githubLink).toHaveAttribute(
            "href",
            "https://github.com/Kenny4297"
        );
    });

    test('button should pulse', () => {
        render(<ProfComponent />);
        const button = screen.getByRole('button');
        expect(button).toHaveStyle({ animationName: pulse });
    });

    test('clicking the button should navigate to the footer', () => {
        render(<ProfComponent />);
        const button = screen.getByText("Let's Create Something");
        fireEvent.click(button);
        const link = screen.getByTestId('footer-link');
        expect(link.getAttribute('href')).toEqual('#footer');
      });
});
