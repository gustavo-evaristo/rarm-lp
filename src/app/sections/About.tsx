import Link from "next/link";
import { Button } from "../components/Button";

export function About() {
  return (
    <section className="flex flex-col gap-3 items-start justify-start mt-44 px-4 lg:px-32">
      <h4 className="font-bold text-primary-pure text-xl xl:text-2xl uppercase">
        Por que escolher a RARM
      </h4>

      <h3 className="text-xl lg:text-4xl text-low-pure font-semibold">
        Sua empresa em boas mãos
      </h3>

      <p className="text-base xl:text-xl/[26px] text-low-pure max-w-[641px] font-medium">
        Profissionais experientes, soluções completas e preços justos. A Rarm
        cuida da sua gestão contábil para você focar no crescimento do seu
        negócio.
      </p>

      <Link href={"#form"}>
        <Button className="px-6 rounded-lg">Simule seu orçamento agora!</Button>
      </Link>
    </section>
  );
}
