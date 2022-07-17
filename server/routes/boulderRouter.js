import express from 'express'

import { getBoulders,  createBoulder, deleteBoulder} from '../controllers/boulderController.js'

var router = express.Router()

router.get('/', (req, res) => {
    res.send('test')
})

router.get('/list', getBoulders)

router.post('/add', createBoulder)

router.post('/delete', deleteBoulder)

export default router