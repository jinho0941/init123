import { CircleColor, ValueOfCircleColor } from '@/enum'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

type Props = {
  color: ValueOfCircleColor
  isSelected: boolean
  onClick: () => void
}

export const CircleColorButton = ({ onClick, color, isSelected }: Props) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn('relative rounded-full p-4', {
        'bg-[#7AC555]': color === CircleColor.Green,
        'bg-[#760DDE]': color === CircleColor.Purple,
        'bg-[#FFA500]': color === CircleColor.Yellow,
        'bg-[#76A5EA]': color === CircleColor.Blue,
        'bg-[#E876EA]': color === CircleColor.Pink,
      })}
    >
      {isSelected && (
        <Check className='absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform text-white' />
      )}
    </button>
  )
}
