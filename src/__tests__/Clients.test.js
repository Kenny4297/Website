import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Clients from "../components/Clients/Clients";

test('clicking the buttons should move the card carousel', () => {
    render(<Clients />);
    const backButton = screen.getByTestId("back-button");
    const forwardButton = screen.getByTestId("forward-button");
    fireEvent.click(forwardButton);
    fireEvent.click(backButton);
});