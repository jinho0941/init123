'use client'

import { CircleColorLabel } from '@/components/circle-color-label'
import { Button } from '@/components/ui/button'
import { ValueOfCircleColor } from '@/enum'
import { Crown } from 'lucide-react'
import Link from 'next/link'

type Props = {
  color: ValueOfCircleColor
  title: string
  isOwner: boolean
  id: number
}

export const DashboardLinkButton = ({ color, title, isOwner, id }: Props) => {
  return (
    <Button
      variant={'ghost'}
      className='flex w-full gap-x-2 md:justify-start'
      asChild
    >
      <Link href={`/dashboard/${id}`}>
        <CircleColorLabel color={color} />
        <span className='hidden truncate md:block'>{title}</span>
        {isOwner && <Crown className='hidden text-yellow-500 xl:block' />}
      </Link>
    </Button>
  )
}
