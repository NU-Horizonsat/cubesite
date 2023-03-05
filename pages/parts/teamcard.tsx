import Image from "next/legacy/image";
import { motion } from "framer-motion";
import {useMediaQuery} from "react-responsive";
import { useEffect, useState } from "react";

interface TeamCardProps {
    name: string;
    head_name: string;
    image: string;
}

const TeamCard = ({ name, head_name, image }: TeamCardProps) => {
    return (
        <motion.div
            className="block grow max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <div className="relative w-full h-52 mb-5">
                <Image src={image} alt="Team Logo" layout="fill" objectFit="contain" />
            </div>
            <h3 className="text-2xl font-bold text-center">{name}</h3>
            <p className="text-center">{head_name}</p>
        </motion.div>
    );
};

interface TeamGridProps {
    teams: TeamCardProps[];
}

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    const isMobileMediaQuery = useMediaQuery({ query: "(max-width: 768px)" });
    useEffect(() => {
        setIsMobile(isMobileMediaQuery);
    }, [isMobileMediaQuery]);
    return isMobile;
}

const TeamGrid = ({ teams }: TeamGridProps) => {
    const isMobile = useIsMobile();
    const teamsPerLine = isMobile ? 1 : 3; // set the number of items per line based on screen size
    const teamsRows = [];
    for (let i = 0; i < teams.length; i += teamsPerLine) {
        teamsRows.push(teams.slice(i, i + teamsPerLine));
    }

    return (
        <div className={`flex flex-col gap-6 ${isMobile ? "flex-col" : "flex-wrap justify-center"}`}>
            {teamsRows.map((row, index) => (
                <div key={index} className={`flex gap-6 ${isMobile ? "flex-col" : "justify-center"}`}>
                    {row.map((team, index) => (
                        <TeamCard key={index} {...team} />
                    ))}
                </div>
            ))}
        </div>
    );
};



export { TeamCard, TeamGrid };