"use client";

import { FaFacebook } from "react-icons/fa";
import { SiFoodpanda } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { mainQuoteContact, carouselImages } from "@/src/lib/content";

const wordsQuoteContact = mainQuoteContact.split(" ");

export default function ContactSection() {
    return (
        <section className="contact px-20 py-5 h-250 space-y-13 flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
                {carouselImages.map((image, i) => (
                    <img
                        src={image.src}
                        key={i}
                        alt={image.alt}
                        className="concard absolute w-45 h-55 rounded-xl"
                        style={{ zIndex: 50 + i }}
                    />
                ))}
            </div>

            <div>
                <h1 className="text-center z-0">
                    {wordsQuoteContact.map((word, i) => (
                        <span key={i} className="text-[38px] font-medium z-0">
                            {(i === 8 || i === 16) && <br />}
                            <span
                                className={`quote_name mr-4 z-0 ${i > 14 ? "text-gray-200" : ""}`}
                            >
                                {word}
                            </span>
                        </span>
                    ))}
                </h1>
            </div>

            <div className="flex space-x-3 text-4xl">
                <FaFacebook className="social_icons cursor-pointer" />
                <SiFoodpanda className="social_icons cursor-pointer" />
                <RiInstagramFill className="social_icons cursor-pointer" />
            </div>
        </section>
    );
}