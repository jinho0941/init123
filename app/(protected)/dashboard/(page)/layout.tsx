import { getCurrentUser } from '@/app/api/user'
import { Navbar } from './_components/navbar'

type Props = {
  children: React.ReactNode
}

const DashboardPageLayout = async ({ children }: Props) => {
  const user = await getCurrentUser()

  return (
    <div className='flex h-full flex-col'>
      <Navbar user={user!} />
      <div className='flex-1'>{children}</div>
    </div>
  )
}

export default DashboardPageLayout
