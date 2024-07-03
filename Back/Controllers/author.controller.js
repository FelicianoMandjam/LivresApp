import { Author } from "../Models/index.js";

export const showAll = async (req, res, next) => {
  try {
    const authors = Author.findAll();
    res.status(200).json(authors);
    console.log(authors);
  } catch (error) {
    console.log(error);
    res.status(400).json("Authors not found");
  }
};
export const add = async (req, res, next) => {
  console.log("Ajout de l'auteur");
};

export const suppression = async (req, res, next) => {
  console.log("Supression de l'auteur");
};

export const modification = async (req, res, next) => {
  console.log("Modification de l'auteur");
};
