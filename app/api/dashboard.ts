import { api } from '@/lib/utils'
import {
  DashboardId,
  DashboardResponse,
  InvitationResponse,
  MembersResponse,
} from '@/type'

type getDashboardsProps = {
  page: number
  size: number
}

export const getDashboards = async ({
  page,
  size,
}: getDashboardsProps): Promise<DashboardResponse | null> => {
  try {
    const response = await api.get<DashboardResponse>(
      `/dashboards?navigationMethod=pagination&page=${page}&size=${size}`,
    )
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

type getDashboardByIdProps = {
  id: number
}

export const getDashboardById = async ({
  id,
}: getDashboardByIdProps): Promise<DashboardId | null> => {
  try {
    const response = await api.get<DashboardId>(`/dashboards/${id}`)
    const data = response.data

    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

type GetInvitationsProps = {
  dashboardId: number
}

export const getInvitations = async ({ dashboardId }: GetInvitationsProps) => {
  try {
    const response = await api.get<InvitationResponse>(
      `/dashboards/${dashboardId}/invitations`,
    )
    const data = response.data

    return data
  } catch (error) {
    return null
  }
}

export const getDashboardMembers = async ({
  dashboardId,
}: {
  dashboardId: number
}) => {
  try {
    const response = await api.get<MembersResponse>(
      `/members?dashboardId=${dashboardId}`,
    )
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}
