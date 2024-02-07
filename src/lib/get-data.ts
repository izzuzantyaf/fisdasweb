export const getData = async (path: string) =>
  await fetch(`https://fisdascms-legacy.herokuapp.com/api/${path}`)
    .then((response) => response.json())
    .catch((error) => error.message)
