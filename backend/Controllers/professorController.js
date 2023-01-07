import { Professor } from '../Models/professor.js';

//get professor by id
const getProfessorById = async (req, res, next) => {
  try {
    const professorId = req.params.professorId;
    const professor = await Professor.findByPk(professorId);
    if (professor) res.status(200).json({ data: professor });
    else res.status(404).json({ message: 'Professor not found.' });
  } catch (error) {
    next(error);
  }
};

export { getProfessorById };
