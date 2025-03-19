export class ExitPromptError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ExitPromptError'
  }
}
