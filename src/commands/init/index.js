import { injectProjectSpecifics } from '../../utils/fileUtils.js'
import runWizard from './wizard.js'
import { ExitPromptError } from '../../utils/errors/ExitPromptError.js'
import { cloneTemplate } from './utils.js'
import instructions from './instructions.js'
import { Log } from '../../utils/logUtils.js'

const log = new Log()

export default async function initCommand() {
  log.start('Starting initialization!')

  try {
    const { template, projectName, projectDescription } = await runWizard()

    await cloneTemplate(template, projectName)
    await injectProjectSpecifics(projectName, projectDescription)

    log.end('Project setup complete! 🎉')
    log.instructions(instructions)

    process.exit(0)
  } catch (error) {
    if (error.name === ExitPromptError.name) {
      log.exit()
    } else {
      log.error(error)
    }
    process.exit(1)
  }
}
