import Image from "next/image";
import ShowCase from "@/common/ShowCase";
import Carousel from "@/common/Carousel";
import Contents from "@/components/ContentsImage";
export default function Home() {
  return (
    <>
      <Carousel />
      <Contents header={"All the Skills you need"} />
      <Contents header={"Because you viewed “The Complete Python Bootcamp From Zero to Hero in Python”"} />
      <Contents header={"Recommended for you"} />
      <Contents header={"Learners are viewing"} />
      <ShowCase />
    </>
  );
}
