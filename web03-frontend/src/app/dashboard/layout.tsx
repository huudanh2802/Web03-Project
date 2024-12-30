"use client";
import { Provider } from "react-redux";
import { store } from "../../lib/store";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <div>
        <div className="flex row-auto items-end bg-[#393939] p-4">
          <div className="flex row-auto text-4xl font-semibold">
            <h1 className="text-yellow-500">Calico</h1>
            <h1 className="text-gray-100">Note</h1>
          </div>
        </div>
        {children}
      </div>
    </Provider>
  );
}
