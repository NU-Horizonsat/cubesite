import { motion } from "framer-motion";
import Image from "next/legacy/image";

interface PartnerCardProps {
  alt?: string;
  description: string;
  image: string;
}

const PartnerCard = ({ alt, description, image }: PartnerCardProps) => {
  return (
    // copied from card.tsx
    <div className="relative col-span-1 my-10 grow overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md md:mx-20 lg:mx-32 xl:mx-32 2xl:mx-32">
      <div className="flex h-60 items-center justify-center">
        <Image src={image} alt={alt} width={200} height={200} />
      </div>
      <div className="m-10 text-center">
          <div className="text-xl tracking-tight text-gray-900 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            {description}
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
