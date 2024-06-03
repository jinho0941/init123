import Image from 'next/image'
import { CreateDashboardButton } from './create-dashboard-button'
import { getDashboards } from '@/app/api/dashboard'
import { getCurrentUser } from '@/app/api/user'
import { DashboardLinkButton } from './dashboard-link-button'
import { ValueOfCircleColor } from '@/enum'

export const SideBar = async () => {
  const dashboardRes = await getDashboards({ page: 1, size: 100 })
  const user = await getCurrentUser()
  if (dashboardRes === null)
    throw Error('현재 대시보드를 가져오지 못했습니다. 다시 시도해주세요.')
  if (user === null) {
    throw Error('현재 로그인이 안되어 있습니다. 로그인을 해주세요.')
  }

  const dashboard = dashboardRes.dashboards
  return (
    <div className='w-[80px] border-r px-2 py-5 md:w-[150px] xl:w-[300px]'>
      <Image
        src={'/logo2.png'}
        alt={'logo'}
        width={108}
        height={33}
        className='mx-3'
      />
      <CreateDashboardButton />
      {dashboard.map((dashboard) => (
        <DashboardLinkButton
          key={dashboard.id}
          id={dashboard.id}
          color={dashboard.color as ValueOfCircleColor}
          title={dashboard.title}
          isOwner={dashboard.userId === user.id}
        />
      ))}
    </div>
  )
}
