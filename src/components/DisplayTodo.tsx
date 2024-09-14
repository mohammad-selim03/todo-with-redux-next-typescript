"use client";
import { MdDelete } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../type";
import {  deleteTodo, removeTodo } from "@/app/redux/todoSlice";
import toast from "react-hot-toast";
interface Todo {
  todoo: [];
}

const DisplayTodo = () => {
  const { todo } = useSelector((state: State) => state?.todo);
  const dispatch = useDispatch();

  const handleDelete = () => {
    const isConfirmed = window.confirm("Are you sure to delete all todos.?");
    if (isConfirmed) {
      dispatch(removeTodo());
      toast.success("All todo removed.!");
    }
    else{
      toast.error("Action canceled.!");
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 mt-2 border border-gray-400 rounded-md w-full px-10 overflow-auto">
      <div className="">
        <h2 className="text-lg font-semibold">
          {todo?.map((tod: any) => (
            <li
              key={tod?._id}
              className="flex items-center justify-between bg-slate-100 mt-5 px-4 py-3 rounded-md gap-10 "
            >
              {tod?.todo}{" "}
              <span className="text-md ml-2 text-red-500 cursor-pointer">
                <TiDeleteOutline
                  onClick={() => {
                    dispatch(
                      deleteTodo(tod?._id),
                      toast.success("todo deleted.!")
                    );
                  }}
                  size={25}
                />
              </span>
            </li>
          ))}
        </h2>
        {todo.length >= 1 ? (
          <span
            className="flex items-center justify-center gap-5 mt-5 text-center text-xl font-semibold cursor-pointer  bg-red-500 text-white w-40 mx-auto h-10 rounded-md"
            onClick={handleDelete}
          >
            Delete All <MdDelete size={25} />{" "}
          </span>
        ) : (
          <span className="text-white font-semibold text-center ml-32">
            Todo is Empty.!
          </span>
        )}
      </div>
    </div>
  );
};

export default DisplayTodo;
