import { RefreshCcw } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Card, CardDescription } from '../ui/card'
import { FACTS } from '~/components/index/Facts'
import { ClientOnly } from '~/components/ClientOnly'

const getFactNumber = (prev?: number): number => {
  const getPosition = () => Math.floor(Math.random() * FACTS.length)
  let nextPos = getPosition()
  while (nextPos === prev) nextPos = getPosition()
  return nextPos
}

const RandomFactGenerator = () => {
  const [spinning, setSpinning] = useState(false)
  const [factNumber, setFactNumber] = useState(getFactNumber())

  useEffect(() => {
    if (spinning) setFactNumber(getFactNumber(factNumber))
  }, [spinning])

  const flipSpinningState = () => setSpinning(!spinning)

  return (
    <Card className="animate-fade-up p-4">
      <CardDescription className="mb-4">
        A random fact about me...
      </CardDescription>
      <div className="flex flex-row items-center">
        <Button
          className="self-start p-2"
          variant="outline"
          size="icon"
          onClick={flipSpinningState}
        >
          <RefreshCcw
            className={`${
              spinning && 'animate-spin-once'
            } min-h-4 min-w-4 transition hover:rotate-12 focus:animate-spin`}
            onAnimationEnd={flipSpinningState}
          />
        </Button>
        <div className="ml-4 text-xl leading-relaxed">{FACTS[factNumber]}</div>
      </div>
    </Card>
  )
}

export const MainContent = () => (
  <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
    <div className="mb-20 lg:mb-0 lg:mt-12 lg:w-1/2 xl:mt-20">
      <h1 className="relative mb-4 animate-fade-up text-xl font-light">
        Hi, i'm kin 🙂
      </h1>
      <h2 className="relative mb-16 animate-fade-up text-4xl font-bold tracking-wider">
        Front-end engineer with a passion for travelling and eating
      </h2>
      <ClientOnly>{() => <RandomFactGenerator />}</ClientOnly>
    </div>
    <div className="md:w-5/6 lg:w-2/5">
      <img
        className="animate-unblur rounded-3xl"
        src="https://res.cloudinary.com/erkinsalih/image/upload/f_auto,q_auto,ar_1.0,c_fill,w_576/f3mntumy1nps7txo1wft"
        alt="Me on top of a mountain in Ha Giang (Vietnam)"
      />
    </div>
  </div>
)
