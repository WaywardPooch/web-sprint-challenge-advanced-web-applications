import React from "react";
import moment from "moment";
import { render } from "@testing-library/react";
import View from "./View";

import articleService from "./../services/articleServices.js";
jest.mock("./../services/articleServices.js");

test("renders zero articles without errors", async () => {
  articleService.mockResolvedValueOnce([]);
  render(<View />);
});

test("renders three articles without errors", async () => {
  articleService.mockResolvedValueOnce([
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
  ]);
  render(<View />);
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.
