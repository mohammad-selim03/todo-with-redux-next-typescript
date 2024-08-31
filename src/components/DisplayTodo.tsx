"use client";
import { MdDelete } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../type";
import { addTodo, deleteTodo, removeTodo } from "@/app/redux/todoSlice";
import toast from "react-hot-toast";
interface Todo {
  todoo: [];
}

const DisplayTodo = () => {
  const { todoo } = useSelector((state: State) => state);

  const { todo } = todoo;
  const dispatch = useDispatch();
  //   const handleDeleteOne = (id) => {
  //     console.log(id);
  //     const remainingItem = todo?.filter((item) => item?._id !== id)
  //     dispatch(addTodo(remainingItem))
  //   };

  return (
    <div className="flex flex-col gap-4 p-4 mt-2 border border-gray-500 rounded-md w-full px-10 overflow-auto">
      <div className="">
        <h2 className="text-lg font-semibold">
          {todo?.map((tod) => (
            <li key={tod?._id} className="flex items-center justify-between bg-slate-100 mt-5 px-4 py-3 rounded-md gap-10 ">
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
          <span className="flex items-center justify-center gap-5 mt-5 text-center text-xl font-semibold cursor-pointer  bg-red-500 text-white w-40 mx-auto h-10 rounded-md" onClick={() => {
            dispatch(removeTodo(todo))
            toast.success("All todo removed.!")
          }}>
            Delete All <MdDelete size={25}  />{" "}
          </span>
        ) : (
          <span className="text-white font-semibold text-center ml-32">Todo is Empty.!</span>
        )}
      </div>
    </div>
  );
};

export default DisplayTodo;
