"use client";

import { useCarousel } from "@/src/hooks/useCarousel";
import { headTitlePricing, quoteName, carouselImages } from "@/src/lib/content";

const wordsQouteName = quoteName.split(" ");
const wordsHeadPricing = headTitlePricing.split(" ");

type CarouselControls = ReturnType<typeof useCarousel>;

interface PricingSectionProps {
    emblaRef: CarouselControls["emblaRef"];
    goToPrev: CarouselControls["goToPrev"];
    goToNext: CarouselControls["goToNext"];
}

export default function PricingSection({ emblaRef, goToPrev, goToNext }: PricingSectionProps) {
    return (
        <section className="pricing px-20 py-5 h-250 space-y-13">
            <div className="flex flex-col gap-1">
                <h1 className="font-medium tracking-wider">
                    {wordsQouteName.map((word, i) => (
                        <span key={i}>
                            <span className="ownername inline-block mr-3">{word}</span>
                        </span>
                    ))}
                </h1>
                <h1 className="font-medium tracking-wider text-6xl my-1">
                    {wordsHeadPricing.map((word, i) => (
                        <span key={i}>
                            {i === 2 && <br />}
                            <span className="headpricing inline-block mr-3 my-1">{word}</span>
                        </span>
                    ))}
                </h1>
            </div>
            <div className="flex items-center justify-center">
                <div className="embla w-[80%]">
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">
                            {carouselImages.map((image, i) => (
                                <img
                                    key={i}
                                    className="embla__slide h-110 flex items-center justify-center rounded-2xl bg-red-200"
                                    src={image.src}
                                    alt={image.alt}
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={goToPrev}
                        className="absolute z-10 right-35 top-90 border rounded-full border-[rgba(229,229,229,0.8)] bg-[rgba(229,229,229,0.8)]"
                    >
                        <img src="images/left-arrow-icon.png" alt="prev-icon" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute z-10 right-25 top-90 border rounded-full border-[rgba(229,229,229,0.8)] bg-[rgba(229,229,229,0.8)]"
                    >
                        <img src="images/right-arrow-icon.png" alt="next-icon" />
                    </button>
                </div>
            </div>
        </section>
    );
}