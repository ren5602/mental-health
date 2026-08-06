"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "This platform has become part of my daily routine. The mood tracker and mindfulness exercises help me pause, reflect, and manage stress more effectively.",
    name: "Emily Carter",
    role: "Marketing Specialist",
    image: "/images/testimonial-1.webp",
  },
  {
    quote:
      "The self-assessment gave me a better understanding of how I was feeling, and the personalized recommendations made it easier to build healthier habits.",
    name: "Michael Thompson",
    role: "Software Engineer",
    image: "/images/testimonial-2.webp",
  },
  {
    quote:
      "I appreciate how simple and welcoming everything feels. From guided breathing sessions to progress tracking, the platform has helped me stay more mindful every day.",
    name: "Sophia Williams",
    role: "University Student",
    image: "/images/testimonial-3.webp",
  },
  {
    quote:
      "The guided meditation sessions have become my favorite way to unwind after work. Even a few minutes each day make a noticeable difference.",
    name: "Daniel Lee",
    role: "Project Manager",
    image: "/images/testimonial-4.webp",
  },
  {
    quote:
      "I was looking for a simple way to take better care of my mental well-being, and this platform gave me the structure and encouragement I needed to stay consistent.",
    name: "Emma Johnson",
    role: "Freelance Writer",
    image: "/images/testimonial-5.webp",
  },
  {
    quote:
      "This platform helped me manage my daily anxiety so much better. The personalized guidance and mood tracker made a huge difference in my routine.",
    name: "Sarah Jenkins",
    role: "UX Designer",
    image: "/images/testimonial-6.webp",
  },
  {
    quote:
      "Building a daily gratitude habit used to feel challenging, but the intuitive assessment and prompts here made it effortless and deeply rewarding.",
    name: "Michael Chen",
    role: "Product Designer",
    image: "/images/testimonial-7.webp",
  },
];

export function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-darker">
      <div className="mx-auto flex w-full flex-col gap-12 py-24 sm:py-28 lg:py-32">
        {/* Title */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 px-6 sm:px-10 md:px-12"
        >
          <motion.h2
            variants={fadeUp}
            className="max-w-3xl font-display text-[2rem] leading-[1.2] font-semibold tracking-[-0.006em] text-white sm:text-4xl md:text-[2.5rem] lg:text-[2.75rem]"
          >
            What Our Community Says
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl font-sans text-lg font-normal leading-[1.5] text-white/85"
          >
            Hear from people who have found greater clarity, healthier habits,
            and ongoing support through our mental wellness platform.
          </motion.p>
        </motion.div>

        {/* Staggered Testimonials Component - Full Width */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="w-full"
        >
          <StaggerTestimonials testimonials={testimonials} />
        </motion.div>
      </div>
    </section>
  );
}
