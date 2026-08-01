"use client";

import { useRef } from "react";
import Cards from "@/src/components/ui/card";
import Button from "@/src/components/ui/button";
import { headTitleHome, quoteTitle } from "@/src/lib/content";

const wordsHeadHome = headTitleHome.split(" ");
const wordsQuote = quoteTitle.split(" ");

interface HeroSectionProps {
    onOrder: () => void;
    onReadMore: () => void;
}

export default function HeroSection({ onOrder, onReadMore }: HeroSectionProps) {
    const orderButtonRef = useRef<HTMLButtonElement>(null);
    const readMoreButtonRef = useRef<HTMLButtonElement>(null);

    return (
        <section className="home">
            <div className="flex items-center justify-center mt-30">
                <h1 className="text-6xl font-medium text-center tracking-wider">
                    {wordsHeadHome.map((word, i) => (
                        <span key={i}>
                            {i === wordsHeadHome.length - 2 && <br />}
                            <span className="word inline-block mr-2 my-2">{word}</span>
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
                            <span className="paragraph inline-block mr-2 my-2">{word}</span>
                        </span>
                    ))}
                </p>
            </div>

            <div className="flex items-center justify-center gap-2">
                <Button
                    ref={orderButtonRef}
                    onClick={onOrder}
                    className="order bg-black border border-black rounded-2xl text-white px-6 py-2 text-xs"
                    label="Order now"
                />
                <Button
                    ref={readMoreButtonRef}
                    onClick={onReadMore}
                    className="read bg-[rgba(203,192,198,0.23)] border border-[rgba(203,192,198,0.23)] rounded-2xl px-4 py-2 text-xs"
                    label="Read More"
                />
            </div>
        </section>
    );
}