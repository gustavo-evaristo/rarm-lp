import Image from "next/image";
import { FeatureCard } from "../components/FeatureCard";

export function Features() {
  return (
    <section className="bg-primary-extra-light w-full mt-52">
      <div className="px-44 py-20 flex items-center justify-center">
        <FeatureCard
          title="Conformidade com a Legislação"
          description="100%"
          icon={
            <Image
              src={"/project-plan.svg"}
              width={70}
              height={70}
              alt="icon"
            />
          }
        />

        <FeatureCard
          title="Clientes atendidos"
          description="300+"
          icon={<Image src={"/users.svg"} width={70} height={70} alt="icon" />}
        />

        <FeatureCard
          title="Impostos Otimizados"
          description="R$ 10M"
          icon={<Image src={"/money.svg"} width={70} height={70} alt="icon" />}
        />

        <FeatureCard
          title="Anos de Experiência"
          description="5+"
          hasBorder={false}
          icon={
            <Image src={"/timeline.svg"} width={70} height={70} alt="icon" />
          }
        />
      </div>
    </section>
  );
}
