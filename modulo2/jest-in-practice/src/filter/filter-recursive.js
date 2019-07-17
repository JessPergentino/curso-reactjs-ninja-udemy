const filter = (arr, func) => {
    return (function filterIternal(arrayInternal, counter) {
        const [head, ...tail] = arrayInternal

        return arrayInternal.length === 0 ? [] :
            (func(head, counter, arr) ? [head] :
                []).concat(filterIternal(tail, counter + 1))

    })(arr, 0)
}

export default filter