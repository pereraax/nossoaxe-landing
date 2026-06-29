import { Star } from 'lucide-react'

export default function TestimonialStars({ className = '' }) {
  return (
    <div className={`testimonial-stars flex gap-0.5 ${className}`} aria-label="5 estrelas">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`testimonial-star testimonial-star--${i} h-3.5 w-3.5 fill-gold text-gold sm:h-4 sm:w-4`}
          strokeWidth={0}
          aria-hidden
        />
      ))}
    </div>
  )
}
