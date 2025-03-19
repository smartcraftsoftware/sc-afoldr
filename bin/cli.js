#!/usr/bin/env node
import { program } from 'commander'
import initCommand from '../src/commands/init/index.js'
import createCommand from '../src/commands/create/index.js'

program
  .name('scafoldr')
  .description('A CLI tool to scaffold SmartCraft frontend projects with boilerplate code')
  .version('1.0.0')

program.command('init').description('Initialize a new project').action(initCommand)
program.command('create').description('Create a component in your project').action(createCommand)

program.parse(process.argv)
