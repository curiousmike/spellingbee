export function getFormattedTodaysDate() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return `${month}-${day}-${year}`;
}

export const generateWordPermutations = (rootWord: string): any => {
  return null;
};
