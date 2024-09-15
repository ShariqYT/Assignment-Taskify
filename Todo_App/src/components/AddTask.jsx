/* eslint-disable react/prop-types */
const AddTask = ({ title, description, handleChange, handleAddOrUpdate, editTaskId }) => {

    return (
        <div className="addTask flex flex-col">
            <h2 className='text-xl font-bold my-5'>Add Task</h2>
            <input
                className='outline-none rounded-xl px-5 py-3 w-full backdrop-blur-sm mb-4 bg-orange-100 border-2 border-orange-300 focus:border-2 focus:border-orange-500'
                name="title"
                value={title}
                type="text"
                placeholder="Enter your title..."
                onChange={handleChange}
                required
            />

            <input
                className='outline-none rounded-xl px-5 py-3 w-full backdrop-blur-sm bg-orange-100 border-2 border-orange-300 focus:border-2 focus:border-orange-500'
                name="description"
                value={description}
                type="text"
                placeholder="Enter your description..."
                onChange={handleChange}
                required
            />

            <button disabled={title.length < 1 || description.length < 1}
                className='my-5 py-3 text-sm font-bold disabled:cursor-not-allowed disabled:bg-opacity-50 rounded-md text-white bg-orange-500 hover:bg-orange-600'
                onClick={handleAddOrUpdate}
            >
                {editTaskId ? 'Update' : 'Add'}
            </button>
        </div>
    )
}

export default AddTask
