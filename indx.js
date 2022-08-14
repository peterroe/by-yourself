function getPostOrderOfTree(preStr, midStr, cache = "") {
  if (preStr.length === 0) return ""
  const root = preStr[0]
  const midRight = midStr.slice(midStr.indexOf(root) + 1)
  const midLeft = midStr.slice(0, midStr.indexOf(root))

  const preLeft = preStr.slice(1, midLeft.length + 1)
  const preRight = preStr.slice(midLeft.length + 1)
  let res = ""
  res += getPostOrderOfTree(preLeft, midLeft, cache)
  res += getPostOrderOfTree(preRight, midRight, cache)
  res += root
  return res
}

console.log(getPostOrderOfTree("ACDEFHGB", "DECAHFBG"))

