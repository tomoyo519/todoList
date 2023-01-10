import { Tab } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { FormValue } from "../App";

interface ISetList {
  setList: (params: any) => void;
  list: FormValue[];
}

export default function InputToDo({ setList, list }: ISetList) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
    setFocus,
  } = useForm<FormValue>();

  //함수 이름명 및 app.tsx 로 이동
  const addNewToDoList = (todo: ISetList["list"]) => {
    console.log("thisistodo,", todo);

    //useRef로 numbering 해야함
    if (!list[0].author) {
      setList([{ ...todo, id: list.length }]);
    } else {
      setList([...list, { ...todo, id: list.length + 1 }]);
    }
    setValue("ToDoList", "");
    setValue("author", "");
  };

  const handleCursor = () => {
    //dom 직접 건드리지 말고 setFocus() 마지막의마지막의마지마김자ㅣ마기마지막까지...
    // document.getElementById("author")?.focus();
    // 쓸거면 querySelector
    //왠만하면 ref 써라ㅁ
    setFocus("author");
  };
  return (
    <form onSubmit={handleSubmit((data: any) => addNewToDoList(data))}>
      <Tab.Group>
        <>
          <div
            className={
              "text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-md border border-transparent px-3 py-1.5 text-sm font-medium cursor-pointer"
            }
            onClick={handleCursor}
          >
            새로운 To-Do List 작성하기
          </div>

          <Tab.Panels className="mt-2">
            <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
              <label htmlFor="author" className="sr-only">
                Comment
              </label>
              <div className="">
                <textarea
                  rows={1}
                  id="author"
                  className="block w-full  shadow-sm ring-indigo-500 border-indigo-500 border rounded-md  m-1 focus:border-indigo-700 p-0.5"
                  placeholder="작성자"
                  aria-invalid={!isDirty ? false : errors.author ? true : false}
                  defaultValue={""}
                  {...register("author", {
                    required: "정체를 밝히세요.",
                  })}
                />
              </div>

              {errors.author && <div>{errors["author"]?.message}</div>}
              <label htmlFor="ToDoList" className="sr-only">
                Comment
              </label>
              <div className="">
                {/* //a11y 고려...... */}
                <textarea
                  rows={3}
                  id="ToDoList"
                  className="block w-full  shadow-sm ring-indigo-500 border-indigo-500 border rounded-md  m-1 focus:border-indigo-700 p-0.5"
                  placeholder="To-Do List 써봅시다..."
                  aria-invalid={
                    !isDirty ? false : errors.ToDoList ? true : false
                  }
                  defaultValue={""}
                  {...register("ToDoList", {
                    required: "To-Do 를 입력 해주세요!",
                  })}
                />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </>
      </Tab.Group>
      {errors.ToDoList && <div>{errors["ToDoList"]?.message}</div>}
      <div className="mt-2 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          추가하기
        </button>
      </div>
    </form>
  );
}
