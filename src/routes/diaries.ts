import express from 'express';
import diaryFunction from '../services/diaryService';
import diaryService from '../services/diaryService';
import { DiaryRequest, DiaryEntry } from '../types';
const router = express.Router();

router.route('/')
  .get((_req, res) => {
    res.send(diaryFunction.getNonSensitiveEntries());
  })
  .post((req: DiaryRequest<DiaryEntry>, res) => {
    const { date, weather, visibility, comment } = req.body;
    const addedEntry = diaryService.addDiary({
      date,
      weather,
      visibility,
      comment
    });
    res.json(addedEntry);
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