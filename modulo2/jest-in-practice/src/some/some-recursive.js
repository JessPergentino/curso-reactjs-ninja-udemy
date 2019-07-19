const some = (arr = [], func = (item) => item) => {
    return (function someInternal(arrayInternal, counter) {
        if (!Array.isArray(arr)) {
            throw new TypeError('The first parameter must be an array')
        }

        if (typeof func !== 'function') {
            throw new TypeError('The second parameter must be a function')
        }

        const [head, ...tail] = arrayInternal

        return arrayInternal.length === 0 ? false :
            (func(head, counter, arr) ? true :
                (someInternal(tail, counter + 1)))
    })(arr, 0)
}

export default some