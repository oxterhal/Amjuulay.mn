import { Calendar, Project } from "@/components";
import { scheduleData } from "@/utils/schedule-data";

const Schedule = () => {
  return (
    <div className="p-8 w-full h-full grid grid-rows-3 grid-cols-1 gap-8">
      <div className="w-full pb-5 pt-4 bg-dark-2 border flex flex-col gap-5 border-white-1 rounded-10">
        <p className="font-roboto px-5 font-semibold text-22 text-white-1">
          Даалгавар
        </p>
        <div className="flex h-full gap-5 px-5 no-scrollbar overflow-scroll">
          {scheduleData.map((e, i) => (
            <Project
              key={i}
              title={e.title}
              info={e.tasks.map(e => e.title)}
              color={e.color}
            />
          ))}
        </div>
      </div>
      <Calendar className='row-span-2' />
    </div>
  );
};

export default Schedule;
2;
