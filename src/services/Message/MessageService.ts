import { AxiosResponse } from 'axios'

import Service from '~/services/Service'
import { IMessage } from '~/@types/entities/MessageEntity'

export const getMessages = async (currentPage: number) => {
  try {
    const response: AxiosResponse<IMessage[]> = await Service.get(
      `/messages?page=${currentPage}&limit=10`,
    )
    return response.data
  } catch (error) {
    console.log(error)
    return []
  }
}
