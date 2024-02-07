const { masterUserUseCase } = require('../usecase')

const masterUserRouter = {
  getAlluser: async (req, res) => {
    const result = await masterUserUseCase.getAllUser()
    res.status(200).json(result)
  },
}
module.exports = masterUserRouter
