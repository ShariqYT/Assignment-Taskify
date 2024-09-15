import { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';
import TaskLists from './TaskLists';

const Home = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tasks, setTasks] = useState([])
    const [editTaskId, setEditTaskId] = useState(null)
    const [showFinished, setShowFinished] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3001/tasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setTasks(data)
            })
            .catch(error => {
                toast.error(error, {
                    style: {
                        background: 'red',
                        color: '#fff',
                    }
                })
            })
    }, [])

    const toggleFinished = () => {
        setShowFinished(!showFinished)
    }

    const handleChange = (e) => {
        if (e.target.name === "title") {
            setTitle(e.target.value)
        } else {
            setDescription(e.target.value)
        }
    }

    const handleAddOrUpdate = () => {
        if (editTaskId) {
            const id = editTaskId
            fetch(`http://localhost:3001/edit/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, description, id })
            })
                .then(response => response.json())
                .then(editedTask => {
                    const editedTasks = tasks.map(item =>
                        item._id === editTaskId ? editedTask : item
                    );
                    setTasks(editedTasks);
                    setEditTaskId(null);
                    setTitle("");
                    setDescription("");
                    toast.success("Task updated successfully", {
                        style: {
                            background: 'green',
                            color: '#fff',
                        }
                    });
                })
                .catch(error => {
                    toast.error(error.message || "An error occurred while updating the task.", {
                        style: {
                            background: 'red',
                            color: '#fff',
                        }
                    });
                });
        } else {
            setTasks([...tasks, { id: uuidv4(), title, description, isCompleted: false }])
            try {
                const addTask = fetch('http://localhost:3001/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ title, description, isCompleted: false, id: uuidv4() })
                })

                if (addTask) {
                    toast.success('Task added successfully', {
                        style: {
                            background: 'green',
                            color: '#fff',
                        }
                    })
                }
            } catch (error) {
                toast.error(error, {
                    style: {
                        background: 'red',
                        color: '#fff',
                    }
                })
            }
        }
        setTitle("")
        setDescription("")
    }

    const handleEdit = (id) => {
        const taskToEdit = tasks.find(item => item._id === id)
        setTitle(taskToEdit.title)
        setDescription(taskToEdit.description)
        setEditTaskId(id)
    }

    const handleDelete = (id) => {
        const confirmResponse = confirm("Are you sure you want to delete this task?")
        if (!confirmResponse) return
        const newTasks = tasks.filter(item => item._id !== id)
        setTasks(newTasks)

        try {
            fetch(`http://localhost:3001/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            })

            toast.success("Task deleted successfully", {
                style: {
                    background: 'green',
                    color: '#fff',
                }
            })
        } catch (error) {
            toast.error(error || "An error occurred while deleting the task.", {
                style: {
                    background: 'red',
                    color: '#fff',
                }
            })
        }

    }

    const handleCheckBox = (id) => {
        const newTasks = tasks.map(item =>
            item._id === id ? { ...item, isCompleted: !item.isCompleted } : item
        )
        setTasks(newTasks)

        try {
            fetch(`http://localhost:3001/checkbox/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ isCompleted: !tasks.find(item => item._id === id).isCompleted, id })
            })

            toast.success("Your task has been moved to completed/incomplete tasks", {
                style: {
                    background: 'green',
                    color: '#fff',
                }
            })
        } catch (error) {
            toast.error(error || "An error occurred while updating the task.", {
                style: {
                    background: 'red',
                    color: '#fff',
                }
            });
        }
    }

    return (
        <div className="bg-orange-200 p-8 rounded-xl min-w-full min-h-[75vh] overflow-y-auto drop-shadow-xl">

            <AddTask editTaskId={editTaskId} title={title} description={description} handleChange={handleChange} handleAddOrUpdate={handleAddOrUpdate} />

            <input onChange={toggleFinished} type="checkbox" className='accent-orange-400' checked={showFinished} /> Show Completed Tasks
            <h1 className='text-xl font-bold mt-10 mb-4'>Your Tasks</h1>

            <TaskLists tasks={tasks} handleCheckBox={handleCheckBox} handleEdit={handleEdit} handleDelete={handleDelete} showFinished={showFinished} />

        </div>
    )
}

export default Home
