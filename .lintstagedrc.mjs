import path from 'path'
import pkg from './nodeUtils/test.js';
const { findRangeSpecifiedFile } = pkg
// import { findRangeSpecifiedFile } from './nodeUtils/test.js'
// const {findRangeSpecifiedFile} = require('./nodeUtils/test.js')
console.log(findRangeSpecifiedFile)
export default {
  '**/*.ts?(x)': (filenames) => {
    // console.log('开始', filenames)
    filenames?.forEach(filename => {
      console.log(process.cwd(),filename)
      // console.log(__dirname,filename)
      console.log('start:', findRangeSpecifiedFile(process.cwd(), path.join(filename, '..'), 'tsconfig.json'));
    });
    return 'test'
  }

}