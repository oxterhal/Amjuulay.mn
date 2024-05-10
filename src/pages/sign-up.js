import { useAuth } from "@/auth/auth-provider";
import { InputLogin } from "@/components";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConf, setPassConf] = useState("");
  const { signIn } = useAuth();

  const signUp = async () => {
    const res = await axios
      .post("http://192.168.1.103:5000/Login/register", {
        name,
        mail: email,
        pass: pass,
      })
      .then((e) => {
        signIn(e.data.user.name, e.data.user.mail);
        alert("Амжилттай нэвтэрлээ");
        router.push("/");
      })
      .catch((e) => console.log(e));
    console.log(res);
  };
  const confirm = () => {
    if (name != "" && email != "" && pass != "" && passConf != "") {
      if (pass.length >= 8) {
        if (pass == passConf) {
          if (/\d/.test(pass)) {
            signUp();
            return;
          }
        }
      }
    }
    console.log();
    alert("Шалгуур биелээгүй байна");
  };

  return (
    <div className="w-screen h-screen bg-dark-1 flex justify-center items-center flex-col gap-10 font-roboto">
      <img src="https://i.ibb.co/kgHXn2N/image.png" className="h-12"></img>
      <div className="w-[50%] h-[80%] border rounded-3xl flex justify-center gap-10 items-center flex-col">
        <h1 className="text-2xl text-white font-bold">Бүртгэл Үүсгэх</h1>
        <div className="w-[100%] h-auto flex justify-center gap-4 items-center flex-col">
          <InputLogin
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Нэр"
            placeholder="Amjuu Lay"
          />
          <InputLogin
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Имэйл"
            placeholder="Amjuulay@gmail.com"
          />
          <InputLogin
            value={pass}
            type="password"
            onChange={(e) => setPass(e.target.value)}
            label="Нууц Үг"
            placeholder="Amjuulay123456"
          />
          <InputLogin
            type="password"
            value={passConf}
            onChange={(e) => setPassConf(e.target.value)}
            label="Нууц Үгээ Баталгаажуулах"
            placeholder="Amjuulay123456"
          />
        </div>
        <div className="w-[80%] h-auto gap-4 text-white/60 text-[13px] grid grid-cols-2">
          <p className="text-xs flex justify-start items-center gap-1">
            <GoDotFill />8 ба түүнээс дээш тэмдэгт ашиглах
          </p>
          <p className="text-xs flex justify-start items-center gap-1">
            <GoDotFill />
            Тоо ашиглах (Жишээ нь: 1234)
          </p>
        </div>
        <button onClick={confirm} className="w-[80%]">
          <div className="w-full h-[40px] bg-white text-dark text-md flex justify-center items-center rounded-3xl">
            Бүртгүүлэх
          </div>
        </button>
        <div className="w-[80%] flex justify-center items-center ">
          <div className="text-white/60 text-xs flex justify-center gap-1">
            Та бүртгэлтэй бол?{" "}
            <a href="/login" className="underline cursor-pointer">
              {" "}
              Нэвтрэх
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
