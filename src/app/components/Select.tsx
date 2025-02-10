import classNames from "classnames";
import { ComponentProps } from "react";

interface Option {
  title: string;
  value: string;
}

interface Props extends ComponentProps<"select"> {
  options: Option[];
  hasDefaultValue: boolean;
  hasError: boolean;
}

export function Select({
  options,
  hasDefaultValue,
  hasError,
  ...props
}: Props) {
  return (
    <select
      value=""
      className={classNames(
        "w-[330px] lg:w-[460px] xl:w-[600px] p-2 rounded-md border border-low-light",
        hasDefaultValue ? "text-low-light" : "text-low-pure",
        hasError && "border-red-500"
      )}
      {...props}
    >
      <option value="" disabled>
        Selecionar
      </option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
}
