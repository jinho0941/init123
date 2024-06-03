import { api } from '@/lib/utils'
import { InvitationResponse2 } from '@/type'

export const getDashboardInvitations = async () => {
  try {
    const response = await api.get<InvitationResponse2>(`/invitations`)
    const data = response.data

    return data
  } catch (error) {
    return null
  }
}
