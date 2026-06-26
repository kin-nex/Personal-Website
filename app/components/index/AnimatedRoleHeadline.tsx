const ROLES = [
  'Back-end engineer',
  'Front-end engineer',
  'Full-stack engineer',
  'Founding Product engineer',
] as const

const PASSION_COPY = 'with a passion for travelling and eating'
const FINAL_COPY = `Founding Product engineer ${PASSION_COPY}`
const PASSED_TYPE_MS_PER_CHARACTER = 28
const FINAL_TYPE_MS_PER_CHARACTER = 42

const getTypeDuration = (copy: string, isFinal: boolean) => {
  const msPerCharacter = isFinal
    ? FINAL_TYPE_MS_PER_CHARACTER
    : PASSED_TYPE_MS_PER_CHARACTER

  return `${Math.max(copy.length * msPerCharacter, isFinal ? 680 : 440)}ms`
}

const renderTypedCopy = (copy: string) =>
  Array.from(copy).map((character, index) => (
    <span
      // Character index is stable because the copy is static.
      key={`${character}-${index}`}
      className="hero-role-character"
      style={
        {
          '--character-index': index,
        } as React.CSSProperties
      }
    >
      {character}
    </span>
  ))

export const AnimatedRoleHeadline = () => (
  <h2
    aria-label={FINAL_COPY}
    className="hero-role-headline relative mb-14 min-h-[15rem] overflow-hidden text-2xl font-bold tracking-wider sm:min-h-[13rem] sm:text-3xl lg:min-h-[14rem]"
  >
    <span aria-hidden="true" className="block">
      {ROLES.map((role, index) => {
        const isFinal = index === ROLES.length - 1
        const copy = isFinal ? FINAL_COPY : role

        return (
          <span
            key={role}
            className={`hero-role-line ${
              isFinal ? 'hero-role-line-final' : 'hero-role-line-passed'
            }`}
            style={
              {
                '--role-index': index,
                '--role-characters': copy.length,
                '--role-type-duration': getTypeDuration(copy, isFinal),
              } as React.CSSProperties
            }
          >
            <span className="hero-role-text">{renderTypedCopy(copy)}</span>
          </span>
        )
      })}
    </span>
  </h2>
)
