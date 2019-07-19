const find = (arr = [], func = (item) => item) => {
    return (function findInternal(arrayInternal, counter) {
        if (!Array.isArray(arr)) {
            throw new TypeError('The first parameter must be an array')
        }

        if (typeof func !== 'function') {
            throw new TypeError('The second parameter must be a function')
        }

        const [head, ...tail] = arrayInternal

        return arrayInternal.length === 0 ? undefined :
            (func(head, counter, arr) ? head :
                findInternal(tail, counter + 1))


    })(arr, 0)
}

export default find