"use client";
import { addTodo } from "@/app/redux/todoSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import DisplayTodo from "./DisplayTodo";
import { FaPlus } from "react-icons/fa";

const Input = () => {
  const [todo, setTodo] = useState("");
  const [searchValue, setSearchValue] = useState("")
  const dispatch = useDispatch();

  const handleAdd = (e: any) => {
    e.preventDefault();
    if (todo === "") {
      toast.error("Enter todo");
    } else {
      dispatch(addTodo({ _id: Math.random().toString(), todo:todo }));
      toast.success("todo added.!");
      setTodo("");
    }
  };

  return (
    <div className="bg-gradient-to-r from-cyan-50 via-red-50 to-cyan-200 h-screen w-full flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold text-center bg-gradient-to-l from-cyan-500 to-blue-900 px-10 py-3 rounded-t-full text-white ">Todo Web APP</h2>
      <div className="bg-gradient-to-r from-cyan-600 to-blue-900 rounded-md w-[500px] h-96 py-10 flex flex-col items-center justify-center ">
        <form onClick={handleAdd} className=" flex items-center justify-center">
          <input
            type="text"
            placeholder="Enter todo..."
            className="h-10 rounded-md px-8 outline-none"
            onChange={(e) => {
                setTodo(e.target.value)
                setSearchValue(e.target.value)
            }}
            value={todo}
          />
          <button className="text-white font-semibold ml-2 flex items-center gap-1"><FaPlus size={18}/> Add</button>
        </form>
      <DisplayTodo />
      </div>
      <p className="text-xs font-bold text-blue-900 mt-10 ">Created By <a href="https://www.facebook.com/nilll0111" target="_blank"><span className="text-sm underline">MOHAMMAD SELIM</span></a></p>
    </div>
  );
};

export default Input;
