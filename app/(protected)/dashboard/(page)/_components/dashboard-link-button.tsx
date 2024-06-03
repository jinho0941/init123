import { CircleColorLabel } from '@/components/circle-color-label'
import { Button } from '@/components/ui/button'
import { ValueOfCircleColor } from '@/enum'
import { ChevronRight, Crown } from 'lucide-react'
import Link from 'next/link'

type Props = {
  id: number
  color: ValueOfCircleColor
  title: string
  isOwner: boolean
}

export const DashboardLinkButton = ({ id, title, color, isOwner }: Props) => {
  return (
    <Button asChild variant={'outline'} className='flex h-14 justify-between'>
      <Link href={`/dashboard/${id}`}>
        <div className='flex items-center gap-x-2'>
          <CircleColorLabel color={color} />
          <span className='truncate'>{title}</span>
        </div>
        <div className='flex items-center gap-x-1'>
          {isOwner && <Crown className='text-yellow-500' />}
          <ChevronRight className='h-5 w-5' />
        </div>
      </Link>
    </Button>
  )
}
