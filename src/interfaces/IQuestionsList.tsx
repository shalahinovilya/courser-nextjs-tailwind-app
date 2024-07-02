export interface Picture {
  src: string
  text: string
  category: string
  next: string
}

export interface Button {
  text: string
  answer: string
  next: string
  category: string
}

interface Question {
  message: string
  pictures?: Picture[]
  buttons?: Button[]
}

export interface IQuestionsList {
  [key: string]: Question
}
