import { InputLogin } from "./input";

export default function CreateTask() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-sm">
      <div className="w-[50%] h-[70%] border rounded-3xl flex justify-center gap-10 items-center flex-col">
        <h1 className="text-2xl text-white-1 font-bold">Task өөрчлөх</h1>
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

        <button className="w-[80%]">
          <div className="w-full h-[40px] active:bg-white-1/60 bg-white-1 text-dark text-md flex justify-center items-center rounded-3xl transition-all">
            Task өөрчлөх
          </div>
        </button>
      </div>
    </div>
  );
}
