export const onPrev = (
  i: number, 
  array: any[] |  undefined, 
  setter: (i: number) => void,
) => {
  if(i === 0 && Array.isArray(array)) {
    setter(array.length - 1)
  } else {
    setter(i - 1)
  }
};

export const onNext = (
  i: number, 
  array: any[] | undefined, 
  setter: (i: number) => void,
) => {
  if(Array.isArray(array) && i === array.length - 1) {
    setter(0)
  } else {
    setter(i + 1)
  }
};