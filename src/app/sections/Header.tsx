import Image from "next/image";
import { Button } from "../components/Button";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full bg-primary-light px-32 pt-12">
      <nav>
        <Image
          alt="rarm logo"
          src={"/rarm-logo-primary.svg"}
          width={120}
          height={41}
        />
      </nav>

      <div className="flex justify-between">
        <div className="flex pt-32 flex-col gap-3">
          <h1 className="text-low-pure font-bold text-5xl max-w-[680px]">
            Pare de se preocupar com a burocracia e deixe a Rarm cuidar do seu
            negócio!
          </h1>

          <h2 className="text-[20px]/[24px] font-normal text-low-pure max-w-[582px] mb-7">
            Foque no que realmente importa: fazer sua empresa crescer.
            Contabilidade completa, assessoria especializada e preços justos
            para você.
          </h2>

          <Link href={"#form"}>
            <Button>Simule seu orçamento agora!</Button>
          </Link>
        </div>

        <Image
          src="/header-image.svg"
          alt="header imagem"
          width={553}
          height={565}
        />
      </div>
    </header>
  );
}
