import { Professor } from "../Models/professor.js";
import bcrypt from "bcrypt"

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

//professor sign-up
const insertProfessor = async (req, res, next) => {
    try {
        const password = req.body.password
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        const professor = await Professor.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        res.status(201).json({ data: professor });
    } catch (error) {
        next(error)
    }
}

//professor login
const loginProfessor = async (req, res, next) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const professor = await Professor.findOne({
            where: {
                email: email
            }
        })
        if (professor) {
            const passwordMatch = await bcrypt.compare(password, professor.password)
            if (passwordMatch)
                res.status(200).json({ data: professor })
            else
                res.status(400).json({ message: 'Password is incorrect.' })
        }
        else
            res.status(400).json({ message: 'Email is incorrect.' })
    } catch (error) {
        next(error)
    }
}

export {
    getProfessorById,
    getAllProfessors,
    insertProfessor,
    loginProfessor
}