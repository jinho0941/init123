import { getColumns } from '@/app/api/column'
import { AddColumnButton } from './_components/add-column-button'
import { Column } from './_components/column'
import { getDashboardMembers } from '@/app/api/dashboard'

const DashboardIdPage = async ({
  params,
}: {
  params: { dashboardId: string }
}) => {
  const dashboardId = Number(params.dashboardId)
  const columns = await getColumns({ dashboardId })
  const members = await getDashboardMembers({ dashboardId })

  if (!members) throw new Error('에러')
  if (!columns) throw new Error('에러')

  return (
    <>
      <div className='flex h-full flex-col bg-stone-100 md:flex-row'>
        {columns.data.map((column, index) => (
          <Column
            key={column.id}
            members={members.members}
            dashboardId={dashboardId}
            columnId={column.id}
            isFirst={index === 0}
            title={column.title}
          />
        ))}
      </div>
      <AddColumnButton dashboardId={dashboardId} />
    </>
  )
}

export default DashboardIdPage
