import React from "react";

export default function Event(props: {
    name: string;
    description: string;
    date: string;
}) {
    return (
        <>
        <div className = "">
            <div className = "">
                    <p className ="font-light text-sm pb-2 text-gray-500 tracking-widest font-mono">{props.date}</p>
                    <p className= "text-3xl font-mono pb-8">{props.name}</p>
                    <p className = "tracking-widest font-light text-xl w-1/2 leading-8">{props.description}</p>
                    <p className = "pt-5 font-mono tracking-widest text-sm w-1/2 leading-8">Thank you <a className = "underline decoration-pink-500 font-mono" href="frb.com">First Republic&#8599;</a> and <a  className = "underline decoration-sky-500 font-mono" href="artium.com">Artium&#8599;</a> for sponsoring!</p>

            </div>
            
        </div>
      </>
    )
}