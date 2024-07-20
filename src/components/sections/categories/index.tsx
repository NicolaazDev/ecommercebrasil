import { Button } from "@/components/ui/button";

export default function CategoriesGrid() {
  return (
    <section className="w-full py-[180px] bg-transparent flex justify-center items-center relative flex-col">
      <div className="flex flex-col justify-center items-center w-full my-10 mb-[160px]">
        <h1 className="text-8xl text_up2 text-center text-[#181818] uppercase font-montagna">
          Outros produtos
        </h1>
        <p className="text-[18px] text_up2 mt-5 opacity-85 text-center text-[#181818] ">
          Todos produtos Apple para voce!
        </p>
      </div>

      <div
        className="max-w-screen-2xl w-full grid grid-cols-3 grid-rows-2 gap-8"
        style={{
          gridTemplateAreas: `
            "pods pods watch"
            "ipad mac mac"
          `,
        }}
      >
        <div
          className="w-full border border-zinc-400 border-solid h-[470px] relative rounded-xl overflow-hidden"
          style={{
            gridArea: "watch",
          }}
        >
          <div className="absolute inset-0 z-30 h-full w-full m-auto flex justify-center items-center flex-col">
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-4xl font-black text-[60px] font-jost uppercase text-center leading-[55px] max-w-[80%] text-[#e6e6e6]">
                Apple Watch's
              </h1>
              <p className="text-[22px] font-[500] leading-6 mt-3 mb-[100px] text-center text-[#e6e6e6]">
                Brilha mais que tudo. <br /> Com muito estilo.
              </p>
            </div>
            <Button className="bg-[#050505] border border-solid border-[#e6e6e64b] hover:bg-[#050505] info_button rounded-[10px] h-[45px] text-[18px] px-[80px] after:content-['Produtos'] after:text-[18px]">
              Saiba mais
            </Button>
          </div>
          <img
            src="https://www.apple.com/v/apple-watch-series-7/c/images/overview/hero/hero_intro_hardware__fg5bn8mfky2q_large.jpg"
            alt="watch"
            className=" absolute inset-0 w-full h-full object-cover opacity-100 "
          />
        </div>

        <div
          className="w-full h-[470px] relative rounded-xl overflow-hidden"
          style={{
            gridArea: "mac",
          }}
        >
          <div className="absolute inset-0 z-30 h-full w-full m-auto flex justify-center items-center flex-col">
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-4xl font-black text-[60px] leading-[90px] font-jost uppercase text-[#e6e6e6]">
                MacBook's
              </h1>
              <p className="text-[22px] font-[500] leading-6 mb-[100px] text-center text-[#e6e6e6]">
                Muito fácil de usar. <br /> Muito fácil de amar.
              </p>
            </div>
            <Button className="bg-[#050505] border border-solid border-[#e6e6e64b] hover:bg-[#050505] info_button rounded-[10px] h-[45px] text-[18px] px-[80px] after:content-['Produtos'] after:text-[18px]">
              Saiba mais
            </Button>
          </div>
          <img
            src="https://media.wired.com/photos/5bd883dc5b66a763e54f0b22/master/pass/macbookair3.jpg"
            alt="macbook"
            className="absolute inset-0 w-full h-full object-cover opacity-100 "
          />
        </div>

        <div
          className="w-full h-[470px] relative rounded-xl overflow-hidden"
          style={{
            gridArea: "ipad",
          }}
        >
          <div className="absolute inset-0 z-30 h-full w-full m-auto flex justify-center items-center flex-col">
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-4xl font-black text-[60px] font-jost uppercase leading-[90px] text-[#e6e6e6]">
                IPad's
              </h1>
              <p className="text-[22px] font-[500] max-w-[60%] leading-6 mb-[100px] text-center text-[#e6e6e6]">
                Dois tamanhos. Chip mais rápido. Pronto para tudo.
              </p>
            </div>
            <Button className="bg-[#141414] border border-solid border-[#e6e6e64b] hover:bg-[#141414] info_button rounded-[10px] h-[45px] text-[18px] px-[80px] after:content-['Produtos'] after:text-[18px]">
              Saiba mais
            </Button>
          </div>
          <img
            src="https://blogdoiphone.com/wp-content/uploads/2022/03/iPadAir5.jpg"
            alt="ipad"
            className="absolute inset-0 w-full h-full object-cover opacity-100 "
          />
        </div>

        <div
          className="w-full h-[470px] relative rounded-xl overflow-hidden"
          style={{
            gridArea: "pods",
          }}
        >
          <div className="absolute inset-0 z-30 h-full w-full m-auto flex justify-center items-center flex-col">
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-4xl font-black text-center text-[60px] leading-[50px] font-jost uppercase text-[#e6e6e6]">
                AirPods's
              </h1>
              <p className="text-[22px] font-[500] leading-6 mt-3 mb-[100px] text-center text-[#e6e6e6]">
                Áudio adaptativo. <br /> Ouça a diferença.
              </p>
            </div>
            <Button className="bg-[#050505] border border-solid border-[#e6e6e64b] hover:bg-[#050505] info_button rounded-[10px] h-[45px] text-[18px] px-[80px] after:content-['Produtos'] after:text-[18px]">
              Saiba mais
            </Button>
          </div>
          <img
            src="https://media.wired.com/photos/632b71c4f1e5c40d2b1bc705/master/pass/AirPods-Pro-2nd-Gen-Gear.jpg"
            alt="pods"
            className="absolute inset-0 w-full h-full object-cover opacity-100 "
          />
        </div>
      </div>

      <img
        className="background_img left-0 bottom-[-60px] fixheight"
        src="/assets/topograph3.webp"
        alt="topo"
      />
    </section>
  );
}
