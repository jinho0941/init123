import { getDashboardById } from '@/app/api/dashboard'
import { Title } from './title'
import { Button } from '@/components/ui/button'
import { Send, Settings } from 'lucide-react'
import { UserButton } from '@/components/user-button'
import { User } from '@/type'
import Link from 'next/link'

type Props = {
  dashboardId: number
  user: User
}

export const Navbar = async ({ dashboardId, user }: Props) => {
  const dashboardDetails = await getDashboardById({ id: dashboardId })

  if (dashboardDetails === null)
    throw new Error('대시보드 조회를 실패하였습니다. 다시 시도해주세요.')

  return (
    <nav className='flex h-14 items-center justify-between border-b px-10'>
      <Title
        title={dashboardDetails.title}
        isOwner={dashboardDetails.createdByMe}
      />
      <div className='flex items-center gap-x-4'>
        <Button variant={'outline'} asChild>
          <Link
            href={`/dashboard/${dashboardId}/settings`}
            className='flex gap-x-2'
          >
            <Settings className='h-5 w-5 text-gray-400' />
            <span>관리</span>
          </Link>
        </Button>
        <Button variant={'outline'} className='flex gap-x-2'>
          <Send className='h-5 w-5 text-gray-400' />
          초대하기
        </Button>
        <UserButton
          firstName={user.nickname[0]}
          nickname={user.nickname}
          profileImageUrl={user.profileImageUrl}
        />
      </div>
    </nav>
  )
}
