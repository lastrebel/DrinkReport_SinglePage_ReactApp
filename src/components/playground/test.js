var newArrayDataOfOjbect = {
    Object1: { id: 1, txt: 'starbucks', value: 250 },
    Object2: { id: 2, txt: 'water', value: 122 },
    Object3: { id: 3, txt: 'water', value: 30 },
    Object4: { id: 2, txt: 'juice', value: 150 }
}

function getSum() {
    var getArray = Object.values(newArrayDataOfOjbect)

    // const filterArr = getArray.filter(i => i.length > 0)
    //const filterArr = getArray[1].filter(i)
    // const filterArr = getArray.map(a => a.value).reduce(((sum, x) => sum += x), 8)
    const filterArr = getArray.map(a => a.value)


    let sum = 0
    for (let i = 0; i < filterArr.length; i++) {
        sum += filterArr[i]
    }

    return console.log('initial array: ', getArray, 'filterred array: ', filterArr, 'sum of values: ', sum)
}
getSum()