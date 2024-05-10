import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  FiFile,
  FiMessageCircle,
  FiMoreVertical,
  FiPlus,
} from "react-icons/fi";
import { PiRowsFill } from "react-icons/pi";
import { CiGrid41 } from "react-icons/ci";
import teamData from "@/utils/team-data";
import { AddMember, CreateProject } from "@/components";
import CreateTask from "@/components/create-task";

export default function Team() {
  const router = useRouter();
  const [data, setData] = useState();
  const [view, setView] = useState("row");
  const [accordion, setAccordion] = useState(-1);
  const [visible, setVisible] = useState(false);
  const [memberVisible, setMemberVisible] = useState(false);
  const [taskVisible, setTaskVisible] = useState(false);

  useEffect(() => {
    if (teamData && router.query.team) {
      setData(teamData.find((e) => e.name == router.query.team));
    }
  }, [teamData, router]);

  return (
    <>
      {memberVisible && <AddMember setVisible={setMemberVisible} />}
      {visible && <CreateProject setVisible={setVisible} />}
      {taskVisible && <CreateTask setVisible={setTaskVisible} />}
      <div className="p-10 w-full space-y-5 font-inter">
        <div className="flex w-full justify-between items-center">
          <p className="text-white-1 font-inter font-semibold text-36">11A</p>
          <div className="flex gap-5 items-center">
            <button
              onClick={() => setMemberVisible(true)}
              className="flex gap-2 items-center text-purple font-medium"
            >
              <div className="bg-white-2 rounded-md p-1">
                <FiPlus className="w-6 h-6" />
              </div>
              <p>Урих</p>
            </button>
            <div className="flex space-x-[-8px]">
              {data?.users.map(
                (_e, i) =>
                  i < 3 && (
                    <div
                      key={i}
                      className="w-10 h-10 border border-dark-1 bg-white-1 rounded-full"
                    />
                  )
              )}
              {data?.users.length >= 3 && (
                <div className="w-10 h-10 border border-dark-1 bg-white-2 rounded-full text-red-d flex justify-center items-center font-inter text-22">
                  +{data.users.length - 4}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              setVisible(true);
            }}
            className="bg-purple rounded-md p-2 text-white-1"
          >
            <FiPlus className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            <button
              className={`${
                view == "row" && "bg-purple"
              } rounded-md p-2 text-white-1`}
              onClick={() => setView("row")}
            >
              <PiRowsFill className="w-6 h-6" />
            </button>
            <button
              className={`${
                view == "grid" && "bg-purple"
              } rounded-md p-2 text-white-1`}
              onClick={() => setView("grid")}
            >
              <CiGrid41 className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div
          className={`${
            view == "row" ? "grid-cols-1" : "grid-cols-3"
          } w-full grid gap-3`}
        >
          {data?.projects.map((e, i) => {
            let comments = 0;
            e.tasks.map((el) => (comments += el.comments?.length));
            return (
              <div
                key={i}
                className="flex flex-col w-full transition-all bg-white-1 rounded-md"
              >
                <button
                  disabled={accordion == i}
                  onClick={() => setAccordion(i)}
                  className={`w-full text-dark-3 py-3 px-4 flex ${
                    view == "grid" ? "flex-col gap-6" : "items-center"
                  } justify-between`}
                >
                  <p className="text-22 font-semibold">{e.title}</p>
                  <div
                    className={`flex gap-5 justify-between ${
                      view == "grid" ? "w-full text-14" : "text-12"
                    }`}
                  >
                    <div className="flex gap-3 items-center">
                      <div className="flex text-dark-2">
                        <FiMessageCircle className="w-5 h-5" />
                      </div>
                      <p className="font-semibold">{comments} Сэтгэгдэл</p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="flex text-dark-2">
                        <FiFile className="w-5 h-5" />
                      </div>
                      <p className="font-semibold">{e.tasks?.length} Таск</p>
                    </div>
                  </div>
                </button>
                {accordion == i && view == "row" && (
                  <div className="flex gap-3 pb-3 px-4">
                    {e.tasks.map((el, i) => {
                      return (
                        <div
                          key={i}
                          className="py-3 px-6 flex flex-col bg-purple rounded-10"
                        >
                          <p className="text-14 text-white-1 font-roboto font-medium">
                            {el.title}
                          </p>
                          <p className="text-14 text-white-1/60 font-roboto font-medium">
                            {el.date}
                          </p>
                        </div>
                      );
                    })}
                    <button
                      onClick={() => {
                        setTaskVisible(true);
                      }}
                      className="h-full justify-center items-center aspect-square flex bg-purple rounded-10"
                    >
                      <FiPlus className="text-white-1 w-6 h-9" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
