import { create } from 'zustand';
import {uzbek} from "../data"
import { rus } from '../data';

const useStore = create((set) => ({
    language: uzbek,
    changeLanguage: () => set((state) => ({ language: state.language === uzbek ? rus : uzbek})),
}));

export default useStore;