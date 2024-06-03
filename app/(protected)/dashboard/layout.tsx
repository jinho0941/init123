import { SideBar } from './_components/sidebar'

type Props = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className='flex h-screen'>
      <SideBar />
      <div className='flex-1'>{children}</div>
    </div>
  )
}

export default DashboardLayout
