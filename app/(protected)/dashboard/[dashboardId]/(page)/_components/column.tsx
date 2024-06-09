import { Button } from '@/components/ui/button'
import { cn, formatDate } from '@/lib/utils'
import { Calendar, Settings } from 'lucide-react'
import { AddCardButton } from './add-card-button'
import { Member } from '@/type'
import { getCards } from '@/app/api/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ColumnCard } from './column-card'

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
        <ColumnCard
          key={card.id}
          cardId={card.id}
          columnId={columnId}
          dashboardId={dashboardId}
          title={card.title}
          tags={card.tags}
          dueDate={card.dueDate}
          profileImageUrl={card.assignee.profileImageUrl}
          firstName={card.assignee.nickname[0]}
        />
      ))}
    </div>
  )
}
