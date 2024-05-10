import { useState } from "react";
import { SearchInput } from ".";
import { FiBell, FiInbox } from "react-icons/fi";
import { useAuth } from "@/auth/auth-provider";

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const { user } = useAuth()

  return (
    <div className="px-10 flex items-center justify-between h-22 min-h-22 border-b border-white-1/60 w-full">
      <SearchInput
        value={searchValue}
        setValue={setSearchValue}
        placeholder="Хайх..."
      />
      <div className="flex gap-5 items-center">
        <p className="text-white-1/60 font-inter text-16">{user?.name}</p>
      </div>
    </div>
  );
};
