import express from 'express';
import diaryFunction from '../services/diaryService';
const router = express.Router();

router.route('/')
  .get((_req, res) => {
    res.send(diaryFunction.getNonSensitiveEntries());
  })
  .post((_req, res) => {
    res.send('Saving a diary!');
  });

router.route('/:id')
  .get((req, res) => {
    const diary = diaryFunction.findById(Number(req.params.id));
    
    if (diary) {
      res.send(diary);
    } else {
      res.sendStatus(400);
    }
   });
   
export default router;