import { LogoIcon } from "@/assets/icons";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  FiCalendar,
  FiChevronsLeft,
  FiHome,
  FiMoreHorizontal,
  FiPlus,
} from "react-icons/fi";
import { BiLogoFacebook, BiLogoGmail, BiLogoInstagram } from "react-icons/bi";
import teamData from "@/utils/team-data";
import { CreateTeam } from "./create-team";
import { ChangeTeam } from "./change-team";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [extend, setExtend] = useState(true);
  const [visible, setVisible] = useState(false);
  const [edit, setEdit] = useState(false)

  const handleExtend = () => {
    setExtend(!extend);
  };

  return (
    <div
      className={`${
        extend ? "min-w-side w-side" : "min-w-sidemin w-sidemin"
      } border-r border-white-1/60 h-screen flex flex-col transition-all duration-300`}
    >
      {visible && <CreateTeam setVisible={setVisible} />}
      {edit && <ChangeTeam setVisible={setEdit} />}
      <div className="w-full items-center h-22 justify-between flex border-b border-white-1/60">
        {extend && <LogoIcon className="h-7 w-fit pl-8" />}
        <button
          onClick={handleExtend}
          className={`h-full px-8 flex items-center ${
            !extend && "rotate-180"
          } transition-all`}
        >
          <FiChevronsLeft className="text-white-1/60 h-5 w-5" />
        </button>
      </div>
      <div className="w-full flex flex-col flex-1 p-5 pt-3 divide-y divide-white-1/60">
        <div className="px-3 pb-3 gap-1 flex flex-col *:flex *:gap-4 *:items-center *:w-full *:py-3">
          <button onClick={() => router.push("/")}>
            <FiHome
              className={`text-white-1${pathname != "/" ? "/60" : ""} h-5 w-5`}
            />
            {extend && (
              <div
                className={`font-inter font-medium transition-all text-16 text-nowrap h-5 text-white-1${
                  pathname != "/" ? "/60" : ""
                }`}
              >
                Нүүр хуудас
              </div>
            )}
          </button>
          <button
            onClick={() => pathname != "/schedule" && router.push("/schedule")}
          >
            <FiCalendar
              className={`text-white-1${
                pathname != "/schedule" ? "/60" : ""
              } h-5 w-5`}
            />
            {extend && (
              <div
                className={`font-inter font-medium text-16 h-5 text-white-1${
                  pathname != "/schedule" ? "/60" : ""
                }`}
              >
                Хуваарь
              </div>
            )}
          </button>
        </div>
        <div className="pt-6 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-3">
            <div
              className={`uppercase justify-${
                extend ? "between pl-2.5" : "center"
              } w-full flex  items-center *:text-white-1/60`}
            >
              {extend && (
                <div className="font-inter font-bold text-14">багууд</div>
              )}
              <button onClick={() => setVisible(true)}>
                <FiPlus className="h-5 w-5" />
              </button>
            </div>
            {teamData.map((e, i) => (
              <a
                href={pathname == "/team/" + e.name ? null : "/team/" + e.name}
                disabled={pathname == "/team/" + e.name}
                key={i}
                className="flex flex-col gap-5 text-white-1"
              >
                <div
                  className={`flex w-full justify-${
                    extend ? "between" : "center h-12"
                  } p-2.5 rounded-md ${
                    pathname == "/team/" + e.name && "bg-purple"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      style={{ background: e.color }}
                      className="w-3 h-3 rounded-full border border-white-1"
                    />
                    {extend && (
                      <div className="text-14 font-semibold font-inter">
                        {e.name}
                      </div>
                    )}
                  </div>
                  {extend && pathname == "/team/" + e.name && (
                    <a onClick={() => setEdit(true)} className="cursor-pointer">
                      <FiMoreHorizontal className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </a>
            ))}
          </div>
          {extend && (
            <div className="flex flex-col divide-y divide-white-1/60">
              <p className="text-white-1/60 font-inter font-semibold text-22 py-5">
                Холбогдох хаягууд
              </p>
              <div className="pt-5 flex flex-col gap-3 text-white-1 text-14 font-medium">
                <div className="flex gap-3 items-center">
                  <BiLogoGmail className="w-5 h-5" />
                  <p>amjuulay@gmail.com</p>
                </div>
                <div className="flex gap-3 items-center">
                  <BiLogoInstagram className="w-5 h-5" />
                  <p>Amjuulaymn</p>
                </div>
                <div className="flex gap-3 items-center">
                  <BiLogoFacebook className="w-5 h-5" />
                  <p>Amjuulay</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
