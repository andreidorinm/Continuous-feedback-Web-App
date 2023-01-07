import { Sequelize } from "sequelize";

//handle JSON errors
const handleJSONParsing = (err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ error: 'Invalid JSON' });
    }
    return next(err);
};

//handle errors encountered in queries
const handleQueries = (err, req, res, next) => {
    const sequelizeErrors = [Sequelize.ForeignKeyConstraintError, Sequelize.ExclusionConstraintError, Sequelize.ValidationError]
    if (sequelizeErrors.some(error => err instanceof error)) {
        const errors = err.errors.map(error => error.message);
        return res.status(400).json({ errors });
    }
    return next(err);
};

//handle other Database errors
const handleDatabase = (err, req, res, next) => {
    if (err instanceof Sequelize.DatabaseError) {
        return res.status(500).json({ error: 'An error occurred while accessing the database' });
    }
    return next(err);
};

//handle all other errors
const handleServer = (err, req, res, next) => {
    console.error(`[ERROR]: ${err}`);
    return res.status(500).json({ error: err.message });
};

export {
    handleJSONParsing,
    handleQueries,
    handleDatabase,
    handleServer
};