const ROLES = [
  'Back-end engineer',
  'Front-end engineer',
  'Full-stack engineer',
  'Founding Product engineer',
] as const

const PASSION_COPY = 'with a passion for travelling and eating'
const FINAL_COPY = `Founding Product engineer ${PASSION_COPY}`

export const AnimatedRoleHeadline = () => (
  <h2
    aria-label={FINAL_COPY}
    className="hero-role-headline relative mb-16 min-h-[17.5rem] overflow-hidden text-3xl font-bold tracking-wider sm:min-h-[15rem] sm:text-4xl lg:min-h-[16rem]"
  >
    <span aria-hidden="true" className="block">
      {ROLES.map((role, index) => (
        <span
          key={role}
          className={`hero-role-line ${
            index === ROLES.length - 1
              ? 'hero-role-line-final'
              : 'hero-role-line-passed'
          }`}
          style={
            {
              '--role-index': index,
            } as React.CSSProperties
          }
        >
          {role}
          {index === ROLES.length - 1 && (
            <span className="hero-role-sentence"> {PASSION_COPY}</span>
          )}
        </span>
      ))}
    </span>
  </h2>
)
