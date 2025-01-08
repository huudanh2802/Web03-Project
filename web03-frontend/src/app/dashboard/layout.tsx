"use client";
import { Provider } from "react-redux";
import { store } from "../../lib/store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status !== "authenticated") {
    router.push("/");
  }
  return (
    <Provider store={store}>
      <div>
        <div className="flex row-auto items-end bg-[#393939] p-4">
          <div className="flex row-auto text-4xl font-semibold">
            <h1 className="text-yellow-500">Calico</h1>
            <h1 className="text-gray-100">Note</h1>
          </div>
          <div>
            <p>{session?.user?.name}</p>
          </div>
        </div>
        {children}
      </div>
    </Provider>
  );
}
