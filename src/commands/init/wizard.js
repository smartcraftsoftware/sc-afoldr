import inquirer from 'inquirer'
import { validateProjectNonExistance } from '../../utils/projectUtils.js'
import { ExitPromptError } from '../../utils/errors/ExitPromptError.js'

export default async function runWizard() {
  const questions = [
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?',
      default: 'sc-my-project',
      validate: validateProjectNonExistance,
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Write a short description of your project',
      default: 'My project description',
    },
    {
      type: 'list',
      name: 'template',
      message: 'Which template would you like to use?',
      choices: ['sc-core'],
      default: 'sc-core',
    },
    // {
    //   type: "confirm",
    //   name: "installDeps",
    //   message: "Would you like to install dependencies?",
    //   default: true,
    // },
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
