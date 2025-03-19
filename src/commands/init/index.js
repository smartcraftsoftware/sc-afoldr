import chalk from 'chalk'
import { injectProjectSpecifics } from '../../utils/fileUtils.js'
import runWizard from './wizard.js'
import { ExitPromptError } from '../../utils/errors/ExitPromptError.js'
import { cloneTemplate } from './utils.js'
import instructions from './instructions.js'

export default async function initCommand() {
  console.log(chalk.blue('Welcome to the Scafoldr CLI! 🚀'))

  try {
    // Run the wizard to get user input
    const { template, projectName, projectDescription } = await runWizard()

    await cloneTemplate(template, projectName)

    // Inject projectName and projectDescription into specific files
    await injectProjectSpecifics(projectName, projectDescription)

    console.log(chalk.bgGreen.black('Project setup complete! 🎉'))

    console.log(chalk.greenBright(instructions))

    process.exit(0)
  } catch (error) {
    if (error.name === ExitPromptError.name) {
      console.log(chalk.yellow('Prompt was closed by the user. Exiting...'))
    } else {
      console.error(chalk.red('An unexpected error occurred:'), error)
    }
  }
}
