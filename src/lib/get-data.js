export const getData = async (path) => await fetch(`https://fisdascms-legacy.herokuapp.com/api/${path}`)
  .then(response => response.json())
  .catch(error => error.message)
