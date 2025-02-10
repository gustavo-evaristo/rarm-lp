import Image from "next/image";

export function Team() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-32 mt-32">
      <h4 className="text-primary-pure font-bold text-2xl uppercase">
        conheça nossa equipe!
      </h4>

      <h3 className="text-center text-[42px]/[40px] text-low-pure font-semibold">
        Seu sucesso é o nosso compromisso
      </h3>

      <h5 className="font-normal text-low-pure text-xl/[26px] text-center">
        a Rarm é formada por profissionais experientes e apaixonados pelo que
        fazem.
        <br /> Nossa equipe está sempre atualizada com as últimas novidades do
        setor contábil
        <br /> e tributário para oferecer o melhor serviço aos nossos clientes.
      </h5>

      <Image
        width={1280}
        height={720}
        src={"/team-rarm.jpeg"}
        alt="time rarm"
        className="mt-16"
      />
    </section>
  );
}
