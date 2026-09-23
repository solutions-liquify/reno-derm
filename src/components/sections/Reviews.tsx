import { Quote, Star } from "lucide-react";
import { clinic, reviews, type Review } from "@/data/clinic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-apricot-400 text-apricot-400" />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="relative flex min-h-[280px] w-[var(--review-width)] shrink-0 flex-col overflow-hidden rounded-xl3 border border-line bg-white p-5 shadow-soft sm:p-6">
      <div className="brand-gradient-bar absolute inset-x-0 top-0 h-1" aria-hidden="true" />
      <Quote className="absolute right-6 top-6 h-9 w-9 text-teal-100" aria-hidden="true" />
      <Stars />
      <blockquote className="relative mt-4 flex-1 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
        “{review.text}”
      </blockquote>
      <figcaption className="mt-4 border-t border-line pt-3">
        <p className="font-semibold text-ink">{review.name}</p>
        <p className="mt-1 text-xs text-muted">{review.tag} · {review.when}</p>
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            kicker="Patient stories"
            title="What patients say."
            align="center"
          />
          <Reveal delay={0.2} className="mt-3 flex justify-center">
            <a href={clinic.social.googleReviews} target="_blank" rel="noopener noreferrer" className="link-underline text-sm font-medium text-teal-700">
              Read reviews on Google
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.3}>
          <div
            className="review-carousel mt-7 overflow-hidden rounded-xl3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-teal-700 [--review-gap:1rem] [--review-width:min(78vw,320px)] sm:[--review-gap:1.25rem] sm:[--review-width:clamp(320px,28vw,430px)]"
            role="region"
            aria-roledescription="carousel"
            aria-label="Patient reviews. Focus to pause the moving cards."
            tabIndex={0}
          >
            <div className="review-track flex w-max items-stretch animate-marquee sm:-ml-[calc(var(--review-width)/2)] [animation-duration:60s]">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 items-stretch gap-[var(--review-gap)] pr-[var(--review-gap)]" aria-hidden={copy === 1}>
                  {reviews.map((review) => (
                    <ReviewCard key={`${copy}-${review.name}`} review={review} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
