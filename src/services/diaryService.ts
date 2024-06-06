import diaryData from '../../data/entries';
import { DiaryEntry, NonSensitiveDiaryEntry } from '../types';

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
 
const addDiary = () => {
  return null;
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