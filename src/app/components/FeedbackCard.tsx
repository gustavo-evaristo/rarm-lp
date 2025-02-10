import Image from "next/image";

interface Props {
  name: string;
  description: string;
  image: string;
}

export function FeedbackCard({ name, description, image }: Props) {
  return (
    <div className="w-[440px] p-10 rounded-lg flex flex-col gap-4 mx-4 bg-high-pure shadow-lg">
      <span className="text-low-pure text-lg/[25px] font-normal">
        {description}
      </span>

      <div className="flex items-center gap-2">
        <Image
          src={image}
          width={80}
          height={80}
          className="rounded-full w-9 h-9"
          alt="feedback-image"
        />

        <span className="font-semibold text-low-pure">{name}</span>
      </div>
    </div>
  );
}
