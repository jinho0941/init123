import { getDashboardInvitations } from '@/app/api/invitation'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { InviteInfo } from './invite-info'

export const InvitedList = async () => {
  const invitations = await getDashboardInvitations()
  if (!invitations) throw new Error('에러발생')

  return (
    <div className='mt-10 h-[500px] space-y-5 rounded-lg bg-white px-5 py-8'>
      <h1 className='text-2xl font-bold'>초대받은 대시보드</h1>
      <div className='relative'>
        <Search className='absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500' />
        <Input placeholder='검색' className='pl-10' />
      </div>
      <div className='grid grid-cols-3'>
        <span className='text-muted-foreground'>이름</span>
        <span className='text-muted-foreground'>초대자</span>
        <span className='text-muted-foreground'>수락 여부</span>
      </div>
      {invitations.invitations.map((invitation) => (
        <InviteInfo
          key={invitation.id}
          id={invitation.id}
          title={invitation.dashboard.title}
          nickname={invitation.inviter.nickname}
        />
      ))}
    </div>
  )
}
