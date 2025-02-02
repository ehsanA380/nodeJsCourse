import fs from 'fs'
import { Readable,Writable,Duplex,Transform,PassThrough } from 'stream';

const readStream = fs.createReadStream("D:\\movie\\Pathaan.2023.1080p.Hindi.HEVC.WEB-DL.5.1.ESub.x265-HDHub4u.Tv.mkv",{highWaterMark:1*1024*1024})
const writeStream = fs.createWriteStream('stream.mp4',{highWaterMark:1*1024*1024})

readStream.pipe(writeStream);