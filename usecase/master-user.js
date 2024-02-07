const { masterUserRepository } = require('../repository')
const masterUserUseCase = {
  getAllUser: async () => {
    const { isError, data, error } = await masterUserRepository.getAllUser()
    if (isError) {
      // do something if error
    } else {
      // do if not error
    }
    return { isError, data, error }
  },
  getUserByUserName: async (username) => {
    const { isError, data, error } =
      await masterUserRepository.getUserByUserName(username)
    if (isError) {
      // do something if error
    } else {
      // do if not error
    }
    return { isError, data, error }
  },
  getRaihan: async () => {
    const { isError, data, error } = await masterUserRepository.getRaihan()
    if (isError) {
      // do something if error
    } else {
      // do if not error
    }
    return { isError, data, error }
  },
}
module.exports = masterUserUseCase
