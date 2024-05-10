import { useEffect, useRef } from "react";
import { InputLogin } from "./input";

export default function CreateTask({ setVisible }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    };
    document.addEventListener("click", handleOutSideClick, true);
    return () => {
      document.removeEventListener("click", handleOutSideClick, true);
    };
  }, [ref]);

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-sm p-4 z-0">
      <div
        ref={ref}
        className="w-[50%] h-[50%] z-100 bg-dark-1 border rounded-3xl flex justify-evenly items-center flex-col"
      >
        <h1 className="text-2xl text-white-1 font-bold">Task үүсгэх</h1>
        <div className="w-[100%] h-auto flex justify-center gap-4 items-center flex-col">
          <InputLogin
            label="Task нэр"
            placeholder="Graphic Design"
            isHide="true"
          />
          <InputLogin
            type="password"
            label="Task-ийн дуусах хугацаа"
            placeholder="9/5/2024"
            isHide="false"
          />
        </div>

        <button onClick={() => setVisible(false)} className="w-[80%]">
          <div className="w-full h-[40px] active:bg-white-1/60 bg-white-1 text-dark text-md flex justify-center items-center rounded-3xl transition-all">
            Task үүсгэх
          </div>
        </button>
      </div>
    </div>
  );
}
