const map = (arr = [], func = (item) => item) => {
    return (function mapInternal(arrayInternal, counter) {
        if (!Array.isArray(arr)) {
            throw new TypeError('The first parameter must be an array')
        }
    
        if (typeof func !== 'function') {
            throw new TypeError('The second parameter must be a function')
        }
        
        const [head, ...tail] = arrayInternal

        return arrayInternal.length === 0 ? [] : [
            func(head, counter, arr),
            ...mapInternal(tail, counter + 1)
        ]
    })(arr, 0)
}

export default map