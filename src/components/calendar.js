import { scheduleData } from "@/utils/schedule-data";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const Calendar = ({ className }) => {
  const [curDate, setCurDate] = useState(new Date());
  const [allData, setAllData] = useState({});
  const days = ["Ням", "Дав", "Мяг", "Лха", "Пүр", "Баа", "Бям"];

  useEffect(() => {
    getAllData();
  }, [scheduleData]);

  const getAllData = () => {
    const tasksByDate = {};

    scheduleData.map((schedule) => {
      schedule.tasks.map((task) => {
        const taskDate = task.date.toDateString();
        if (tasksByDate.hasOwnProperty(taskDate)) {
          tasksByDate[taskDate].push({ ...task, color: schedule.color });
        } else {
          tasksByDate[taskDate] = [{ ...task, color: schedule.color }];
        }
      });
    });

    setAllData(tasksByDate);
  };

  const renderElements = () => {
    let elements = [];
    let cur = curDate;
    let index = 1;
    let curWeekDay = 0;
    const maxDays = new Date(
      cur.getFullYear(),
      cur.getMonth() + 1,
      0
    ).getDate();

    while (index <= maxDays) {
      cur.setDate(index);
      if (cur.getDay() % 7 == curWeekDay) {
        elements.push(
          <button
            key={index}
            className="font-roboto text-22 text-white-1 h-full w-full items-center justify-between flex flex-col pb-5"
          >
            {index}
            <div className="flex *:mr-[-0.05rem] *:ml-[-0.05rem]">
              {allData[cur.toDateString()]?.map((e, i) => (
                <div
                  key={i}
                  style={{ background: e.color }}
                  className="w-2 h-2 rounded-full"
                />
              ))}
            </div>
          </button>
        );
        index++;
      } else {
        elements.push(<div></div>);
      }
      curWeekDay++;
      if (curWeekDay == 7) {
        curWeekDay = 0;
      }
    }

    return elements;
  };

  return (
    <div
      className={
        "w-full bg-dark-2 border flex flex-col border-white-1 rounded-10 " +
        className
      }
    >
      <div className="flex w-full h-fit py-5 justify-evenly items-center">
        <button
          onClick={() => {
            const cur = new Date(curDate.getFullYear(), curDate.getMonth() - 1);
            console.log(cur);
            setCurDate(new Date(cur));
          }}
          className="flex justify-center items-center h-9 w-9 bg-white-1/40 rounded-full"
        >
          <FiChevronLeft className="text-white-4 h-5 w-5" />
        </button>
        <p className="font-roboto text-36 text-white-4 font-semibold">
          {curDate.getMonth() + 1}-р сар, {curDate.getFullYear()}
        </p>
        <button
          onClick={() => {
            const cur = new Date(curDate.getFullYear(), curDate.getMonth() + 1);
            console.log(cur);
            setCurDate(new Date(cur));
          }}
          className="flex justify-center items-center h-9 w-9 bg-white-1/40 rounded-full"
        >
          <FiChevronRight className="text-white-4 h-5 w-5" />
        </button>
      </div>
      <div className="grid grid-cols-7 pb-5 *:text-14 font-roboto !text-white-1/60 *:flex *:justify-center *:items-center">
        {days.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>
      <div className="grid h-full grid-cols-7">{renderElements()}</div>
    </div>
  );
};
