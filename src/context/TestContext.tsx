import { createContext, useContext, useReducer, type ReactNode } from 'react'

export interface TestAnswers {
  resources: string[]
  directions: string[]
  stage: string
}

interface TestState {
  currentStep: number
  answers: TestAnswers
  isCompleted: boolean
}

type TestAction =
  | { type: 'SET_RESOURCES'; payload: string[] }
  | { type: 'SET_DIRECTIONS'; payload: string[] }
  | { type: 'SET_STAGE'; payload: string }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'RESET' }

const initialState: TestState = {
  currentStep: 0,
  answers: {
    resources: [],
    directions: [],
    stage: '',
  },
  isCompleted: false,
}

function testReducer(state: TestState, action: TestAction): TestState {
  switch (action.type) {
    case 'SET_RESOURCES':
      return {
        ...state,
        answers: { ...state.answers, resources: action.payload },
      }
    case 'SET_DIRECTIONS':
      return {
        ...state,
        answers: { ...state.answers, directions: action.payload },
      }
    case 'SET_STAGE':
      return {
        ...state,
        answers: { ...state.answers, stage: action.payload },
      }
    case 'NEXT_STEP':
      return {
        ...state,
        currentStep: state.currentStep + 1,
        isCompleted: state.currentStep >= 3,
      }
    case 'PREV_STEP':
      return {
        ...state,
        currentStep: Math.max(0, state.currentStep - 1),
      }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

interface TestContextType {
  state: TestState
  dispatch: React.Dispatch<TestAction>
}

const TestContext = createContext<TestContextType | null>(null)

export function TestProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(testReducer, initialState)

  return (
    <TestContext.Provider value={{ state, dispatch }}>
      {children}
    </TestContext.Provider>
  )
}

export function useTest() {
  const context = useContext(TestContext)
  if (!context) {
    throw new Error('useTest must be used within a TestProvider')
  }
  return context
}
