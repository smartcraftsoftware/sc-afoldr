import chalk from 'chalk'
import { ExitPromptError } from '../../utils/errors/ExitPromptError.js'
import runWizard from './wizard.js'

export default async function createCommand() {
  try {
    const { type, name } = await runWizard()
    //do something with the type and the name
    console.log(chalk.blue(`Creating a ${type} named ${name}`))
  } catch (error) {
    if (error.name === ExitPromptError.name) {
      console.log(chalk.yellow('Prompt was closed by the user. Exiting...'))
    } else {
      console.error(chalk.red('An unexpected error occurred:'), error)
    }
  }
}
