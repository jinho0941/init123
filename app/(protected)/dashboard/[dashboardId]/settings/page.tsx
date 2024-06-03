import { BackButton } from '@/components/back-button'
import { DashboardInfo } from './_components/dashboard-info'
import { DashboardMembers } from './_components/dashbaord-members'
import { InvitedMemberInfo } from './_components/invited-member-info'
import { getDashboardById, getInvitations } from '@/app/api/dashboard'
import { ValueOfCircleColor } from '@/enum'
import { DeleteDashboardButton } from './_components/delete-dashboard-button'
import { getCurrentUser } from '@/app/api/user'

type Props = {
  params: { dashboardId: string }
}

const DashboardSettingPage = async ({ params }: Props) => {
  const id = Number(params.dashboardId)
  const dashboardDetails = await getDashboardById({ id })

  if (dashboardDetails === null) throw new Error('대시보드를 찾을수 없습니다.')

  const invitedMemberRes = await getInvitations({ dashboardId: id })
  if (invitedMemberRes === null) throw new Error('대시보드를 찾을수 없습니다.')

  const user = await getCurrentUser()

  return (
    <main className='min-h-full bg-stone-100'>
      <div className='w-full space-y-5 px-5 py-8 xl:max-w-2xl'>
        <BackButton href={`/dashboard/${params.dashboardId}`} />
        <DashboardInfo
          id={id}
          title={dashboardDetails.title}
          selectedColor={dashboardDetails.color as ValueOfCircleColor}
        />
        <DashboardMembers dashboardId={id} />
        <InvitedMemberInfo
          dashboardId={id}
          invitations={invitedMemberRes.invitations}
        />
        <DeleteDashboardButton
          dashboardId={id}
          isShow={user!.id === dashboardDetails.userId}
        />
      </div>
    </main>
  )
}

export default DashboardSettingPage
