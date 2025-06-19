import {
  Give,
  Grow,
  Hero,
  Marquee,

  Ourpower,
  OverView,
  Review,
  Studies,
  Workflow,
} from "@/components/home/home";
import { Navbar } from "@/components/home/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
     <Navbar />
      <Grow />
      <Give />
      <Marquee />
      <Workflow />
      <OverView />
      <Studies />
      <Review />
      <Ourpower />
      <Hero />
    </div>
  );
}
