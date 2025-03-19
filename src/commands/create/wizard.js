import inquirer from 'inquirer'
import { ExitPromptError } from '../../utils/errors/ExitPromptError.js'

export default async function runWizard() {
  const questions = [
    {
      type: 'list',
      name: 'type',
      message: 'Which component would you like to create?',
      choices: ['module', 'api'],
      default: 'module',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What would you like to name your component?',
      default: 'MyComponent',
      //   validate: validateProjectNonExistance, //validate if the component already exists
    },
  ]

  try {
    const answers = await inquirer.prompt(questions)
    return answers
  } catch (error) {
    if (error.isTtyError) {
      throw new ExitPromptError('Prompt was closed by the user.')
    } else {
      throw error
    }
  }
}
