import { create } from "zustand";

interface NavigationState {
  currentSectionElement?: HTMLDivElement;
  currentSectionName:
    | "header"
    | "home"
    | "about"
    | "resume"
    | "project"
    | "contact"
    | "blog"
    | "footer";
  sections: HTMLDivElement[];
  setSections: (section: HTMLDivElement) => void;
}

const useStore = create<NavigationState>((set) => ({
  currentSectionName: "header",
  sections: [],
  setSections: (section: HTMLDivElement) =>
    set((state) => ({
      ...state,
      sections: [...state.sections, section],
    })),
}));

export default useStore;
