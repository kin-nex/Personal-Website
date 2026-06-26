import { Separator } from '../ui/separator'
import { Link } from 'react-router';

export const LifeQuote = () => (
  <div className="mx-auto flex w-fit flex-col space-y-6 rounded-lg border p-6">
    <span className="text-muted-foreground">A quote I live by...</span>
    <div className="flex flex-row justify-center font-serif">
      <Separator orientation="vertical" className="mr-8 h-auto w-1 bg-white" />
      <div className="flex flex-col space-y-4">
        <span className="text-2xl tracking-wider">
          “Man cannot remake himself without suffering, for he is both the
          marble and the sculptor”
        </span>
        <Link
          to="https://en.wikipedia.org/wiki/Alexis_Carrel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-end font-bold tracking-wider">
            - Alexis Carrel
          </div>
        </Link>
      </div>
    </div>
  </div>
)
