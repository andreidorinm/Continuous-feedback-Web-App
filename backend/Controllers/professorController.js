import { Professor } from '../Models/professor.js';

//get professor by id
const getProfessorById = async (req, res, next) => {
  try {
    const professorId = req.params.professorId;
    if (!professorId) {
      res.status(404).json({ message: 'Professor Id not found.' });
    } else {
      const professor = await Professor.findByPk(professorId);
      if (professor) res.status(200).json({ data: professor });
      else res.status(404).json({ message: 'Professor not found.' });
    }
  } catch (error) {
    next(error);
  }
};

//get all professors
const getAllProfessors = async (req, res, next) => {
  try {
    const professors = await Professor.findAll();
    res.status(200).json({ data: professors });
  } catch (error) {
    next(error);
  }
};

const loginProfessor = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const professor = await Professor.findOne({ where: { email: email } });
    if (professor) {
      if (professor.password === password) {
        res.status(200).json({ data: professor });
      } else {
        res.status(401).json({ message: 'Invalid password.' });
      }
    } else {
      res.status(404).json({ message: 'Professor not found.' });
    }
  } catch (error) {
    next(error);
  }
};

export { getProfessorById, getAllProfessors, loginProfessor };
