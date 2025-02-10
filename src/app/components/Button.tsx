import classNames from "classnames";
import { ComponentProps, PropsWithChildren } from "react";

type Props = ComponentProps<"button"> & PropsWithChildren;

export function Button({ children, className, ...props }: Props) {
  return (
    <button
      type="button"
      className={classNames(
        "px-7 py-4 font-medium text-high-pure text-base rounded-2xl bg-primary-pure hover:bg-primary-dark",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
