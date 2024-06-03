import { CircleColor, ValueOfCircleColor } from '@/enum'
import { cn } from '@/lib/utils'

type Props = {
  color: ValueOfCircleColor
}

export const CircleColorLabel = ({ color }: Props) => {
  return (
    <div
      className={cn('relative rounded-full p-1', {
        'bg-[#7AC555]': color === CircleColor.Green,
        'bg-[#760DDE]': color === CircleColor.Purple,
        'bg-[#FFA500]': color === CircleColor.Yellow,
        'bg-[#76A5EA]': color === CircleColor.Blue,
        'bg-[#E876EA]': color === CircleColor.Pink,
      })}
    />
  )
}
