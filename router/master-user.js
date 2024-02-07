const { masterUserUseCase } = require('../usecase')

const masterUserRouter = {
  getAlluser: async (req, res) => {
    const result = await masterUserUseCase.getAllUser()
    res.status(200).json(result)
  },
  getUserByUserName: async (req, res) => {
    const username = req.params.username
    // do something
  },
}
module.exports = masterUserRouter
