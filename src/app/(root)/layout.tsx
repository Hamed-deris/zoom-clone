import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zoom Clone",
  description:
    "Zoom app for video conference and best practice and improve coding skills",
};

export default function meetingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
