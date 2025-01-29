import fs from 'fs/promises'

const a =await fs.readFile("D:\\movie\\webseries\\Farzi\\Farzi (2023) 720p HEVC HDRip Hindi S01 E04-E08 Complete Web Series x265 AAC ESubs.Mkv")
const b =await fs.readFile("D:\\movie\\webseries\\Farzi\\Farzi (2023) 720p HEVC HDRip Hindi S01 E04-E08 Complete Web Series x265 AAC ESubs.Mkv")
const c =await fs.readFile("D:\\movie\\webseries\\Farzi\\Farzi (2023) 720p HEVC HDRip Hindi S01 E04-E08 Complete Web Series x265 AAC ESubs.Mkv")

console.log(a.byteLength)