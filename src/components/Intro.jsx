import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white">David James</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Front-end Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
            Hi! I am a Toronto-based front-end developer. 
            I am a third year UofT student in the Psychology program. <br />
            My goal is to utilize my enthusiasm and abilities to design, implement, 
            and manage digital products and experiences for businesses, both independently and in partnership with web agencies, 
            companies, start-ups, and individuals. I love thrifting, landscape photography, and sleeping.
            </p>
        </div>
    )
}

export default Intro;