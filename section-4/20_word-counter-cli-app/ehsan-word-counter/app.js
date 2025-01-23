#!/usr/bin/env node

import fs from 'node:fs/promises';
if (process.argv.length == 2) {
    console.log('please provide filename !');
} else {
    const input = process.argv[2];
    const searchTextInput = process.argv[3];
    const content = await fs.readFile(`./${input}`, 'utf-8');
    const wordsArray = content.split(/[\W]/).filter((a) => a);
    const wordsCount = {};

    wordsArray.forEach(word => {
        if (word in wordsCount) {
            wordsCount[word] += 1;
        } else {
            wordsCount[word] = 1;
        }
    });
    if (process.argv.length == 4) {
        if (searchTextInput in wordsCount) {
            console.log({ [searchTextInput]: wordsCount[searchTextInput] })
        } else {
            console.log({ [searchTextInput]: 0 })
        }
    } else {

        console.log(wordsCount);
    }
}

