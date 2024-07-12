import { Book } from "../../Models/index.js";
import { jest } from "@jest/globals";
import * as bookController from "../../Controllers/book.controller.js";

jest.mock("../../Models/book.model.js");

describe("getAllLivres", () => {
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

  it("Should return a list of books (200)", async () => {
    const mockLivres = [{ titre: "Livre 1" }, { titre: "Livre 2" }];

    jest.spyOn(Book, "findAll").mockResolvedValue(mockLivres);
    await bookController.showAll(req, res);

    expect(Book.findAll).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockLivres);
  });

  it("should return a 500 status code if an error occours (500)", async () => {

    jest.spyOn(Book, "findAll").mockRejectedValue(new Error());
    await bookController.showAll(req, res);
    expect(Book.findAll).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith("Books not found");
    
  });
});
