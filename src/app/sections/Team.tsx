import Image from "next/image";

export function Team() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-4 lg:px-32 mt-16 lg:mt-32">
      <h4 className="text-primary-pure font-bold text-lg lg:text-2xl uppercase">
        conheça nossa equipe!
      </h4>

      <h3 className="text-center text-3xl lg:text-[42px]/[40px] text-low-pure font-semibold">
        Seu sucesso é o nosso compromisso
      </h3>

      <h5 className="font-normal text-low-pure text-base lg:text-xl/[26px] text-center lg:max-w-[800px]">
        a Rarm é formada por profissionais experientes e apaixonados pelo que
        fazem. Nossa equipe está sempre atualizada com as últimas novidades do
        setor contábil e tributário para oferecer o melhor serviço aos nossos
        clientes.
      </h5>

      <Image
        width={1280}
        height={720}
        src={"/team-rarm.jpeg"}
        alt="time rarm"
        className="mt-8 lg:mt-16"
      />
    </section>
  );
}
