import chalk from 'chalk'

export default (type, name) => {
  const typeCapitalized = String(type).toUpperCase()
  return `
    You have now created a(n) ${chalk.blue(typeCapitalized)} named ${chalk.blue(name)}.
    Check in your project folder for the new ${chalk.blue(typeCapitalized)} boilerplate and start coding! 🚀
      `
}
