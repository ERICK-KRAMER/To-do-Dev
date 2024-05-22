interface UserProps {
  image: string;
  name: string;
}

const User = ({ image, name }: UserProps) => {
  return (
    <div className="flex justify-end items-center gap-2">
      <p>{ name }</p>
      <img src={image} alt="avatar" className=" w-10 mx-2 rounded-full"/>
    </div>
  )
}

export { User };