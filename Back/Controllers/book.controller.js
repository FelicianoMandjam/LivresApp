import { Book } from "../Models/index.js";

export const showAll = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
    console.log(books);
  } catch {
    // **********************************************
    res.status(500).json("Books not found");
    // **********************************************
  }
};

export const add = async (req, res, next) => {
  try {
    await Book.create(req.body);
    res.status(201).json("Un nouveau livre a été crée");
  } catch (error) {
    console.log(error);
    res.status(500).json("Impossible de créer un nouveau livre");
  }
};

// export const suppression = async (req, res, next) => {
//   console.log("Supression de livre");
// };

// export const modification = async (req, res, next) => {
//   console.log("Modification de livre");
// };
