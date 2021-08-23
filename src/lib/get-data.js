export const getData = async (path) => await fetch(`https://fisdascms.herokuapp.com/api/${path}`)
  .then(response => response.json())
  .catch(error => error.message)
