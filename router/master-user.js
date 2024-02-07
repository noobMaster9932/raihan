const { masterUserUseCase } = require('../usecase')

const masterUserRouter = {
  getAlluser: async (req, res) => {
    const result = await masterUserUseCase.getAllUser()
    res.status(200).json(result)
  },
  getRaihan: async (req, res) => {
    const username = await masterUserUseCase.getRaihan()
    res.status(200).json(username)
  },
}
module.exports = masterUserRouter
