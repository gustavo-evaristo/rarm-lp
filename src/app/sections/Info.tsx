import Image from "next/image";
import { InfoCard } from "../components/InfoCard";

export function Info() {
  return (
    <section className="flex gap-12 flex-wrap px-4 lg:px-32 mt-4 lg:mt-32">
      <InfoCard
        title="Experiência e Expertise"
        description="Conte com uma equipe contábil experiente e altamente qualificada."
        image={
          <Image
            width={92}
            height={92}
            src="/experience.svg"
            alt="experience"
          />
        }
      />

      <InfoCard
        title="Soluções Completas"
        description="Da abertura da sua empresa à gestão contábil completa, oferecemos tudo o que você precisa."
        image={<Image width={92} height={92} src="/heart.svg" alt="heart" />}
      />

      <InfoCard
        title="Tecnologia e Inovação"
        description="Utilizamos as mais modernas tecnologias para otimizar processos e garantir a segurança dos seus dados."
        image={<Image width={92} height={92} src="/work.svg" alt="work" />}
      />

      <InfoCard
        title="Atendimento Personalizado"
        description="Nosso foco é entender suas necessidades e oferecer soluções personalizadas para o seu negócio."
        image={
          <Image
            width={92}
            height={92}
            src="/experience.svg"
            alt="experience"
          />
        }
      />

      <InfoCard
        title="Segurança e Confiança"
        description="Seus dados contábeis protegidos e em conformidade com a legislação, garantindo a segurança do seu negócio."
        image={<Image width={92} height={92} src="/heart.svg" alt="heart" />}
      />

      <InfoCard
        title="Preços Justos e Transparentes"
        description="Sem surpresas, com planos que cabem no seu bolso."
        image={<Image width={92} height={92} src="/work.svg" alt="work" />}
      />
    </section>
  );
}
