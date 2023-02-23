import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import {TeamCard, useIsMobile} from "@/pages/parts/teamcard";

interface PartnerCardProps {
    name: string;
    logo: string;
    description: string;
    link: string;

}
const PartnerCard = ({ name, logo, description, link }: PartnerCardProps) => {
    return (
        <motion.div
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 max-w-max grow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ padding: "1rem", flexGrow: 1, minWidth: 0, margin: "0.5rem" }}
        >
            <Image
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={logo}
                alt={`${name} logo`}
                width={500}
                height={500}
            />
            <motion.div className="flex flex-col justify-between p-4 leading-normal flex-1">
                <Link
                    className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                    href={link}
                >
                    {name}
                </Link>
                <motion.p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </motion.p>
            </motion.div>
        </motion.div>
    );
};



interface PartnerListProps {
    partners: PartnerCardProps[];
}

const PartnerList = ({ partners }: PartnerListProps) => {
    return (
        <div className="w-10/12	 items-center">
            {partners.map((partner, index) => (
                <motion.div key={index}>
                    <PartnerCard {...partner} />
                </motion.div>
            ))}
        </div>
    );
};


export default PartnerList;