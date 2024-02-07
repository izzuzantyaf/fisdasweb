export const repeatElement = (
  ElementToBeRepeated: JSX.Element,
  repeat: number
) =>
  [...Array(repeat)].map(() => {
    return ElementToBeRepeated
  })
