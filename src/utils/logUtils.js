import chalk from 'chalk'

export class Log {
  start(message) {
    console.log(chalk.blue(message))
  }
  end(message) {
    console.log(chalk.bgGreen.black(message))
  }
  instructions(message) {
    console.log(chalk.greenBright(message))
  }
  exit() {
    console.log(chalk.yellow('Prompt was closed by the user. Exiting...'))
  }
  error(message) {
    console.error(chalk.red('An unexpected error occurred:'), message)
  }
}
