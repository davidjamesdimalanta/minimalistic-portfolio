import React from "react";
import Title from "./Title";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/a97867aa-887e-46c1-ba12-60774fc5f51e" method="POST" className="flex flex-col w-full md:w-7/12">
                    <Title>Contact</Title>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    className="p-2 bg-transparent border-2 
                    rounded-md focus:outline-none" />
                    <input 
                    type="text" 
                    name="email" 
                    placeholder="Email" 
                    className=" my-2 p-2 bg-transparent border-2 
                    rounded-md focus:outline-none" />
                    <textarea 
                    name="message" 
                    placeholder="message"
                    rows="10"
                    className="p-2 mb-4 bg-transparent border-2 rounded-md
                    focus:outline-none">
                    </textarea>
                    <button
                        type="submit"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-pink-500 drop-shadow-md">
                            Submit 
                        </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;