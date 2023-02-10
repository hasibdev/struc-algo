export type Peak<T, K extends keyof T> = {
  readonly [P in K]: T[P]
}

export interface Validatable {
  // value: string | number
  required?: boolean
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
}
