const mainReduce = (arr = [], func = (item) => item, initialValue) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('The first parameter must be an array')
    }

    if (typeof func !== 'function') {
        throw new TypeError('The second parameter must be a function')
    }

    let acc = initialValue
    let arrCopy = arr

    if (initialValue === undefined) {
        acc = arr[0]
        arrCopy = arr.slice(1)
    }

    for (let i = 0; i < arrCopy.length; i++) {
        acc = func(acc, arrCopy[i], i, arrCopy)
    }

    return acc
}

export default mainReduce