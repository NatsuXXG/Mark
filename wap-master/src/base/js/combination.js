// 递归函数实现
export function choose (arr, size) {
  let allResult = []
  let newC = function (arr, size, result) {
    let arrLen = arr.length
    if (size > arrLen) {
      return
    }
    if (size === arrLen) {
      allResult.push([].concat(result, arr))
    } else {
      for (var i = 0; i < arrLen; i++) {
        let newResult = [].concat(result)
        newResult.push(arr[i])
        if (size === 1) {
          allResult.push(newResult)
        } else {
          let newArr = [].concat(arr)
          newArr.splice(0, i + 1)
          newC(newArr, size - 1, newResult)
        }
      }
    }
  }
  newC(arr, size, [])
  return allResult
}
