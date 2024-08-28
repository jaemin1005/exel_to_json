import type { Metadata } from "next";
import "./globals.css";
import { FileContextProvider } from "./components/file_upload_component/context/file_list_context";

export const metadata: Metadata = {
  title: "XLSX-JSON",
  description: "Converted XLSX To JSON",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <FileContextProvider>
        <body className="bg-[#E9E0E0] w-screen h-screen flex flex-col justify-center items-center">
          {children}
        </body>
      </FileContextProvider>
    </html>
  );
}
