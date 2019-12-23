import express from 'express'

const router = express.Router()

router.get('/all', (req, res) => {
  res.status(200).json('tests sent')
})

router.get('/:id', (req, res) => {
  res.status(200).json(`test ${req.params.id} sent`)
})

router.post('/', (req, res) => {
  res.status(201).json({data: 'test created'})
})

router.put('/:id', (req, res) => {
  res.status(201).json({data: `test ${req.params.id} updated`})
})

router.delete('/:id', (req, res) => {
  res.status(200).json({data: `test ${req.params.id} deleted`})
})

export { router as testController }


