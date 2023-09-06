const min = (value, length, errorMsg) => {
  if(parseInt(length) > value.length) {
    return errorMsg
  }
}

export default min