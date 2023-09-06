const isPhone = (value, errorMsg) => {
  if(!value.match(/^09\d{8}$/)) {
    return errorMsg
  }
}

export default isPhone