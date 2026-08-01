import { cardReview } from "@/src/lib/content"
import { stars } from "@/src/lib/content";
import { mainTitleReview } from "@/src/lib/content";

import { FaStar } from "react-icons/fa";

import Image from "next/image";

const wordsQouteName = mainTitleReview.split(" ");

export default function ReviewSection(){
    return <section className="review flex flex-row flex-wrap items-center justify-center text-center">
        <h1 className="font-medium tracking-wider flex-shrink-0 whitespace-nowrap w-full items-center justify-center">
                    {wordsQouteName.map((word, i) => (
                        <span key={i}>
                            {(i === 4) && <br />}
                            <span className="reviewtitle inline-block mr-3 text-4xl ">{word}</span>
                        </span>
                    ))}
        </h1>
        {cardReview.map((card, i) => (
            <div key={i} className="rows flex w-1/2 h-auto p-20 items-center justify-center">
                <div className="cardreview rounded-xl border border-[rgb(204,199,199)] bg-[rgb(245,244,247)] w-[600px] h-auto">
                    <Image src={card.src} alt={card.alt} width={1000} height={500}  className="object-cover w-[600px] h-[300px] rounded-xl" loading="eager"/>
                    <div className="flex p-4">
                        {stars.map((_, index) => (
                            <FaStar 
                                key={index}
                                size={24}
                                color={(card.rate) > index ? "rgb(249,236,0)" : "rgb(218,218,218)"}
                            />
                        ))}
                    </div>
                    <p className="py-7 px-13 text-center font-semibold">"{card.description}"</p>
                </div>
            </div>
        ))}
    </section>
}