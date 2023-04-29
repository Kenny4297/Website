import { render, screen, fireEvent } from "@testing-library/react";
import ProfComponent from "../components/Banner/ProfComponent";
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
});
