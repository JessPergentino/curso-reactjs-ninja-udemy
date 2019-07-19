const find = (arr = [], func = (item) => item) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('The first parameter must be an array')
    }

    if (typeof func !== 'function') {
        throw new TypeError('The second parameter must be a function')
    }

    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            return arr[i]
        }
    }
    return undefined
}

export default find