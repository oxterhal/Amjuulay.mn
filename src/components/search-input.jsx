import { FiSearch } from "react-icons/fi";

export const SearchInput = ({
  value,
  setValue,
  ...props
}) => {
  return (
    <div
      className={`bg-dark-2 rounded-md flex items-center gap-3 w-input`}
    >
      <label htmlFor="search-input">
        <FiSearch className="h-5 w-5 text-white-1/60 my-2.5 ml-5" />
      </label>
      <input
        onChange={(e) => setValue(e.target.value)}
        id="search-input"
        {...props}
        className="w-full py-2.5 pr-5 bg-transparent outline-none text-white-1 font-inter text-14 placeholder:text-white-1/60"
        value={value}
      />
    </div>
  );
};
