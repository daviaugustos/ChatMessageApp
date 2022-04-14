import { AxiosResponse } from 'axios'

import Service from '~/services/Service'
import { IMessage } from '~/@types/entities/MessageEntity'

export const getMessages = async () => {
  try {
    const response: AxiosResponse<IMessage[]> = await Service.get(
      '/messages?page=2&limit=10',
    )
    return response.data
  } catch (error) {
    console.log(error)
    return []
  }
}
