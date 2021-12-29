function filtraPares(arr) {
  return arr.filter(callback)
}

function callback(item) {
  return item % 2 === 0
}

console.log(filtraPares([1, 2, 3, 4, 10, 200, 528, 199, 33, 13, 9]))
