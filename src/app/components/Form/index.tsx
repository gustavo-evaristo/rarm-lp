import { Controller, useForm } from "react-hook-form";
import { Input } from "../Input";
import { Button } from "../Button";
import { Select } from "../Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDTO, schema } from "./schema";

export function Form() {
  const {
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      taxRegime: "",
      segment: "",
      billingRange: "",
      employees: "",
      name: "",
      email: "",
      phone: "",
    },
  });

  const [taxRegime, segment, billingRange] = watch([
    "taxRegime",
    "segment",
    "billingRange",
  ]);

  function submitForm(data: FormDTO) {
    console.log("formulario enviado", data);
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 px-32 mt-32">
      <h4 className="text-primary-pure font-bold text-2xl uppercase">
        Simule seu Orçamento em Minutos!
      </h4>

      <h3 className="text-center text-[42px]/[40px] text-low-pure font-semibold">
        Descubra agora quanto você pode <br />
        economizar com a RARM
      </h3>

      <h5 className="font-normal text-low-pure text-xl/[26px] text-center">
        Preencha o formulário abaixo e receba uma simulação de orçamento
        personalizada
        <br /> para sua empresa. É rápido, fácil e sem compromisso!
      </h5>

      <form
        id="form"
        className="mt-40 py-4 flex flex-col gap-6 px-32"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="flex gap-14">
          <div className="flex flex-col gap-1">
            <label>Regime Tributário</label>

            <Controller
              control={control}
              name="taxRegime"
              render={({ field }) => (
                <Select
                  {...field}
                  hasDefaultValue={!taxRegime}
                  hasError={!!errors?.taxRegime?.message}
                  options={[
                    {
                      title: "Simples",
                      value: "simple",
                    },
                    {
                      title: "Lucro Presumido",
                      value: "presumedProfit",
                    },
                    {
                      title: "Lucro Real",
                      value: "realProfit",
                    },
                  ]}
                />
              )}
            />

            <span className="text-red-500 text-sm font-normal">
              {!!errors?.taxRegime?.message && errors.taxRegime.message}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <label>Segmento</label>

            <Controller
              control={control}
              name="segment"
              render={({ field }) => (
                <Select
                  {...field}
                  hasDefaultValue={!segment}
                  hasError={!!errors?.segment?.message}
                  options={[
                    {
                      title: "Serviço",
                      value: "service",
                    },
                    {
                      title: "Comercio / Industria",
                      value: "business",
                    },
                  ]}
                />
              )}
            />

            <span className="text-red-500 text-sm font-normal">
              {!!errors?.segment?.message && errors.segment.message}
            </span>
          </div>
        </div>

        <div className="flex gap-14">
          <div className="flex flex-col gap-1">
            <label>Faixa de Faturamento</label>

            <Controller
              control={control}
              name="billingRange"
              render={({ field }) => (
                <Select
                  {...field}
                  hasDefaultValue={!billingRange}
                  hasError={!!errors?.billingRange?.message}
                  options={[
                    {
                      title: "Até R$ 81.000,00 / ano",
                      value: "81000",
                    },
                    {
                      title: "Até R$ 120.000,00 / ano",
                      value: "120000",
                    },
                    {
                      title: "Até R$ 360.000,00 / ano",
                      value: "360000",
                    },
                  ]}
                />
              )}
            />

            <span className="text-red-500 text-sm font-normal">
              {!!errors?.billingRange?.message && errors.billingRange.message}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <label>Quantidade de funcionários</label>
            <Controller
              name="employees"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  large
                  type="number"
                  hasError={!!errors?.employees?.message}
                  placeholder="Digite a quantidade de funcionários"
                />
              )}
            />

            <span className="text-red-500 text-sm font-normal">
              {!!errors?.employees?.message && errors.employees.message}
            </span>
          </div>
        </div>

        <div className="flex gap-9">
          <div className="flex flex-col gap-1">
            <label>Nome</label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  hasError={!!errors?.name?.message}
                  placeholder="Digite seu nome"
                />
              )}
            />

            <span className="text-red-500 text-sm font-normal">
              {!!errors?.name?.message && errors.name.message}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <label>E-mail</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  hasError={!!errors?.email?.message}
                  type="email"
                  placeholder="Digite seu e-mail"
                />
              )}
            />

            <span className="text-red-500 text-sm font-normal">
              {!!errors?.email?.message && errors.email.message}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <label>Telefone</label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="tel"
                  hasError={!!errors?.phone?.message}
                  placeholder="Digite seu telefone"
                />
              )}
            />

            <span className="text-red-500 text-sm font-normal">
              {!!errors?.phone?.message && errors.phone.message}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <Button type="submit" className="py-3 px-6 rounded-lg">
            Realizar simulação
          </Button>
        </div>
      </form>
    </section>
  );
}
