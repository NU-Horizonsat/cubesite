import Balancer from "react-wrap-balancer";
import Image from "next/image";

export default function Card({
  title,
  description,
  image,
  large,
}: {
  title: string;
  description: string;
  image: string;
  large?: boolean;
}) {
  return (
    <div
      className={` grow relative col-span-1 h-96 overflow-hidden rounded-xl border-none bg-black bg-opacity-50 shadow-md ${large ? "md:col-span-2" : ""
        }`}
    >
      <div className="flex h-60 items-center justify-center">
        <Image src={image} alt={title} width={200} height={0} />
      </div>
      <div className="mx-auto max-w-md text-center">
        <h2 className="bg-slate-400 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="prose-sm -mt-2 leading-normal text-white md:prose">
          <Balancer>
            <div className="text-gray-400 p-5 text-lg">
              {description}
            </div>
          </Balancer>
        </div>
      </div>
    </div>
  );
}
