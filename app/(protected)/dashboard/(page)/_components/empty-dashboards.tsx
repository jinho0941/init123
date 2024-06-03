import { MailX } from 'lucide-react'
import { AddDashboardButton } from './add-dashboard-button'

export const EmptyDashboards = () => {
  return (
    <>
      <div className='grid w-full grid-cols-1 md:grid-cols-2 xl:w-[1000px] xl:grid-cols-3'>
        <AddDashboardButton />
      </div>
      <div className='mt-10 flex h-[400px] w-full flex-col rounded-lg bg-white p-6 xl:w-[1000px]'>
        <h2 className='text-xl font-bold'>초대받은 대시보드</h2>
        <div className='flex flex-1 flex-col items-center justify-center gap-y-5 text-gray-400'>
          <MailX className='h-32 w-32' />
          <p className='text-lg'>아직 초대받은 대시보드가 없어요</p>
        </div>
      </div>
    </>
  )
}
