import { useState } from "react";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import CustomerReviews from "./sections/CustomerReviews";
import Services from "./sections/Services";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";
import PopularProducts from "./sections/PopularProducts";
import SpecialOffer from "./sections/SpecialOffer";
import Nav from "./components/Nav";
function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
