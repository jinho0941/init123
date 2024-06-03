import { api } from '@/lib/utils'
import { CardsResponse } from '@/type'

export const getCards = async ({ columnId }: { columnId: number }) => {
  try {
    const response = await api.get<CardsResponse>(`/cards?columnId=${columnId}`)
    const data = response.data

    return data
  } catch (error) {
    console.log(error)
    return null
  }
}
