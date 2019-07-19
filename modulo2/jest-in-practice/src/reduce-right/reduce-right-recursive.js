import mainReduceRecursive from './main-reduce-recursive'
import reverseRecursive from '../reverse/reverse-recursive'

const reduceRightRecursive = (arr, ...params) => mainReduceRecursive(reverseRecursive(arr), ...params)

export default reduceRightRecursive