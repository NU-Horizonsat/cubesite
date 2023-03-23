import { motion } from "framer-motion";
import Image from "next/legacy/image";

interface PartnerCardProps {
  alt?: string;
  description: string;
  image: string;
  link: string;
  linkName: string;
}

const PartnerCard = ({ alt, description, image, link, linkName }: PartnerCardProps) => {
  return (
    // copied from card.tsx
    <div className="relative col-span-1 my-10 grow overflow-hidden rounded-lg bg-black bg-opacity-50 shadow-md md:mx-20 lg:mx-32 xl:mx-32 2xl:mx-32">
      <div className="flex h-60 items-center justify-center">
        <Image src={image} alt={alt} width={400} height={100} />
      </div>
      <div className="m-10 text-center">
        <div className="text-xl tracking-tight text-slate-400 md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
          <a className="text-blue-700 underline" href={link}>{linkName}</a> {description}
        </div>
      </div>
    </div>
  );
};

interface PartnerListProps {
  partners: PartnerCardProps[];
}

const PartnerList = ({ partners }: PartnerListProps) => {
  return (
    <div className="items-center">
      {partners?.map((partner: PartnerCardProps, index: number) => (
        <motion.div key={index}>
          <PartnerCard {...partner} />
        </motion.div>
      ))}
    </div>
  );
};

export default PartnerList;
