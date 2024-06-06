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
   
export default router;