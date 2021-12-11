import type { NextPage } from "next";
import Image from "next/image";
import { BsFillMouse2Fill } from "react-icons/bs";
import Tilt from "react-tilt";
import SeoHead from "../components/seo/SeoHead";

const Home: NextPage = () => {
  return (
    <div>
      <SeoHead />
      <div className="w-full h-screen bg-primary flex items-center justify-center relative">
        <Tilt
          options={{ max: 10 }}
          className="flex items-center justify-center lg:space-x-32 glass p-8 rounded-lg"
        >
          <h1 className="text-2xl lg:text-6xl font-bold text-white text-right">
            Solução
            <br />
            Inteligente
            <br />
            Para Gestão
            <br />
            De Equipes.
          </h1>
          <div>
            <div className="h-[10rem] w-[8rem] lg:h-[30rem] lg:w-[20rem] relative ">
              <Image
                layout="fill"
                objectFit="contain"
                src="/planus-simbolo.png"
                alt="Simbolo planus"
              />
            </div>
          </div>
        </Tilt>
        <div
          className="w-full bottom-10 text-2xl animate-bounce absolute flex items-center justify-center text-white"
          style={{ height: "70px" }}
        >
          <BsFillMouse2Fill />
        </div>
      </div>
      <div className="w-full h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-8 p-8 rounded-lg">
          <div className="h-[15rem] w-[15rem] lg:h-[30rem] lg:w-[20rem] relative ">
            <Image
              layout="fill"
              objectFit="contain"
              src="/build.png"
              alt="Simbolo planus"
            />
          </div>
          <h1 className="text-2xl lg:text-6xl font-bold text-primary text-right">
            Página Em Construção...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
