import chalk from "chalk";

export default `
    To get started, 
    
    - Create a ${chalk.blue('.env')} file at the root of the project folder based on the ${chalk.blue('.env.example')} file
    - Populate your ${chalk.blue('.env')} file at the root of the project folder with the necessary environment variables
    - Create a Personal Access Token in Azure and add it to your local machine's user level environment variables as AZURE_DEVOPS_PAT (This step is necessarry to access the Smartcraft Package Registry)
      - Refer to this guide for more information: 
        ${chalk.magenta('https://smartcraft.atlassian.net/wiki/spaces/SE/pages/869171207/Package+Registry+Access')}
    - source your SHELL or restart your terminal if you haven't already

    Then run the following commands:
    - ${chalk.bgYellowBright.black(' yarn install ')}
    - ${chalk.bgYellowBright.black(' yarn prepare ')} (this command you run it once per developer after yarn install)
    - ${chalk.bgYellowBright.black(' yarn dev ')}

    Refer to the DOCS in here 
    
    Guidelines and folder structure: 
    ${chalk.magenta('https://smartcraft.atlassian.net/wiki/spaces/SE/pages/713818118/Frontend+Core+-+Best+Practices')}

    Happy coding! 🚀
      `
