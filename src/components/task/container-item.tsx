const ContainerItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-80 rounded border border-black px-2 py-3 flex gap-3 flex-col relative">
      { children }
    </div>
  )
}

export { ContainerItem };