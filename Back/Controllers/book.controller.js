import { Book } from "../Models/index.js";

export const showAll = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
    console.log(books);
  } catch (error) {
    console.log(error);
    res.status(400).json("Books not found");
  }
};

export const add = async (req, res, next) => {
  console.log("Ajout de livre");
};

export const suppression = async (req, res, next) => {
  console.log("Supression de livre");
};

export const modification = async (req, res, next) => {
  console.log("Modification de livre");
};
