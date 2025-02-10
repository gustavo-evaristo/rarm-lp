import classNames from "classnames";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"input"> {
  large?: boolean;
  hasError: boolean;
}

export function Input({ placeholder, large, hasError, ...props }: Props) {
  return (
    <input
      {...props}
      placeholder={placeholder}
      className={classNames(
        "w-[330px] lg:w-[300px] xl:w-[394px] p-2 rounded-md border border-low-light",
        large && "lg:w-[460px] xl:w-[600px]",
        hasError && "border-red-500"
      )}
    />
  );
}
