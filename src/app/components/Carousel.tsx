"use client";
import { Carousel as PrimeCarousel } from "primereact/carousel";
import { FeedbackCard } from "./FeedbackCard";

export function Carousel() {
  const responsiveOptions = [
    {
      breakpoint: "1280px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "900px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "720px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const items = [
    {
      name: "Joyce Ellen",
      description: "Atendimento excelente e agilidade nos processos!!",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVGBYoBAl2xUrRdyRubmxcDUlQQ1YQPM3wsYEzFydA97qvHV622=w200-h200-c-rp-mo-br100",
    },
    {
      name: "Clemerson Aguiar",
      description:
        "Sempre muito bom atendimento, resposta rápido e soluções efetivas.",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjUX3cRy3NsB2PsMFijy7JMbtj1t4Tl9oGpij4yu4HnU86-76FI=w200-h200-c-rp-mo-br100",
    },
    {
      name: "Jorge Paulo Lamur",
      description:
        "A Rarm é uma parceira de grande valor! Atendimento ágil, disponível, sempre preocupado em resolver de forma eficiente todas as questões, eles são realmente um braço direito pra qualquer empresa!",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjXplMcrcdvVUBAGyc561yUJ14yr1NLcEC36QONmp1u8tis1sdWm=w80-h80-c-rp-mo-br100",
    },
    {
      name: "Vinicius Nascimento",
      description: "Muito bom!",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjUIPAgMqDl-2W894dt9IAaRvQendAjHpmxLx4kh2xGidHBy_rI=w80-h80-c-rp-mo-br100",
    },
    {
      name: "Leticia Righi",
      description:
        "Abri meu MEI com eles e foi tudo perfeito!!!! 0 estresse, dificuldade! Além de ter sido tudo em um dia só! Indico demais",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjUZHbEfCo-jQ4X_KpldWHBaWe0Ld8PnyCAxkIiM0YxfkzE7Ffjs_A=w120-h120-p-rp-mo-br100",
    },
    {
      name: "Glauber Porcides",
      description: "Profissionalismo e agilidade definem a RARM",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocLG-SlnTcrDyesThul98lIyEplB9NHEUscVBnx_7JOUDGLBOA=w80-h80-c-rp-mo-br100",
    },
    {
      name: "Glauber Porcides",
      description:
        "BOM DEMAIS! Me salvaram no famoso MEI faturando mais que 6k mês heheheheeh!!!! INDICO MUITO, parabéns a todo time da RARM, a qualidade do atendimento e resolução é surreal.",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjX9IWg7xxjQ-wG1YVNtncKqD3NddNScGJi0rcS05ODRLSpp4zsLEA=w120-h120-p-rp-mo-br100",
    },
    {
      name: "Lucas Araujo",
      description:
        "Desde o início a Rarm me surpreendeu muito com a qualidade e comprometimento do time através dos seus serviços! Se você está querendo abrir um negócio eles são o suporte certo para isso!",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocKh3XAr0EAo9IeUjULr5QgqHRa9XuOCd939PgxQqJ5Gty-2nw=w120-h120-p-rp-mo-br100",
    },
    {
      name: "Cazé Grabias",
      description:
        "A empresa Rarm me atende com bastante agilidade e precisão. São diretos ao ponto, mas sabem ir além das necessidades que eu tenho durante a minha rotina; entregam mais do que o combinado. Isso é o que me surpreende.",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocJWMBk1FL2KHSVf8nzVQlKtavzJA87kqlnD1sF5RRjJUgklJg=w120-h120-p-rp-mo-br100",
    },
  ];

  return (
    <PrimeCarousel
      circular
      showNavigators={false}
      value={items}
      responsiveOptions={responsiveOptions}
      numVisible={3}
      numScroll={3}
      autoplayInterval={5000}
      itemTemplate={(item) => <FeedbackCard {...item} />}
    />
  );
}
