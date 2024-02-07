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
}
module.exports = masterUserUseCase
