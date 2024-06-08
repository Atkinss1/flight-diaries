import express from 'express';
import diaryFunction from '../services/diaryService';
import diaryService from '../services/diaryService';
import toNewDiaryEntry from '../utils';
const router = express.Router();

router.route('/')
  .get((_req, res) => {
    res.send(diaryFunction.getNonSensitiveEntries());
  })
  .post((req, res) => {
    try {
      const newDiaryEntry = toNewDiaryEntry(req.body);
      const addedEntry = diaryService.addDiary(newDiaryEntry);
      res.json(addedEntry);
    } catch (error: unknown) {
      
      let errorMessage = 'Something went wrong.';
      
      if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
      }
      res.status(400).send(errorMessage);
     }
    
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