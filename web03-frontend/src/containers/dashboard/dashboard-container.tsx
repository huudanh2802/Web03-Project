import Note from "./note";
import Sidebar from "./sidebar";

export default function DashboardContainer() {
  return (
    <div className="grid grid-cols-12 gap-4 divide-x-2 divide-stone-600 h-screen">
      <div className="col-span-3 mt-4 mx-4">
        <Sidebar />
      </div>
      <div className="col-span-9">
        <Note />
      </div>
    </div>
  );
}
