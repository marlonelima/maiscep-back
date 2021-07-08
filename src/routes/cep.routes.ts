import { Router } from 'express'

import { CepController } from '../controllers/cep.controller'

const cepRoutes = Router()

cepRoutes.get(
  '/:_cep',
  CepController.cepFromCache,
  CepController.cepFromDatabase,
  CepController.getNewCep
)

export { cepRoutes }
