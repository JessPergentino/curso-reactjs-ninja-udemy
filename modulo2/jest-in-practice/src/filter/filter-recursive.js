const filter = (arr, func) => {
    return (function filterIternal(arrayInternal, counter) {
        if (!Array.isArray(arr)) {
            throw new TypeError('The first parameter must be an array')
        }

        if (typeof func !== 'function') {
            throw new TypeError('The second parameter must be a function')
        }

        const [head, ...tail] = arrayInternal

        return arrayInternal.length === 0 ? [] :
            (func(head, counter, arr) ? [head] :
                []).concat(filterIternal(tail, counter + 1))

    })(arr, 0)
}

export default filter