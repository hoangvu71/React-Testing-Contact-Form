import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("ContactForm renders without crashing", () => {
  render(<ContactForm />)
});

test("Check if message text renders", () => {
  const {getByText} = render(<App />);
  getByText(/Message/i);
})