const find = (arr, func) => {
    return (function findInternal(arrayInternal, counter) {
        const [head, ...tail] = arrayInternal

        return arrayInternal.length === 0 ? undefined :
            (func(head, counter, arr) ? head :
                findInternal(tail, counter + 1))


    })(arr, 0)
}

export default find

// for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i], i, arr)) {
//         return arr[i]
//     }
// }
// return undefined