interface DateProps {
  date: string;
}

const Date = ({ date }: DateProps) => {
  return <span className="text-gray-500">{ date }</span>
}

export { Date };