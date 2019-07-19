const reverse = (arr) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('The first parameter must be an array')
    }
    let newArr = []
    for (let i = arr.length; i--;)
        newArr.push(arr[i])

    return newArr
}
export default reverse