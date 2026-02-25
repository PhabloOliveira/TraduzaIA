import { create } from 'zustand'
import {
  DynamicQuestion,
  DiagnosisConfig,
  computeDynamicQuestions,
  generateDiagnosis,
} from '../config/dynamic-questions'

export interface Answer {
  question: string
  answer: string
  stepId: number
}

export interface FunnelState {
  currentStep: number
  answers: Answer[]
  isLoading: boolean
  /** Perguntas dinâmicas calculadas após Q5 ser respondida */
  dynamicQuestions: DynamicQuestion[]
  /** Diagnóstico personalizado gerado com base em todas as respostas */
  diagnosis: DiagnosisConfig | null
  /**
   * Último step do funil (calculado dinamicamente).
   * 0: Hero | 1-5: Perguntas principais | 6…6+N-1: Perguntas dinâmicas
   * 6+N: Diagnóstico | 6+N+1: Transição | 6+N+2: VSL
   */
  maxStep: number
  userProfile: {
    industry: string
    experience: string
    goals: string
    timeAvailable: string
  }
}

export interface FunnelActions {
  setCurrentStep: (step: number) => void
  nextStep: () => void
  previousStep: () => void
  addAnswer: (answer: Answer) => void
  setLoading: (loading: boolean) => void
  updateProfile: (key: keyof FunnelState['userProfile'], value: string) => void
  /** Computa perguntas dinâmicas e diagnóstico com base nas respostas atuais */
  computeDynamicContent: () => void
  resetFunnel: () => void
}

const initialState: FunnelState = {
  currentStep: 0, // 0: Hero, 1-5: Questions principais, 6+: dinâmicas/diagnóstico/VSL
  answers: [],
  isLoading: false,
  dynamicQuestions: [],
  diagnosis: null,
  maxStep: 8, // mínimo: 5 perguntas + 0 dinâmicas + diagnóstico + transição + VSL
  userProfile: {
    industry: '',
    experience: '',
    goals: '',
    timeAvailable: '',
  },
}

export const useFunnelStore = create<FunnelState & FunnelActions>((set, get) => ({
  ...initialState,
  
  setCurrentStep: (step: number) => {
    set({ currentStep: step })
  },
  
  nextStep: () => {
    const { currentStep, maxStep } = get()
    set({ currentStep: Math.min(currentStep + 1, maxStep) })
  },
  
  previousStep: () => {
    const { currentStep } = get()
    set({ currentStep: Math.max(currentStep - 1, 0) })
  },
  
  addAnswer: (answer: Answer) => {
    const { answers } = get()
    const existingIndex = answers.findIndex(a => a.stepId === answer.stepId)
    
    if (existingIndex !== -1) {
      // Update existing answer
      const newAnswers = [...answers]
      newAnswers[existingIndex] = answer
      set({ answers: newAnswers })
    } else {
      // Add new answer
      set({ answers: [...answers, answer] })
    }
  },

  computeDynamicContent: () => {
    const { answers } = get()
    const mapped = answers
      .filter((a) => a.stepId >= 1 && a.stepId <= 5)
      .map((a) => ({ questionId: a.stepId, answer: a.answer }))

    const dynamicQuestions = computeDynamicQuestions(mapped)
    const diagnosis = generateDiagnosis(mapped)
    // 5 principais + N dinâmicas + diagnóstico + transição + VSL
    const maxStep = 5 + dynamicQuestions.length + 3

    set({ dynamicQuestions, diagnosis, maxStep })
  },
  
  setLoading: (loading: boolean) => {
    set({ isLoading: loading })
  },
  
  updateProfile: (key: keyof FunnelState['userProfile'], value: string) => {
    const { userProfile } = get()
    set({ 
      userProfile: { 
        ...userProfile, 
        [key]: value 
      } 
    })
  },
  
  resetFunnel: () => {
    set(initialState)
  }
}))