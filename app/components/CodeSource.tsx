import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from './ui/hover-card'
import { Link } from 'react-router';
import { Code2 } from 'lucide-react'

export const CodeSource = () => (
  <HoverCard openDelay={200}>
    <HoverCardTrigger asChild>
      <Link
        to="https://github.com/kin-nex/Personal-Website"
        target="_blank"
        className="ease relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full transition-transform duration-300 ease-in before:absolute before:h-[150%] before:w-[150%] before:animate-spin-slow before:bg-[conic-gradient(red,yellow,lime,aqua,blue,magenta,red)] before:content-[''] after:absolute after:h-[85%] after:w-[85%] after:rounded-full after:bg-[hsl(var(--background))] hover:scale-[1.1] hover:before:animate-spin sm:h-12 sm:w-12"
      >
        <Code2 className="z-10 h-4 w-4 sm:h-6 sm:w-6" />
      </Link>
    </HoverCardTrigger>
    <HoverCardContent className="mt-2 w-full whitespace-nowrap rounded-lg border-violet-800">
      View the code for this site on GitHub! 😎
    </HoverCardContent>
  </HoverCard>
)
