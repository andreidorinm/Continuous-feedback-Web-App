import express from "express";
import {Professor} from "../Models/professor.js";

const professorRouter = express.Router();

//get all proferssors
professorRouter.get("/allProfessors", async (request, response, next) => {
    try {
      const proferssors = await Professor.findAll();
      if (proferssors.length > 0) {
        response.json(proferssors);
      } else {
        response.sendStatus(204);
      }
    } catch (error) {
      next(error);
    }
  });

//get professor by id
professorRouter.get(
    "/:professorId",
    async (request, response, next) => {
      try {
        const professor = await Professor.findByPk(request.params.professorId);
          if (professor) {
            response.json(professor);
          } else {
            response.sendStatus(404);
          }
      } catch (error) {
        next(error);
      }
    }
  );

  