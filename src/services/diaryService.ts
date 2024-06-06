import diaryData from '../../data/entries';
import { DiaryEntry, NonSensitiveDiaryEntry, NewDiaryEntry } from '../types';

const diaries: DiaryEntry[] = diaryData;

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({ 
    id,
    date,
    weather,
    visibility,
  }));
 };
 
const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
  
  const newDiaryEntry = {
    id: Math.max(...diaries.map(diary => diary.id)) + 1,
    ...entry
  };

  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

const findById = (id: number): DiaryEntry | undefined => {
  const entries = diaries.find(diary => diary.id === id);
  return entries;
 };

export default {
  getEntries,
  getNonSensitiveEntries,
  addDiary,
  findById
};