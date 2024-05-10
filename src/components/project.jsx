export const Project = ({ color, title, info }) => {
  return (
    <div
      style={{ background: color }}
      className="rounded-10 flex-1 p-4 py-3 min-w-small-card flex flex-col gap-2 font-roboto"
    >
      <div className="flex justify-between items-center">
        <p className="font-medium text-16 text-white-1">{title}</p>
      </div>
      <ul className="list-disc pl-4 font-medium text-14 text-white-1">
        {info?.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
};
