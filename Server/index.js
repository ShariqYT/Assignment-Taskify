const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TaskModel = require('./models/Task');

const app = express();
const port = 3001;
const url = `mongodb://localhost:27017/Taskify`;
app.use(cors());
app.use(express.json());
mongoose.connect(url)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});

app.post('/add', (req, res) => {
    const { title, description, isCompleted, id } = req.body;
    TaskModel.create({ title, description, isCompleted: isCompleted, _id: id }).then(result => res.json(result)).catch(err => res.json(err))
})

app.get('/tasks', (req, res) => {
    TaskModel.find().then(result => res.json(result))
})

app.put('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, } = req.body;
    TaskModel.findByIdAndUpdate({ _id: id }, { title, description, }, { new: true }).then(result => res.json(result)).catch(err => res.json(err))
})

app.put('/checkbox/:id', (req, res) => {
    const { id } = req.params;
    const { isCompleted } = req.body;
    TaskModel.findByIdAndUpdate({ _id: id }, { isCompleted: isCompleted }, { new: true }).then(result => res.json(result)).catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    TaskModel.findByIdAndDelete({ _id: id }).then(result => res.json(result)).catch(err => res.json(err))
})