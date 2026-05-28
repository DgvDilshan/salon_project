export default function PageHero({ title, subtitle, backgroundImage, variant = 'dark' }) {
  const isDark = variant === 'dark'

  return (
    <div
      className={
        backgroundImage
          ? 'bg-stone-900 bg-cover bg-center'
          : isDark
            ? 'bg-stone-900'
            : 'bg-white'
      }
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className={backgroundImage ? 'bg-stone-950/55' : ''}>
        <section className="mx-auto w-full max-w-6xl px-4 py-16 text-center md:py-20">
          <h1
            className={
              isDark || backgroundImage
                ? 'animate-fade-up font-serif text-4xl text-white md:text-6xl'
                : 'animate-fade-up font-serif text-4xl text-stone-900 md:text-6xl'
            }
          >
            {title}
          </h1>
          {subtitle ? (
            <p
              className={
                isDark || backgroundImage
                  ? 'mt-3 animate-fade-in text-[11px] font-semibold tracking-[0.25em] text-amber-200'
                  : 'mt-3 animate-fade-in text-[11px] font-semibold tracking-[0.25em] text-stone-500'
              }
            >
              {subtitle}
            </p>
          ) : null}
        </section>
      </div>
    </div>
  )
}
