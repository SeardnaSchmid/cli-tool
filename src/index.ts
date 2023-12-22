#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
    .version('1.0.0')
    .description('My CLI Tool')
    .requiredOption('-n, --name <name>', 'Specify a name')
    .action((options) => {
        const name = options.name || 'DefaultName';
        console.log(`Hello, ${name}!`);
    });

program.parse(process.argv);
