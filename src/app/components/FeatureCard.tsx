import classNames from "classnames";
import { JSX } from "react";

interface Props {
  title: string;
  description: string;
  hasBorder?: boolean;
  icon: JSX.Element;
}

export function FeatureCard({
  icon,
  title,
  description,
  hasBorder = true,
}: Props) {
  return (
    <div
      className={classNames(
        "flex flex-col gap-4 items-center justify-center px-10",
        hasBorder && "lg:border-r border-r-low-light/50"
      )}
    >
      {icon}

      <h6 className="text-low-pure font-medium text-sm xl:text-base text-center">
        {title}
      </h6>

      <span className="font-extrabold text-xl xl:text-4xl text-primary-pure">
        {description}
      </span>
    </div>
  );
}
