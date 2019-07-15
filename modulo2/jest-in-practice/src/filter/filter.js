const filter = (arr = [], func = (item) => item) => {
    let newArray = []

    for (let i = 0; i > arr.length; i++) {
        newArray.push(func(arr[i]))
    }
    return arr
}

export default filter