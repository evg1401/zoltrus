import { isEmpty, isEmptyArray, isNullOrUndefined } from './helpers'

// 👉 Required Validator
export const requiredValidator = (value: unknown) => {
  if (isNullOrUndefined(value) || isEmptyArray(value) || value === false) {
    return 'Поле обязательно для заполнения'
  }

  return !!String(value).trim().length || 'Поле обязательно для заполнения'
}

// 👉 Email Validator
export const emailValidator = (value: unknown) => {
  if (isEmpty(value)) {
    return true
  }

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (Array.isArray(value)) {
    return value.every(val => re.test(String(val))) || 'Не валидный адрес email'
  }

  return re.test(String(value)) || 'Не валидный адрес email'
}

// 👉 Password Validator
export const passwordValidator = (password: string) => {
  const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/

  const validPassword = regExp.test(password)

  return validPassword || 'Field must contain at least one uppercase, lowercase, special character and digit with min 8 chars'
}

// 👉 Confirm Password Validator
export const confirmedValidator = (value: string, target: string) =>

  value === target || 'The Confirm Password field confirmation does not match'

// 👉 Between Validator
export const betweenValidator = (value: unknown, min: number, max: number) => {
  const valueAsNumber = Number(value)

  return (Number(min) <= valueAsNumber && Number(max) >= valueAsNumber) || `Enter number between ${min} and ${max}`
}

// 👉 Integer Validator
export const integerValidator = (value: unknown) => {
  if (isEmpty(value)) {
    return true
  }

  if (Array.isArray(value)) {
    return value.every(val => /^-?[0-9]+$/.test(String(val))) || 'Поле может содержать только целочисленное значение'
  }

  return /^-?[0-9]+$/.test(String(value)) || 'Поле может содержать только целочисленное значение'
}

// 👉 Regex Validator
export const regexValidator = (value: unknown, regex: RegExp | string): string | boolean => {
  if (isEmpty(value)) {
    return true
  }

  let regeX = regex
  if (typeof regeX === 'string') {
    regeX = new RegExp(regeX)
  }

  if (Array.isArray(value)) {
    return value.every(val => regexValidator(val, regeX))
  }

  return regeX.test(String(value)) || 'The Regex field format is invalid'
}

// 👉 Alpha Validator
export const alphaValidator = (value: unknown) => {
  if (isEmpty(value)) {
    return true
  }

  return /^[A-Z]*$/i.test(String(value)) || 'The Alpha field may only contain alphabetic characters'
}

// 👉 URL Validator
export const urlValidator = (value: unknown) => {
  if (isEmpty(value)) {
    return true
  }

  const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/

  return re.test(String(value)) || 'URL is invalid'
}

// 👉 Length Validator
export const lengthValidator = (value: unknown, length: number) => {
  if (isEmpty(value)) {
    return true
  }

  return String(value).length === length || `The Min Character field must be at least ${length} characters`
}

// 👉 Alpha-dash Validator
export const alphaDashValidator = (value: unknown) => {
  if (isEmpty(value)) {
    return true
  }

  const valueAsString = String(value)

  return /^[0-9A-Z_-]*$/i.test(valueAsString) || 'All Character are not valid'
}

export const withoutSpacesAlphaValidator = (value: unknown) => {
  if (isEmpty(value)) {
    return true
  }

  return /^[a-zA-Z-_]+$/i.test(String(value)) || 'Поле может содержать только латинские символы без пробелов, спецсимволов, кроме: - и _'
}
