import { Validatable } from "./types"
import { capitalize } from './utils'

type Rules<T> = {
  [key in keyof T]?: Validatable
}

type ValidationError = {
  field: string,
  message: string
}

export function validate<T extends { [key: string]: any }>(data: T, rules: Rules<T>) {
  const errors: ValidationError[] = []

  Object.entries(rules).forEach(([key, value]) => {
    // Required
    if (value?.required && !data[key]) {
      errors.push({
        field: key,
        message: `${capitalize(key)} is required.`,
      })
    }

    // Minimum Length
    if (value?.minLength && data[key].toString().length < value.minLength) {
      errors.push({
        field: key,
        message: `${capitalize(key)} should be ${value.minLength} character long.`,
      })
    }

    // Maximum Length
    if (value?.maxLength && data[key].toString().length > value.maxLength) {
      errors.push({
        field: key,
        message: `${capitalize(key)} should be less then ${value.maxLength} character long.`,
      })
    }

    // Minimum
    if (value?.min && data[key] < value.min) {
      errors.push({
        field: key,
        message: `${capitalize(key)} should be minimum ${value.min}`,
      })
    }

    // Maximum
    if (value?.max && data[key] > value.max) {
      errors.push({
        field: key,
        message: `${capitalize(key)} should be maximum ${value.max}`,
      })
    }

  })

  return { errors, isError: !!errors.length }
}