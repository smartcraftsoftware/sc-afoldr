import { ExitPromptError } from '../../utils/errors/ExitPromptError.js'
import runWizard from './wizard.js'
import { Log } from '../../utils/logUtils.js'
import instructions from './instructions.js'

const log = new Log()

export default async function createCommand() {
  try {
    const { type, name } = await runWizard()

    log.start(`Creating a ${type} named ${name}`)
    log.instructions(instructions(type, name))

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
