/* eslint-disable react/prop-types */
import dayjs from 'dayjs';

const TaskLists = ({ tasks, handleCheckBox, handleEdit, handleDelete, showFinished }) => {
    const filteredTasks = tasks.filter(item => showFinished || !item.isCompleted);

    const formatedDate = (date) => {
        return dayjs(date).format("DD/MM/YYYY")
    }

    return (
        <div className="flex flex-col gap-2">
            {filteredTasks.length === 0 ? (
                <div className='m-5'>No tasks found</div>
            ) : (
                filteredTasks.map(item => (
                    <div key={item._id} className="flex justify-between w-full items-center px-8 py-2 rounded-full border-2 border-orange-400">
                        <div className='flex items-center w-full justify-between mr-20'>
                            <div className='flex gap-10'>
                                <input
                                    name={item._id}
                                    checked={item.isCompleted}
                                    onChange={() => handleCheckBox(item._id)}
                                    type="checkbox"
                                    className='accent-orange-400'
                                />
                                <div className="flex flex-col">
                                    <div className={item.isCompleted ? "line-through font-bold text-lg" : " font-bold text-lg"}>
                                        {item.title}
                                    </div>
                                    <div className={item.isCompleted ? "line-through font-semibold text-base" : " font-semibold text-base"}>
                                        {item.description}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className={"font-bold text-lg"}>
                                    Created
                                </div>
                                <div className={item.isCompleted ? "line-through font-semibold text-base" : " font-semibold text-base"}>
                                    {formatedDate(item.createdAt)}
                                </div>
                            </div>

                        </div>
                        <div className="buttons flex h-full">
                            <button
                                className='mx-1 p-2 py-1 text-sm font-bold rounded-md text-white bg-orange-500 hover:bg-orange-600'
                                onClick={() => handleEdit(item._id)}
                            >
                                Edit
                            </button>
                            <button
                                className='mx-1 p-2 py-1 text-sm font-bold rounded-md text-white bg-orange-500 hover:bg-orange-600'
                                onClick={() => handleDelete(item._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default TaskLists;
