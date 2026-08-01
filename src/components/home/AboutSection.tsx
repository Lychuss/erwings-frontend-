"use client";

import { useRef } from "react";
import Button from "@/src/components/ui/button";
import { headTitleAbout, paragraphAbout } from "@/src/lib/content";

const wordsHeadAbout = headTitleAbout.split(" ");
const wordsParagraphAbout = paragraphAbout.split(" ");

interface AboutSectionProps {
    onOrder: () => void;
    onReadMore: () => void;
}

export default function AboutSection({ onOrder, onReadMore }: AboutSectionProps) {
    const orderButtonRef = useRef<HTMLButtonElement>(null);
    const readMoreButtonRef = useRef<HTMLButtonElement>(null);

    return (
        <section className="about py-10 px-23 font-black h-150 space-y-13">
            <p className="ecommerce font-medium mb-2">E-COMMERCE</p>
            <h1 className="text-7xl font-medium">
                {wordsHeadAbout.map((word, i) => (
                    <span key={i}>
                        {(i === 2 || i === 4) && <br />}
                        <span className="crispy inline-block leading-22 mr-5">
                            {(i > 3 || i < 2) && word}
                            {(i === 2 || i === 3) && (
                                <span className="text-[rgba(144,20,0,0.8)]">{word}</span>
                            )}
                        </span>
                    </span>
                ))}
            </h1>
            <p className="leading-7 font-medium">
                {wordsParagraphAbout.map((word, i) => (
                    <span key={i}>
                        {(i === 7 || i === 12) && <br />}
                        <span className="ordertext inline-block mr-1">{word}</span>
                    </span>
                ))}
            </p>

            <div className="aboutbutton">
                <Button
                    ref={orderButtonRef}
                    onClick={onOrder}
                    className="ordersecond bg-black font-medium border border-black rounded-2xl text-white px-6 py-2 text-xs"
                    label="Order now"
                />
                <Button
                    ref={readMoreButtonRef}
                    onClick={onReadMore}
                    className="readsecond font-medium bg-[rgba(203,192,198,0.23)] border border-[rgba(203,192,198,0.23)] rounded-2xl px-4 py-2 text-xs"
                    label="Read More"
                />
            </div>
        </section>
    );
}