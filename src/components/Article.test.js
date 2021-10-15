// Libraries
import React from "react";
import moment from "moment";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// Components
import Article from "./Article";

// Dummy Data
const testArticle = {
  id: 1,
  headline: "Super-Cool Headline",
  createdOn: moment()
    .subtract(Math.random() * 10, "days")
    .format(),
  author: "The Tester",
  image: 134,
  summary: "Summary of the article",
  body: "No lorem-ipsum, here... wait a minute...",
};

// Tests
test("renders component without errors", () => {
  render(<Article article={testArticle} />);
});

test("renders headline, author from the article when passed in through props", () => {
  // Arrange: Render the article
  render(<Article article={testArticle} />);

  // Act/Assert: Get the article elements/check if they exist
  screen.getByText("Super-Cool Headline");
  screen.getByText("By The Tester");
  screen.getByText("Summary of the article");
  screen.getByText("No lorem-ipsum, here... wait a minute...");
});

test('renders "Associated Press" when no author is given', () => {
  // Arrange: Create an article without an author
  const noAuthorArticle = {
    ...testArticle,
    author: "",
  };

  // Act: Render the article with the test case data
  render(<Article article={noAuthorArticle} />);

  // Assert: Check if we get the expected author
  screen.getByText("By Associated Press");
});

test("executes handleDelete when the delete button is pressed", () => {
  // Arrange: Create a mock delete function, and render Article with the mock
  const handleDeleteMock = jest.fn();
  render(<Article article={testArticle} handleDelete={handleDeleteMock} />);

  // Act: Click on the delete article button
  const deleteButton = screen.getByTestId("deleteButton");
  userEvent.click(deleteButton);

  // Assert: Check if the delete function was called
  expect(handleDeleteMock).toBeCalled();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.
