import { useAuth } from "@/auth/auth-provider";
import { InputLogin } from "@/components";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const { signIn } = useAuth()

  const login = async () => {
    const res = await axios
      .post("http://192.168.1.103:5000/Login/login", {
        mail,
        pass,
      })
      .then((e) => {
        signIn(e.data.user.name, e.data.user.mail)
        alert('Амжилттай нэвтэрлээ')
        router.push("/");
      })
      .catch((e) => console.log(e));
    console.log(res);
  };
  const confirm = () => {
    if (mail != "" && pass != "") {
      login();
      return;
    }
    console.log();
    alert("Шалгуур биелээгүй байна");
  };

  return (
    <div className="w-screen h-screen bg-dark-1 flex justify-center items-center flex-col gap-10 font-roboto">
      <img src="https://i.ibb.co/kgHXn2N/image.png" className="h-12"></img>
      <div className="w-[50%] h-[70%] border rounded-3xl flex justify-center gap-10 items-center flex-col">
        <h1 className="text-2xl text-white-1 font-bold">Бүртгэлд Нэвтрэх</h1>
        <div className="w-[100%] h-auto flex justify-center gap-4 items-center flex-col">
          <InputLogin
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            label="Имэйл"
            placeholder="Amjuulay@gmail.com"
            isHide="true"
          />
          <InputLogin
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            label="Нууц Үг"
            placeholder="Amjuulay123456"
            isHide="false"
          />
        </div>

        <button onClick={confirm} className="w-[80%]">
          <div className="w-full h-[40px] active:bg-white-1/60 bg-white-1 text-dark text-md flex justify-center items-center rounded-3xl transition-all">
            Нэвтрэх
          </div>
        </button>
        <div className="w-[80%] flex justify-center items-center">
          <div className="text-white-1/60 text-xs flex justify-center gap-1">
            Та Бүртгэлгүй бол?{" "}
            <a href="/sign-up" className="underline cursor-pointer">
              {" "}
              Бүртгүүлэх
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
