import { created, serverError } from '../../utils/responses'
import { createBoard } from './service'

export const create = async (event) => {
  try {
    const auth = event.requestContext.authorizer
    const body = JSON.parse(event.body)
    const board = createBoard(auth, body)
    created(board)
  } catch (err) {
    serverError(err)
  }
}
