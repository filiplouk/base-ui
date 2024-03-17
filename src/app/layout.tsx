import { Metadata } from "next";
import "@/assets/styles/main.scss";
import ModalWrapper from "@/@components/ModalWrapper/ModalWrapper";

export const metadata: Metadata = {
  title: "Next App",
  description: "Next.js Boilerplate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <ModalWrapper />
      </body>
    </html>
  );
}
