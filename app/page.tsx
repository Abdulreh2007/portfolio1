import Approach from "@/components/Aproach";
import Experience from "@/components/Experince";
import Grid from "@/components/Grid";
import RecentProject from "@/components/RecentProject";
import Clients from "@/components/client";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
 <main className="relative bg-black-100 flex  justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
  <div className="max-w-7xl w-full ">
    <h1>
      <FloatingNav navItems={[
        {name: 'Home', link: '/', icon: <FaHome/> }
      ]} />
       <FloatingNav navItems={navItems} />
      <Hero />
      <Grid/>
      <RecentProject/>
      <Clients/>
      <Experience/>
      <Approach/>
      <Footer/>
    </h1>
  </div>
 </main>
  );
}
