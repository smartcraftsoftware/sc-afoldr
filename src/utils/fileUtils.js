import fs from 'fs-extra'
import path from 'path'
import ora from 'ora'

export async function injectProjectSpecifics(projectName, projectDescription) {
  const spinner = ora('Copying template files...').start()

  try {
    // Inject projectName into specific files
    const filesToInject = ['README.md', 'package.json'] // Add more files as needed
    for (const file of filesToInject) {
      const projectPath = path.join(process.cwd(), projectName)
      const filePath = path.join(projectPath, file)
      if (fs.existsSync(filePath)) {
        let content = await fs.readFile(filePath, 'utf-8')
        content = content.replace(/{{projectName}}/g, projectName.replace(' ', '-').toLowerCase())
        content = content.replace(/{{projectDescription}}/g, projectDescription)
        await fs.writeFile(filePath, content, 'utf-8')
      }
    }

    spinner.succeed('Specifics injected!')
  } catch (error) {
    spinner.fail('Failed to copy template files.')
    throw error
  }
}

// export async function installDependencies(projectName) {
//   const spinner = ora('Installing dependencies...').start()
//   try {
//     const projectPath = path.join(process.cwd(), projectName)
//     process.chdir(projectPath)

//     await execa('yarn', ['install'])
//     spinner.succeed('Dependencies installed successfully!')
//   } catch (error) {
//     spinner.fail('Failed to install dependencies.')
//     throw error
//   }
// }
