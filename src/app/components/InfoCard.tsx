import { JSX } from "react";

interface Props {
  title: string;
  description: string;
  image: JSX.Element;
}

export function InfoCard({ title, description, image }: Props) {
  return (
    <div className="max-w-[380px] flex flex-col gap-4 mt-20">
      {image}

      <h5 className="font-semibold text-low-pure text-2xl">{title}</h5>

      <h6 className="font-normal text-low-pure text-lg">{description}</h6>
    </div>
  );
}
