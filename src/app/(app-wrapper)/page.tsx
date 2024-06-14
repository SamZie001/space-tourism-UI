import { Button } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container items-center justify-between space-y-20 px-2 md:pt-20 lg:flex lg:px-20">
      <div className="space-y-6 px-5 text-center lg:text-left">
        <p className="nav-text uppercase text-secondary">
          So, you want to travel to
        </p>
        <p className="heading-l lg:heading-xl text-white">Space</p>
        <p className="body-text lg:w-7/12">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="flex flex-col items-center lg:mx-16">
        <Link href="/destination" className="md:hidden">
          <Button size="small">Explore</Button>
        </Link>
        <Link href="/destination" className="hidden md:block">
          <Button size="default">Explore</Button>
        </Link>
      </div>
    </div>
  );
}
