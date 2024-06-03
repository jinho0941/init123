import { getDashboardMembers } from '@/app/api/dashboard'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { MemberInfo } from './member-info'

type Props = {
  dashboardId: number
}

export const DashboardMembers = async ({ dashboardId }: Props) => {
  const memberRes = await getDashboardMembers({ dashboardId })
  if (!memberRes) throw new Error('에러발생')

  return (
    <div className='flex flex-col rounded-lg bg-white p-8'>
      <div className='flex justify-between'>
        <h2 className='text-xl font-bold'>구성원</h2>
        <div className='flex items-center gap-x-3'>
          <div>
            <span>1 / 1</span>
          </div>
          <div>
            <Button className='px-2' variant={'outline'}>
              <ChevronLeft />
            </Button>
            <Button className='px-2' variant={'outline'}>
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
      <span className='my-6 text-muted-foreground'>이름</span>
      {memberRes.members.map((member) => (
        <MemberInfo
          key={member.id}
          memberId={member.id}
          userImgUrl={member.profileImageUrl}
          username={member.nickname}
          isOwner={member.isOwner}
        />
      ))}
    </div>
  )
}
