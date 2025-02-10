"use client";

import { Form } from "./components/Form";
import { Feedbacks } from "./sections/Feedbacks";
import { Footer } from "./sections/Footer";
import { Team } from "./sections/Team";
import { Features } from "./sections/Features";
import { Info } from "./sections/Info";
import { Header } from "./sections/Header";
import { About } from "./sections/About";

export default function Home() {
  return (
    <main>
      <Header />

      <Info />

      <About />

      <Features />

      <Form />

      <Feedbacks />

      <Team />

      <Footer />
    </main>
  );
}
