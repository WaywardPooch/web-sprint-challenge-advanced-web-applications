// Libraries
import React from "react";
import moment from "moment";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
// Components
import View from "./View";
// Mock API
import articleService from "./../services/articleServices.js";
jest.mock("./../services/articleServices.js");

// Tests
test("renders zero articles without errors", async () => {
  // Arrange: Return an empty array as data from the API
  articleService.mockResolvedValueOnce({
    data: [],
  });

  // Act: Render the articles page
  render(<View />);

  // Assert: Expect there to be 0 articles on-screen
  await waitFor(() => {
    const articles = screen.queryAllByTestId("article");
    expect(articles).toHaveLength(0);
  });
});

test("renders three articles without errors", async () => {
  // Arrange: Return 3 articles from the API
  articleService.mockResolvedValueOnce({
    data: [
      {
        id: 1,
        headline: "Super-Cool Headline",
        createdOn: moment()
          .subtract(Math.random() * 10, "days")
          .format(),
        author: "The Tester",
        image: 134,
        summary: "Summary of the article",
        body: "No lorem-ipsum, here... wait a minute...",
      },
      {
        id: 2,
        headline: "Another Headline",
        createdOn: moment()
          .subtract(Math.random() * 10, "days")
          .format(),
        author: "",
        image: 175,
        summary: "This one also has a summary",
        body: "All lorem, all ipsum!",
      },
      {
        id: 3,
        headline: "The Third Headline",
        createdOn: moment()
          .subtract(Math.random() * 10, "days")
          .format(),
        author: "",
        image: 175,
        summary: "How very summary of you!",
        body: "Look: a bird!",
      },
    ],
  });

  // Act: Render the articles page
  render(<View />);

  // Assert: Expect there to be 3 articles on-screen
  await waitFor(() => {
    const articles = screen.queryAllByTestId("article");
    expect(articles).toHaveLength(3);
  });
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.
