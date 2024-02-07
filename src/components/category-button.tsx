import { Text, Pressable, PressableProps } from "react-native"
import { clsx } from "clsx"

type CategoryButtonProps = PressableProps &{
  title: string
  isSelected?: boolean
}

export function CategoryButton({ title, isSelected, ...rest }: CategoryButtonProps) {
  return (
    <Pressable 
      className={clsx(
        "bg-slate-800 px-4 justify-center rounded-md h-10 border-2 border-slate-800",
        isSelected && "border-2 border-lime-300")}
      {...rest}  
    >
      <Text className="text-slate-100 font-bold text-sm">{title}</Text>
    </Pressable>
  )
}