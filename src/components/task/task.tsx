interface TaskProps {
  tesk: string;
}

const Task = ({ tesk }: TaskProps) => {
  const mobile = tesk.toLowerCase() === 'mobile';
  const web = tesk.toLowerCase() === 'web';
  
  return (
    <span className={`cursor-default w-14 h-7 p-4 bg-pink-600 rounded flex justify-center items-center text-white
    ${mobile ? 'bg-pink-600' : null}
    ${web ? 'bg-violet-500' : null}
    `}>{ tesk }</span>
  )
}

export { Task };