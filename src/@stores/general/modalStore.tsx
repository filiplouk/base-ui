import { create } from "zustand";

const useModalStore = create<ModalState>((set) => ({
  open: false,
  content: <></>,
  triggerModal: (component: React.ReactNode) =>
    set(() => ({ content: component, open: true })),
  closeModal: () => set(() => ({ open: false })),
}));

type ModalState = {
  open: boolean;
  content: React.ReactNode;
  triggerModal: (component: React.ReactNode) => void;
};
export default useModalStore;
