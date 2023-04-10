import { motion } from "framer-motion";
import Image from "next/legacy/image";
import  {useMediaQuery} from "react-responsive";
import { useEffect, useState } from "react";
interface PartnerCardProps {
  alt?: string;
  description: string;
  image: string;
  link: string;
  linkName: string;
  width?: number;
  height?: number;
}

const PartnerCard = ({ alt, description, image, link, linkName, width, height }: PartnerCardProps) => {
  return (
    // copied from card.tsx
    <div className="relative col-span-1 my-10 grow overflow-hidden rounded-lg bg-black bg-opacity-50 shadow-md md:mx-20 lg:mx-32 xl:mx-32 2xl:mx-32">
      <div className="flex h-60 items-center justify-center">
        <Image src={image} alt={alt} width={width} height={height} />
      </div>
      <div className="m-10 text-center">
        <div className="text-xl tracking-tight text-white md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
          <a className="text-blue-700 underline" href={link}>{linkName}</a> {description}
        </div>
      </div>
    </div>
  );
};

interface PartnerListProps {
  partners: PartnerCardProps[];
}
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileMediaQuery = useMediaQuery({ query: "(max-width: 1024px)" });
  useEffect(() => {
      setIsMobile(isMobileMediaQuery);
  }, [isMobileMediaQuery]);
  return isMobile;
}

const PartnerList = ({ partners }: PartnerListProps) => {
  const isMobile = useIsMobile();
    const partnersPerLine = isMobile ? 1 : 2; // set the number of items per line based on screen size
    const partnersRows = [];
    for (let i = 0; i < partners.length; i += partnersPerLine) {
        partnersRows.push(partners.slice(i, i + partnersPerLine));
    }

    return (
        <div className={`flex flex-col gap-6 ${isMobile ? "flex-col" : "flex-wrap justify-center"}`}>
            
            {(partnersRows?.map((row, index) => (
                <div key={index} className={`flex ${isMobile ? "flex-col" : "justify-center"}`}>
                    {row.map((partner, index) => (
                        <PartnerCard key={index} {...partner} />
                    ))}
                </div>
            )))}
        </div>
    );
};

export default PartnerList;
