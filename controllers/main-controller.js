const mysql = require('../mysql');

exports.getTodos = async (req, res, next) => {
    try {
        const query = `SELECT * FROM todos`;

        const result = await mysql.execute(query);

        const response = {
            message: "Voila all the Todos",
            quantity: result.length,
            todos: result.map(r => {
                return {
                    id: r.id,
                    task: r.task,
                    completed: r.completed
                }
            })
        };

        return res.status(201).send(response);
    } catch (error) {
        return res.status(500).send({ error: error });
    }
};

exports.postTodo = async (req, res, next) => {
    try {
        const query = `INSERT INTO todos (task) VALUES (?)`;
        const params = [req.body.task];

        const result = await mysql.execute(query, params);

        const response = {
            message: "Todo successfully inserted",
            todo: {
                id: result.insertId,
                task: req.body.task,
                completed: 0
            }
        };

        return res.status(201).send(response);
    } catch (error) {
        return res.status(500).send({ error: error });
    }
};

exports.deleteTodo = async (req, res, next) => {
    try {
        const query = `DELETE FROM todos WHERE id = ?;`;
        const params = [req.body.id];

        await mysql.execute(query, params);
        
        const response = {
            message: 'Todo successfully removed'
        }

        return res.status(202).send(response);
    } catch (error) {
        return res.status(500).send({ error: error });
    }
};



