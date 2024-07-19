import { Author } from "../Models/index.js";

export const showAll = async (req, res, next) => {
  try {
    const authors = await Author.findAll();
    res.status(200).json(authors);
    console.log("Hello")
  } catch {
    res.status(500).json( "Authors not found" );
  }
};

// export const add = async (req, res, next) => {
//   try {
//     const createdAuthor = await Author.create(req.body);
//     res.status(201).json("A author as been created");
//     console.log(createdAuthor);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json("Add author fail");
//   }
//   console.log("Ajout de l'auteur");
// };

// export const suppression = async (req, res, next) => {
//   console.log("Supression de l'auteur");
// };

// export const modification = async (req, res, next) => {
//   console.log("Modification de l'auteur");
// };
