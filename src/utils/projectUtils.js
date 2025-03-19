import fs from 'fs-extra'
import path from 'path'

export async function validateProjectNonExistance(projectName, isBoolResponse = false) {
  const projectPath = path.join(process.cwd(), projectName)
  if (fs.existsSync(projectPath)) {
    if (isBoolResponse) {
      return `A project with the name ${projectName} already exists in this directory.`;
    } else {
      return false;
    }
  } else {
    return true;
  }
}
