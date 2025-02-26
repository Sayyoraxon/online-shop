import { create } from 'zustand'

const verifyStore = create((set) => ({
  openDialog: false,
  success: false,
  openFailure: () => set(() => ({ openDialog: true, success: false })),
  openSuccess: () => set(() => ({ openDialog: true, success: true })),
  close: () => set(() => ({ openDialog: false}))
}))

export default verifyStore