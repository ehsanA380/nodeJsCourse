import fs from 'fs'

const fd = fs.openSync('text.txt','a+');

fs.writeSync(fd,'hi');