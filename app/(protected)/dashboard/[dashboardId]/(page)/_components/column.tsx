import { Button } from '@/components/ui/button'
import { cn, formatDate } from '@/lib/utils'
import { Calendar, Settings } from 'lucide-react'
import { AddCardButton } from './add-card-button'
import { Member } from '@/type'
import { getCards } from '@/app/api/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type Props = {
  dashboardId: number
  members: Member[]
  columnId: number
  isFirst: boolean
  title: string
}

export const Column = async ({
  dashboardId,
  columnId,
  members,
  isFirst,
  title,
}: Props) => {
  const cardRes = await getCards({ columnId })
  if (!cardRes) throw new Error('에러')
  return (
    <div
      className={cn(
        'flex flex-col gap-y-4 px-3 pt-5 md:w-[350px]',
        !isFirst && 'border-l',
      )}
    >
      <div className='flex items-center justify-between'>
        <h2>{title}</h2>
        <Button variant={'ghost'} size={'sm'}>
          <Settings className='text-gray-400' />
        </Button>
      </div>
      <AddCardButton
        members={members}
        dashboardId={dashboardId}
        columnId={columnId}
      />
      {cardRes.cards.map((card) => (
        <div
          key={card.id}
          className='cursor-pointer space-y-4 rounded-lg border bg-white p-6 transition hover:bg-slate-50'
        >
          <h2 className='truncate text-xl font-semibold'>{card.title}</h2>
          {card.tags.map((tag) => (
            <Badge key={tag} variant={'outline'} className='truncate'>
              {tag}
            </Badge>
          ))}
          <div className='flex justify-between'>
            <div className='flex items-center gap-x-2 text-sm'>
              <Calendar className='h-5 w-5 text-gray-500' />
              <span>{formatDate(card.dueDate)}</span>
            </div>
            <Avatar>
              <AvatarImage src={card.assignee.profileImageUrl} />
              <AvatarFallback>{card.assignee.nickname[0]}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      ))}
    </div>
  )
}
