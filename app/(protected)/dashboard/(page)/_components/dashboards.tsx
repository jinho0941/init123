import { Dashboard, User } from '@/type'
import { AddDashboardButton } from './add-dashboard-button'
import { DashboardLinkButton } from './dashboard-link-button'
import { ValueOfCircleColor } from '@/enum'
import { PaginationButtons } from './pagination-buttons'
import { InvitedList } from './invited-list'

type Props = {
  dashboards: Dashboard[]
  maxPage: number
  currentPage: number
  user: User
}

export const Dashboards = ({
  dashboards,
  maxPage,
  currentPage,
  user,
}: Props) => {
  return (
    <div className='w-full xl:w-[1000px]'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
        <AddDashboardButton />
        {dashboards.map((dashboard) => (
          <DashboardLinkButton
            key={dashboard.id}
            id={dashboard.id}
            isOwner={dashboard.userId === user.id}
            title={dashboard.title}
            color={dashboard.color as ValueOfCircleColor}
          />
        ))}
      </div>
      <PaginationButtons currentPage={currentPage} maxPage={maxPage} />
      <InvitedList />
    </div>
  )
}
