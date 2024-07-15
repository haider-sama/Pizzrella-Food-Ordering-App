import Right from "@/components/icons/Right";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="mx-16 py-16 md:py-12">
        <h1 className="text-4xl font-bold">
          Everythin'<br />
          is better<br />
          with a&nbsp;
          <span className="text-primary">
            Pizza
          </span>
        </h1>
        <p className="my-6 text-gray-600 text-sm">
          Best Pizza, loaded with cheese in your town
        </p>
        <div className="flex gap-4 text-sm">
          <button className="justify-center bg-primary uppercase flex items-center gap-4 text-white px-4 py-2 rounded-full hover:text-black">
            Order now
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image src={'/hero_bg.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
      </div>
    </section>
  );
}