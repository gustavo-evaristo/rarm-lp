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
        "w-[394px] p-2 rounded-md border border-low-light",
        large && "w-[600px]",
        hasError && "border-red-500"
      )}
    />
  );
}
