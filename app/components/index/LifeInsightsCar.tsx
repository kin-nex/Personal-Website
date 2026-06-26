import { Card } from '../ui/card'
import { useRef } from 'react'
import { useIntersectionObserver } from '~/hooks/useIntersectionObserver'
import { cn } from '~/utils'

const CAR_IMG =
  'https://res.cloudinary.com/erkinsalih/image/upload/f_auto,q_auto/mwglr4mrbuseokztbb48'

export const LifeInsightsCar = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    rootMargin: '-10%',
  })
  const isVisible = !!entry?.isIntersecting

  return (
    <Card
      ref={ref}
      className={cn(
        'flex flex-col justify-between space-y-6 border-none bg-slate-900 p-6 transition-all duration-700 sm:p-12 lg:flex-row lg:space-x-12 lg:space-y-0',
        isVisible ? 'opacity-100' : 'translate-y-20 opacity-0'
      )}
    >
      <img
        className="h-min w-full rounded-md lg:w-2/5"
        width={448}
        height={560}
        src={CAR_IMG}
        alt="Kin's modified Toyota GT86"
      />
      <div className="whitespace-pre-wrap text-xl leading-9 text-muted-foreground lg:w-1/2">
        I used to have 2 pictures of a Ferrari F40 on my wall when I was a
        little kid. My dad owned a red BMW E30, my uncle owned a BMW E46 M3 and
        is still a mechanic a to this day. I grew up watching Fast & Furious
        films and idolising turbo flutter and neon lights.
        {`\n\n`}I diverged from my family by not buying into German cars and
        instead went Japanese with a Toyota GT86. I bought my car (first and
        only) completely stock in March 2020 and since then have been modifying
        and tinkering since. Wheels, tyres, suspension, lip, sideskirts,
        diffuser...the list goes on. It now sits with a supercharged with one of
        the few Litchfield kits in the UK dyno'd to make 285bhp with a 0-60 time
        of 5s.
      </div>
    </Card>
  )
}
