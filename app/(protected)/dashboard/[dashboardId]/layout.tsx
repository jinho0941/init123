import { getCurrentUser } from '@/app/api/user'
import { Navbar } from './_component/navbar'

type Props = {
  children: React.ReactNode
  params: { dashboardId: string }
}

const DashboardIdPageLayout = async ({ children, params }: Props) => {
  const dashboardId = Number(params.dashboardId)

  const user = await getCurrentUser()
  return (
    <div className='flex h-full flex-col'>
      <Navbar dashboardId={dashboardId} user={user!} />
      <div className='flex-1'>{children}</div>
    </div>
  )
}

export default DashboardIdPageLayout
