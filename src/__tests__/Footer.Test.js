import { render, fireEvent, screen } from "@testing-library/react";
import Footer from "../components/Footer/Footer";
import React from "react";
import emailjs from "@emailjs/browser";
jest.mock("@emailjs/browser", () => ({
    sendForm: jest.fn(),
}));

describe("Footer", () => {
    it("sends an email when the user hits the submit button", async () => {
        render(<Footer />);

        const nameInput = screen.getByTestId("name-input");
        const emailInput = screen.getByTestId("email-input");
        const messageInput = screen.getByTestId("message-input");
        const submitButton = screen.getByTestId("submit-button");

        await fireEvent.change(nameInput, { target: { value: "John Smith" } });
        await fireEvent.change(emailInput, {
            target: { value: "test@example.com" },
        });
        await fireEvent.change(messageInput, {
            target: { value: "Hello, this is a test message!" },
        });

        fireEvent.click(submitButton);

        expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
        expect(emailjs.sendForm).toHaveBeenCalledWith(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            expect.any(HTMLFormElement),
            process.env.REACT_APP_EMAILJS_USER_ID
        );
    });
});
