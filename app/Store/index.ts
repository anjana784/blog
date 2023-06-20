import { create } from "zustand";

interface NavigationState {
  // current section name
  currentSectionName: string;
  // | "header"
  // | "home"
  // | "about"
  // | "resume"
  // | "project"
  // | "contact"
  // | "blog"
  // | "footer";
  setCurrentSectionName: (sectionName: string) => void;

  // sections and set sections
  sections: HTMLDivElement[];
  setSections: (section: HTMLDivElement) => void;

  // header showing and set header showing
  headerShowing: boolean;
  setHeaderShowing: (showing: boolean) => void;
}

const useStore = create<NavigationState>((set) => ({
  // current section name and set current section name
  currentSectionName: "header",
  setCurrentSectionName: (sectionName: string) =>
    set((state) => ({ ...state, currentSectionName: sectionName })),

  // header showing and set header showing
  headerShowing: true,
  setHeaderShowing: (showing: boolean) =>
    set((state) => ({ ...state, headerShowing: showing })),

  // sections and set sections
  sections: [],
  setSections: (section: HTMLDivElement) =>
    set((state) => ({
      ...state,
      sections: [...state.sections, section],
    })),
}));

export default useStore;
