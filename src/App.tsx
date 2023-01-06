import ListContainer from "./components/ListContainer";
import InputToDo from "./components/InputTodo";
import { useState } from "react";

export interface FormValue {
  // 타입분리를 명확히 해놔야 재사용이 가능함
  id: number;
  author: string;
  // todoContent 로 네이밍 변경
  ToDoList: string;
}

function App() {
  const [list, setList] = useState<FormValue[]>([
    //To-do 초기값 삭제 여부 확인하기
    {
      id: 0,
      author: "",
      ToDoList: "",
    },
  ]);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <InputToDo setList={setList} list={list} />
      <ListContainer list={list} setList={setList} />
    </div>
  );
}

export default App;
