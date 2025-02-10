import Link from "next/link";
import { Button } from "../components/Button";

export function Footer() {
  return (
    <section className="bg-primary-extra-light flex flex-col items-center justify-center pt-24 lg:pt-36 gap-4 px-3 lg:px-0">
      <h4 className="text-center text-low-pure text-2xl lg:text-[42px]/[46px] font-bold lg:max-w-[700px]">
        Pronto para simplificar sua vida e impulsionar seu negócio?
      </h4>

      <h6 className="mb-4 text-base lg:text-xl font-normal text-low-pure text-center px-4 lg:px-0 lg:max-w-[600px]">
        Clique no botão abaixo e simule seu orçamento agora mesmo. É rápido,
        fácil e sem compromisso. Descubra como a Rarm pode te ajudar a alcançar
        o sucesso!
      </h6>

      <Link href={"#form"}>
        <Button className="px-6 rounded-lg">Simule seu orçamento agora!</Button>
      </Link>

      <footer className="mt-20 lg:mt-44 mb-8">
        <h6 className="font-normal text-sm lg:text-xl text-center">
          2025 © Rarm Contabilidade. Todos os direitos reservados.
        </h6>
      </footer>
    </section>
  );
}
