declare global {
  type FormAccountUpdateResult = {
    errorMessage?: string
    errorFields?: string[]
    fullName?: string
    schoolName?: string
    email?: string
  }
}

export {}
