'use client'
import { useParams } from "next/navigation";

export interface ComponentProps {
    params: {id: String[]}
}

const Component = ({ params }: ComponentProps) => {
    const param = useParams()
    console.log(param);
    
    return (
        <div>{param.id}</div>
    )
};

export default Component;