import express from 'express'
import { Test } from '../models/Test'

const router = express.Router()

router.get('/all', async (req, res) => {
  try {
    let tests = await Test.find()
    res.status(200).json({count: tests.length, data: tests})
  }
  catch (err) {
    res.status(err.status).json(err.message)
  }
})

router.get('/:id', async (req, res) => {
  try {
    let test = await Test.findOne({_id: req.params.id})
    if(!test) return res.status(404).json({data: test})
    res.status(200).json({data: test})
  }
  catch (err) {
    res.status(err.status).json(err.message)
  }
})

router.post('/', (req, res) => {
  let test = new Test({
    name: req.body.name
  })
  test.save((err, test) => {
    if (err) return res.status(404).json({error: err.message})
    res.status(201).json({data: test})
  })
})

router.put('/:id', async (req, res) => {
  try {
    Test.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      {new: true},
      (err, test) => {
        if (err) return res.status(500).json(err.message)
        res.status(200).json({data: test})
      })
  }
  catch (err) {
    res.status(err.status).json(err.message)
  }
})

router.delete('/:id', (req, res) => {
  try {
    Test.findByIdAndRemove(
      req.params.id,
      (err, test) => {
        if (err) return res.status(500).json(err.message)
        res.status(200).json({data: test._id})
      }
    )
  }
  catch (err) {
    res.status(err.status).json(err.message)
  }
})

export { router as testController }


