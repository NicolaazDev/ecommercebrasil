import Scene from "@/components/scene";
import { Button } from "@/components/ui/button";

export default function HeadPage() {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <Scene />

      <img
        className="background_img"
        src="/assets/topograph3.webp"
        alt="topo"
      />

      <div className="max-w-screen-2xl w-full h-full z-[55] flex items-center justify-start">
        <div className="max-w-[1000px] flex items-center justify-center flex-col">
          <h1 className="text-4xl font-montagna text-center font-black text-primary uppercase text-[180px] leading-[190px]">
            Sua loja de iphones
          </h1>
          <p className="text-center text-primary max-w-[1000px] mt-[20px] text-[20px]">
            Os menores preços em iPhones estão a um clique.
          </p>
          <Button className="uppercase min-w-[600px] mt-[30px] h-[60px]">
            Compre agora!
          </Button>
        </div>
      </div>
    </section>
  );
}
