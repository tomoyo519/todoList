import { FormValue } from "../App";
import { useState } from "react";

interface IList {
  setList: (params: any) => void;
  list: FormValue[];
}

export default function ListContainer({ list, setList }: IList) {
  const [changeStatus, setChangeStatus] = useState<boolean>(false);
  const [changedTodo, setChangedTodo] = useState([]);
  const [willChangedTodo, setWillChangedTodo] = useState("");
  const deleteTodo = (e: any) => {
    console.log("thisise", e.target.id);
    console.log(list);
    const deletedList = list.filter((l) => {
      return l.ToDoList !== e.target.id;
    });
    if (list.length === 1) {
      setList([
        {
          author: "",
          ToDoList: "",
        },
      ]);
    } else {
      setList(deletedList);
    }
  };

  const editTodo = (e: any) => {
    console.log("thisise", e);
    setChangeStatus(true);
    setWillChangedTodo(e.target.id);
  };

  const editTodoComplete = () => {
    // const editTodo = list.map((l:any)=>{
    //   return l.
    // })
  };
  return (
    <div className="space-y-5 ml-5 w-96">
      {list[0].author &&
        list.map((todo, idx) => {
          return (
            <div key={idx}>
              <div className="flex h-5 items-center justify-between ">
                {changeStatus ? (
                  <div className="ml-3 text-sm flex items-center">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded  text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-900 pr-3 pl-3"
                    >
                      <input value={todo.author} />
                    </label>
                    <p
                      id={`comments-description${todo.ToDoList}`}
                      className="text-gray-400"
                    >
                      <input value={todo.ToDoList} />
                    </p>
                  </div>
                ) : (
                  <div className="ml-3 text-sm flex items-center">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded  text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-900 pr-3 pl-3"
                    >
                      {todo.author}
                    </label>
                    <p
                      id={`comments-description${todo.ToDoList}`}
                      className="text-gray-400"
                    >
                      {todo.ToDoList}
                    </p>
                  </div>
                )}
                <div className="flex">
                  {changeStatus ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      id={todo.id}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      onClick={editTodoComplete}
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id={todo.ToDoList}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      onClick={(e) => {
                        editTodo(e);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  )}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    id={todo.ToDoList}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer"
                    //넘길때부터 deletedTodo(todo.id)
                    onClick={(e) => deleteTodo(e)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
