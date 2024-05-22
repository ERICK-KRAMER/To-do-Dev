const Container = ({ title, children, inPogress }: { title: string, children?: React.ReactNode, inPogress?: boolean }) => {
  return (
    <div className="flex flex-col gap-3 p-4 border w-[355px] rounded bg-neutral-100">
      <div className=" flex gap-4">
        <h1 className="font-bold">{title}</h1>
        { inPogress ? <span>erick kramer</span> : null }
      </div>
      { children }
    </div>
  )
}

export { Container };