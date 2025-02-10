import { Carousel } from "../components/Carousel";

export function Feedbacks() {
  return (
    <div>
      <section className="flex flex-col gap-4 pl-32 mt-48">
        <h5 className="font-bold text-xl text-primary-pure uppercase">
          Depoimentos de Clientes
        </h5>

        <h4 className="text-low-pure font-semibold text-3xl">
          Veja o que nossos clientes dizem
          <br /> sobre a Rarm
        </h4>
      </section>

      <div className="mx-1 mt-14">
        <Carousel />
      </div>
    </div>
  );
}
