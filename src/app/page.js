import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />

    <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Terms and Conditions'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
          <p>
          If you are under 13 years of age, you should always have the express consent of a parent or legal guardian before using internet including this website.
          </p>
          <p>Pizzrella is a non-profit website application made by Haider-sama. You are allowed to use the contents and edit it but using it for commercial purpose is prohibited. Thanks for reading!</p>
        </div>
      </section>
      <section className="text-center my-16" id="contact">
        <SectionHeaders
          subHeader={'Want a Pizza?'}
          mainHeader={'Contact us'}
        />
        <div className="mt-4">
          <a className="text-2xl underline text-gray-600 hover:text-black" href="tel:+920001110000">
            +92 000 111 0000
          </a>
        </div>
      </section>

      <footer className="border-t p-8 text-gray-600 text-center mt-16">
        2024 Haider-sama © All rights reserved
      </footer>

    </>
  );
}
