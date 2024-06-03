import { getDashboards } from '@/app/api/dashboard'
import { Dashboards } from './_components/dashboards'
import { EmptyDashboards } from './_components/empty-dashboards'
import { getCurrentUser } from '@/app/api/user'

const DashboardPage = async ({
  searchParams,
}: {
  [key: string]: { page: string; search: string } | undefined
}) => {
  const currentPage = Number(searchParams?.page) || 1
  const search = searchParams?.search || ''
  const size = 5

  const dashboardRes = await getDashboards({ page: currentPage, size })
  const user = await getCurrentUser()

  if (dashboardRes === null)
    throw new Error(
      '대시보드를 불러오는 중에 에러가 발생하였습니다. 잠시 뒤 다시 실행해 주세요.',
    )
  if (user === null) {
    throw new Error('로그인을 해주세요')
  }

  const maxPage = Math.max(1, Math.ceil(dashboardRes.totalCount / size))

  const body =
    dashboardRes.dashboards.length === 0 ? (
      <EmptyDashboards />
    ) : (
      <Dashboards
        dashboards={dashboardRes.dashboards}
        maxPage={maxPage}
        currentPage={currentPage}
        user={user}
      />
    )

  return (
    <main className='flex min-h-full flex-col items-start bg-stone-100 p-8 '>
      {body}
    </main>
  )
}

export default DashboardPage
