import { Backdrop } from "./Backdrop";
import { Nav } from "./Nav";
import HomeMain from "./homeMain";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className=" lg:mb-40 h-screen ">
        <div className="relative">
          <Backdrop />
          <div className="absolute inset-0 z-20">
            <Nav />
            <HomeMain />
          </div>
        </div>
      </div>
    </div>
  );
}
