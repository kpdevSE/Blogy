import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center gap-3 h-screen">
          <h1 className="lg:text-8xl font-bold md:text-6xl text-4xl">Personal Growth</h1>
          <h1 className="lg:text-8xl font-bold md:text-6xl text-4xl">& Life Style Blog</h1>
          <p className="lg:text-xl md:text-xl text:lg font-semibold mt-3.5 p-2 text-center">Inspiration for a Better You - Life,Growth, and Endless Posibilities!</p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <Button className="font-semibold cursor-pointer" >
              Start Here
            </Button>
            <Button className="font-semibold  cursor-pointer">
              <ArrowBigRight className="font-bold" size={20} />
              More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
