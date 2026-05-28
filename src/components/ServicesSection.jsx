import hero from '../assets/hero.jpg'
import salonHero from '../assets/salon-hero.jpg'

const detailSections = [
  {
    title: 'Our Services',
    body: "We offer a comprehensive range of beauty treatments designed to meet your needs and exceed your expectations. Our expert team uses modern techniques and premium products to craft a fresh look, a relaxing reset, or a complete transformation—always tailored to you.",
    image: salonHero,
    alt: 'Salon service experience',
  },
  {
    title: 'Precision Care Detail',
    body: 'From signature cuts to bespoke styling, every appointment starts with a consult and ends with a finish that suits your face shape, hair texture, and lifestyle. Expect clean lines, soft blends, and a polished result that lasts.',
    image: hero,
    alt: 'Hair styling session',
  },
  {
    title: 'Luxury Products & Techniques',
    body: 'We use trusted, salon-grade products and mindful techniques to help protect shine, tone, and overall hair health. Whether you’re choosing color, treatment, or event styling, we focus on comfort, confidence, and long-term results.',
    image: salonHero,
    alt: 'Premium salon products and tools',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-stone-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-20">
        <div className="space-y-12 md:space-y-16">
          {detailSections.map((item, index) => {
            const isReversed = index === 1

            return (
              <div
                key={item.title}
                className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14"
              >
                <div
                  className={
                    isReversed
                      ? 'animate-fade-up overflow-hidden rounded-sm bg-stone-200 shadow-sm md:order-2 motion-reduce:animate-none'
                      : 'animate-fade-up overflow-hidden rounded-sm bg-stone-200 shadow-sm motion-reduce:animate-none'
                  }
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="aspect-[5/4] w-full object-cover md:aspect-[4/3]"
                    loading="lazy"
                  />
                </div>

                <div
                  className={
                    isReversed
                      ? 'animate-fade-up md:order-1 motion-reduce:animate-none'
                      : 'animate-fade-up motion-reduce:animate-none'
                  }
                  style={{ animationDelay: `${index * 90 + 60}ms` }}
                >
                  <h2 className="text-balance font-serif text-4xl font-semibold text-stone-950 md:text-6xl">
                    {item.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-stone-600 md:text-lg md:leading-8">
                    {item.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
