const Project = () => {
  return (
    <div className="w-full h-full bg-dark-1 text-white flex justify-center items-center">
      <div className="w-[90%] h-[90%] flex justify-start items-center flex-col">
        <div className="w-full h-[20px] flex  justify-around items-center">
          <div className="flex justify-center items-center gap-5">
            <p className="text-3xl font-semibold">11A</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#8338EC"
              className="w-7 h-7 bg-[#DCD6FA] rounded-md p-1"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
              <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
            </svg>
          </div>
          <div className="flex justify-around items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#8338EC"
              className="w-7 h-7 bg-[#DCD6FA] rounded-md p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <p className="text-xl font-semibold text-purple-d">Урих</p>
            <div className="">
              <img
                src="https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-1/440239017_920970493160269_5977550615180060357_n.jpg?stp=dst-jpg_p480x480&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NH81neX1NOQQ7kNvgGjbNy2&_nc_ht=scontent.fuln1-2.fna&oh=00_AYCX_jvOya36PZGX4eRY1J4fNrxxxaFhaJId4uMgxJZdNw&oe=6643B8BA"
                className="w-8 h-8 rounded-full"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
