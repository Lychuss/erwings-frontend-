"use client";

import Cards from "@/src/components/ui/card";
import Button from "@/src/components/ui/button";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import useEmblaCarousel from 'embla-carousel-react';

gsap.registerPlugin(ScrollTrigger);


const headTitleHome = "Big flavor in every single bite.";
const quoteTitle = "Crispy, saucy, and unforgettable. Taste the ultimate wing";
const headTitleAbout = "Crispy, Saucy, perfection served to your table.";
const paragraphAbout = "Our website brings you crispy, perfectly cooked chicken wings with bold, mouth-watering sauces that we delivered straight home.";
const quoteName = "OWNED BY RAPHAEL MHARCUS SAN JUAN";
const headTitlePricing = "Flavor big prices small.";

const wordsHeadHome = headTitleHome.split(" ");
const wordsQuote = quoteTitle.split(" ");
const wordsHeadAbout = headTitleAbout.split(" ");
const wordsParagraphAbout = paragraphAbout.split(" ");
const wordsQouteName = quoteName.split(" ");
const wordsHeadPricing = headTitlePricing.split(" ");

export default function Home(){
    const orderButtonRef = useRef<HTMLButtonElement>(null);
    const readMoreButtonRef = useRef<HTMLButtonElement>(null);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

    const goToPrev = () => emblaApi?.scrollPrev();
    const goToNext = () => emblaApi?.scrollNext();

    const orderButtonAction = () => {};
    const readMoreButtonAction = () => {};

    useGSAP(() => {
        // --- Hero section timeline (no scroll trigger, plays on load) ---
        const tl = gsap.timeline();

        tl.fromTo(".word",
            { opacity: 0, filter: "blur(10px)" },
            { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, filter: "blur(0px)", ease: "power4.out" }
        ).fromTo(".paragraph",
            { opacity: 0, filter: "blur(20px)" },
            { opacity: 1, filter: "blur(0px)", y: 280, stagger: 0.1, duration: 0.5, ease: "power4.out" }
        ).fromTo(".order",
            { opacity: 0, filter: "blur(30px)" },
            { opacity: 1, filter: "blur(0px)", y: -80, duration: 0.8, ease: "power4.out" },
            "<"
        ).fromTo(".read",
            { opacity: 0, filter: "blur(30px)" },
            { opacity: 1, filter: "blur(0px)", y: -80, duration: 0.8, ease: "power4.out" },
            ">"
        );

        // --- About section timeline ---
        const tr = gsap.timeline({
            scrollTrigger: {
                trigger: ".about",
                start: "top 50%",
                end: "bottom 0%"
            }
        });

        tr.fromTo(".crispy",
            { y: 500, filter: "blur(20px)", opacity: 0 },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power2.out", stagger: 0.3 }
        ).fromTo(".ecommerce",
            { y: 400, opacity: 0, filter: "blur(20px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" },
            0
        ).fromTo(".ordertext",
            { y: 100, filter: "blur(20px)", opacity: 0 },
            { y: 0, filter: "blur(0px)", opacity: 1, duration: 0.3, stagger: 0.1, ease: "power2.out" },
            0
        ).fromTo(".ordersecond",
            { y: 100, opacity: 0, filter: "blur(20px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" },
            0
        ).fromTo(".readsecond",
            { y: 100, opacity: 0, filter: "blur(20px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 2, ease: "power2.out" },
            0
        );

        // --- Pricing section timeline (separate trigger for .pricing) ---
        const tp = gsap.timeline({
            scrollTrigger: {
                trigger: ".pricing",
                start: "top 50%",
                end: "bottom 0%"
            }
        });

        tp.fromTo(".ownername",
            { y: 100, opacity: 0, filter: "blur(20px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power2.out", stagger: 0.08 }
        ).fromTo(".headpricing",
            { y: 100, opacity: 0, filter: "blur(20px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power2.out", stagger: 0.1 },
            "<0.2"
        );

    }, []);

    return <>

        <section>
            <div className="flex items-center justify-center mt-30">
                <h1 className="text-6xl font-medium text-center tracking-wider">
                    {wordsHeadHome.map((word, i) => (
                        <span key={i}>
                            {i === wordsHeadHome.length - 2 && <br />}
                            <span className="word inline-block mr-2 my-2" style={{ transform: `translateY(${100 + (i + 10)}px)` }}>
                                {word}
                            </span>
                        </span>
                    ))}
                </h1>
            </div>

            <div className="flex items-center justify-center">
                <Cards />
            </div>

            <div className="flex items-center justify-center">
                <p className="text-sm font-semibold text-center tracking-wider">
                    {wordsQuote.map((word, i) => (
                        <span key={i}>
                            <span className="paragraph inline-block mr-2 my-2" style={{ transform: `translateY(${500 + (i + 5)}px)` }}>
                                {word}
                            </span>
                        </span>
                    ))}
                </p>
            </div>

            <div className="flex items-center justify-center translate-y-100 gap-2">
                <Button ref={orderButtonRef} onClick={orderButtonAction} className="order bg-black border border-black rounded-2xl text-white px-6 py-2 text-xs" label="Order now" />
                <Button ref={readMoreButtonRef} onClick={readMoreButtonAction} className="read bg-[rgba(203,192,198,0.23)] border border-[rgba(203,192,198,0.23)] rounded-2xl px-4 py-2 text-xs" label="Read More" />
            </div>
        </section>


        <section className="about py-10 px-23 translate-y-100 font-black h-150 space-y-13">
            <p className="ecommerce font-medium mb-2">E-COMMERCE</p>
            <h1 className="text-7xl font-medium">
                {wordsHeadAbout.map((word, i) => (
                    <span key={i}>
                        {(i === 2 || i === 4) && <br />}
                        <span className="crispy inline-block leading-22 mr-5">
                            {(i > 3 || i < 2) && word}
                            {(i === 2 || i === 3) && <span className="text-[rgba(144,20,0,0.8)]">{word}</span>}
                        </span>
                    </span>
                ))}
            </h1>
            <p className="leading-7 font-medium">
                {wordsParagraphAbout.map((word, i) => (
                    <span key={i}>
                        {(i === 7 || i === 12) && <br />}
                        <span className="ordertext inline-block mr-1">
                            {word}
                        </span>
                    </span>
                ))}
            </p>

            <div className="aboutbutton">
                <Button ref={orderButtonRef} onClick={orderButtonAction} className="ordersecond bg-black font-medium border border-black rounded-2xl text-white px-6 py-2 text-xs" label="Order now" />
                <Button ref={readMoreButtonRef} onClick={readMoreButtonAction} className="readsecond font-medium bg-[rgba(203,192,198,0.23)] border border-[rgba(203,192,198,0.23)] rounded-2xl px-4 py-2 text-xs" label="Read More" />
            </div>
        </section>

        <section className="pricing px-20 py-10">
            <div className="flex flex-col">
                <h1 className="font-medium tracking-wider">
                    {wordsQouteName.map((word, i) => (
                        <span key={i}>
                            <span className="ownername inline-block mr-3">
                                {word}
                            </span>
                        </span>
                    ))}
                </h1>
                <h1 className="font-medium tracking-wider text-6xl my-5">
                    {wordsHeadPricing.map((word, i) => (
                        <span key={i}>
                            {i === 2 && <br />}
                            <span className="headpricing inline-block mr-3 my-1">
                                {word}
                            </span>
                        </span>
                    ))}
                </h1>
            </div>

            <div className="embla w-[500px] mx-auto">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        <div className="embla__slide h-80 flex items-center justify-center border bg-red-200">Slide 1</div>
                        <div className="embla__slide h-80 flex items-center justify-center border bg-yellow-200">Slide 2</div>
                        <div className="embla__slide h-80 flex items-center justify-center border bg-blue-200">Slide 3</div>
                    </div>
                </div>

                <button className="embla__prev cursor-pointer" onClick={goToPrev}>
                    Scroll to prev
                </button>
                <button className="embla__next cursor-pointer" onClick={goToNext}>
                    Scroll to next
                </button>
            </div>
        </section>
    </>;
}