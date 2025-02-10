import Link from "next/link";
import { Button } from "../components/Button";

export function Footer() {
  return (
    <section className="bg-primary-extra-light flex flex-col items-center justify-center pt-36 gap-4">
      <h4 className="text-center text-low-pure text-[42px]/[40px] font-bold">
        Pronto para simplificar sua vida
        <br /> e impulsionar seu negócio?
      </h4>

      <h6 className="mb-4 text-xl font-normal text-low-pure text-center">
        Clique no botão abaixo e simule seu orçamento agora mesmo.
        <br />É rápido, fácil e sem compromisso. Descubra como a Rarm <br />
        pode te ajudar a alcançar o sucesso!
      </h6>

      <Link href={"#form"}>
        <Button className="px-6 rounded-lg">Simule seu orçamento agora!</Button>
      </Link>

      <footer className="mt-44 mb-8">
        <h6 className="font-normal text-xl text-center">
          2025 © Rarm Contabilidade. Todos os direitos reservados.
        </h6>
      </footer>
    </section>
  );
}
