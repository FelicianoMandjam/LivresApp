import { Author } from "../../Models/index.js";
import { jest } from "@jest/globals";
import * as authorController from "../../Controllers/author.controller.js";

jest.mock("../../Models/book.model.js");

describe("getAllAuthors", () => {
  let req, res;
  beforeEach(() => {
    req = {};
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("Should return a list of authors (200)", async () => {
    const mockAuthors = [
      {
        nom: "Auteur 1",
        prenom: "auteur 1",
      },
      {
        nom: "Auteur 2",
        prenom: "auteur 2",
      },
    ];

    jest.spyOn(Author, "findAll").mockResolvedValue(mockAuthors);
    await authorController.showAll(req, res);

    expect(Author.findAll).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockAuthors);
  });

  it("should return a 500 status code if an error occours (500)", async () => {
    jest.spyOn(Author, "findAll").mockRejectedValue(new Error());
    await authorController.showAll(req, res);
    expect(Author.findAll).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith("Authors not found");
  });
});
