"use client";
import { addTodo } from "@/app/redux/todoSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import DisplayTodo from "./DisplayTodo";

const Input = () => {
  const [todo, setTodo] = useState("");
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
    <div className="flex w-full max-h-screen justify-center items-center">
      <div className="flex items-center justify-center w-96 h-screen bg-gray-600">
        <form onClick={handleAdd}>
          <input
            type="text"
            placeholder="Enter todo..."
            className="h-10 rounded-md px-5"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button className="text-white font-semibold ml-2">Add</button>
        </form>
      </div>
      <DisplayTodo />
    </div>
  );
};

export default Input;
