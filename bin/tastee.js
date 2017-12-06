#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const tastee_program_1 = require("./tastee-program");
const fs = require("fs");
program
    .arguments('<tastee script file>')
    .option('-i, --instructions <instruction files>', 'Custom instruction files separated with semicolons')
    .option('-c, --conf <parameter files>', 'Custom parameter files separated with semicolons')
    .option('-b, --browser <browser>', 'Browser in which to execute script (either firefox, chrome, phantomJs, ... depending on your drivers)', 'firefox')
    .option('-p, --path <path>', 'Path is path where rapport generated', './tastee-reporting')
    .action(function (file) {
    console.log('   ***   ');
    console.log('browser       : ' + program.browser);
    console.log('reporting path : ' + program.path);
    console.log('   ***   ');
    let tasteeProgram = new tastee_program_1.TasteeProgram(program);
    if (fs.lstatSync(file).isFile()) {
        tasteeProgram.runDebugMode(file);
    }
    else {
        tasteeProgram.runContinuusMode(file);
    }
})
    .parse(process.argv);
//# sourceMappingURL=/Users/luya/Workspace/tastee-npm/tastee.js.map