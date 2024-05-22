interface DifficultItemProps {
  difficult: string
}

const Difficult = ({ difficult }: DifficultItemProps) => {
  const easy = difficult.toLowerCase() === 'easy';
  const medium = difficult.toLowerCase() === 'medium';
  const Hard = difficult.toLowerCase() === 'hard';

  return (
    <span className={`cursor-default w-14 h-7 p-4 bg-lime-200 rounded-3xl flex justify-center items-center 
    ${easy ? 'bg-lime-300' : null}
    ${medium ? 'bg-yellow-600 w-20 text-white' : null}
    ${Hard ? 'bg-red-600 text-white' : null}
    `} >{difficult}</span>
  )
}

export { Difficult };