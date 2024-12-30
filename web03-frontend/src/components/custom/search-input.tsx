import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="relative w-full max-w-sm">
      <Input
        type="search"
        placeholder="Search all notes"
        className="pl-10 pr-4 py-2 w-full rounded-full border  focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-[#393939]  placeholder:text-white text-white  border-[#393939]"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
    </div>
  );
}
