import Input from "@/components/Input";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ToDo APP",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <div>
      <Input />
    </div>
  );
}
