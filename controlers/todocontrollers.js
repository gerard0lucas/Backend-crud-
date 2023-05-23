const Todo = require("../model/todo");
//...........................get.....................................
const gettodos = async (req, res) => {
    try {
        const todo = await Todo.find();
        res.status(201).json( todo );
    } catch (error) {
        res.status(404).json({
            Error: error.message,
        });
    }
};
//...........................get bu id.....................................
const gettodosbyid = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.status(201).json(todo);
    } catch (error) {
        res.status(404).json({
            Error: error.message,
        });
    }
};
//.........................post..............................
const posttodos = async (req, res) => {
    try {
        const{title, blog} = req.body;
        const todo = await Todo.create({title, blog});
        res.status(201).json({ todo });
    } catch (err) {
        res.status(404).json({
            errorMsg: err.message,
        });
    }
};

//.........................put..............................
const puttodos = async (req, res) => {
    const todo = Todo.findById(req.params.id);
    if (!todo) {
        res.status(404).json({
            message: "no users found",
        });
    }
    const updateduser = await Todo.findByIdAndUpdate(req.params.id, req.body);

    await res.status(202).json(updateduser);
};

//.........................delete..............................

const deletetotos = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(202).json({message:`deleted ${req.params.id}`});
    } catch (error) {
        res.status(404).send({
            Error: error.message,
        });
    }
};

module.exports = {
    gettodos,
    posttodos,
    puttodos,
    deletetotos,
    gettodosbyid
};
