import {useMediaQuery} from "react-responsive";
import { useEffect, useState } from "react";
import Card from "@/components/home/card";

interface TeamCardProps {
    name: string;
    head_name: string;
    image: string;
}

const TeamCard = ({ name, head_name, image }: TeamCardProps) => {
    return (
        <Card title={name} description={head_name} image={image} />
        
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
    const teamsPerLine = isMobile ? 1 : 2; // set the number of items per line based on screen size
    const teamsRows = [];
    for (let i = 0; i < teams.length; i += teamsPerLine) {
        teamsRows.push(teams.slice(i, i + teamsPerLine));
    }

    return (
        <div className={`flex flex-col gap-6 ${isMobile ? "flex-col" : "flex-wrap justify-center"}`}>
            
            {(teamsRows?.map((row, index) => (
                <div key={index} className={`flex gap-6 ${isMobile ? "flex-col" : "justify-center"}`}>
                    {row.map((team, index) => (
                        <TeamCard key={index} {...team} />
                    ))}
                </div>
            )))}
        </div>
    );
};



export default TeamGrid;