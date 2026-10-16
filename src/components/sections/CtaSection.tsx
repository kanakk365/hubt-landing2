import React from "react";
import { BookCall } from "@/components/site/BookCall";
import { Reveal } from "@/components/site/Reveal";
import { InquiryForm } from "./InquiryForm";
import { WaveTexture } from "@/components/site/WaveTexture";

export function CtaSection({
  title = "Tell us what you're building",
  lede = "Book a call with the team behind these products. Or leave a few details first and pick a time on the next step.",
}: {
  title?: React.ReactNode;
  lede?: React.ReactNode;
}) {
  return (
    <section id="contact" className="scroll-mt-24 pb-28 pt-12 md:pb-36" aria-labelledby="cta-title">
      <div className="container-site">
        <Reveal>
          <div className="panel edge-lit relative overflow-hidden rounded-[14px]">
            {/* Texture only under the button, inside the left column, so it never sits behind copy */}
            <WaveTexture
              preset="silk"
              opacity={0.4}
              className="bottom-0 left-0 h-[46%] w-[45%] [mask-image:linear-gradient(to_top,black_35%,transparent)] max-lg:hidden"
            />
            <div className="relative grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              {/* Copy on top, the button on the same bottom line as the form's submit row */}
              <div className="flex flex-col gap-8 p-8 md:p-12 lg:justify-between lg:p-14">
                <div className="flex flex-col gap-6">
                  <h2 id="cta-title" className="text-heading max-w-[14ch] text-fg">
                    {title}
                  </h2>
                  <p className="max-w-[44ch] text-[1.0625rem] leading-relaxed text-fg-muted md:text-lg">{lede}</p>
                </div>
                <div>
                  <BookCall size="lg" />
                </div>
              </div>
              <div className="border-t border-line p-8 md:p-12 lg:border-l lg:border-t-0 lg:p-14">
                <InquiryForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
