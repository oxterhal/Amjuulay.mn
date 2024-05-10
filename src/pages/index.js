"use client";
import { useAuth } from "@/auth/auth-provider";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <div className="flex flex-col text-white-1">
      <div className="ml-10 mt-10 gap-5 flex flex-col">
        <div>
          <div className="text-4xl font-semibold flex">
            Amjuulay<div className="text-blue-d">.</div>mn-д{" "}
          </div>
          <p className="font-semibold text-36">Тавтай морил!</p>
        </div>

        <div className="text-16 flex flex-col gap-5">
          <p className="w-[500px]">
            Хэрвээ та бүхэн хичээл, ажилаа мартаад амжиж хийж чадахгүй байгаан
            биш биз?
          </p>
          <p className="w-[680px]">
            Манай сайт та бүхний хийх ёстой ажил, багийн хурал, даалгавар, бие
            даалтаа хийхэд тань их хялбар, ойлгомжтойгоор төлөвлөгөө гаргаж,
            туслана.
          </p>
        </div>
      </div>

      {!user && (
        <button
          onClick={() => {
            router.push("/login");
          }}
          className="bg-[#0E66FF] py-2 w-28 rounded-full absolute bottom-12 left-80"
        >
          Эхлэх
        </button>
      )}

      <img
        className="absolute bottom-0 right-0 w-[35%] z-[-1]"
        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/441897868_1537561827025011_7984617608608572846_n.png?stp=dst-png_s403x403&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QGQRh2e07zQQ7kNvgE3H_-f&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFVD2ZWvIebBrjfq6VNbJTTWKmyrr73t7G1LYk6ZeURyQ&oe=66644C63"
      />
    </div>
  );
}
