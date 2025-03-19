import path from 'path'
import ora from 'ora'
import simpleGit from 'simple-git'
import fs from 'fs-extra'

export async function cloneTemplate(templateName, projectName) {
  const spinner = ora('Cloning template files...').start()
  try {
    const targetDir = path.join(process.cwd(), projectName)
    const git = simpleGit()

    await git.clone(`https://github.com/smartcraftsoftware/sc-afoldr-${templateName.toLowerCase()}.git`, targetDir)
    await fs.rmSync(path.join(targetDir, '.git'), { recursive: true, force: true })

    spinner.succeed('Template files cloned successfully!')
  } catch (error) {
    spinner.fail('Failed to copy template files.')
    throw error
  }
}
