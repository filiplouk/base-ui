import { create } from "zustand";

const useAlertStore = create<AlertState>((set) => ({
  message: "",
  variation: "error",
  setAlert: (message: string, variation: AlertState["variation"]) =>
    set(() => ({ message, variation })),
}));

type AlertState = {
  message: string;
  variation: "error" | "success" | "info";
  setAlert: (message: string, variation: AlertState["variation"]) => void;
};

export default useAlertStore;
