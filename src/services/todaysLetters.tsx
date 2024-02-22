const goodEndPoint = "https://www.boredapi.com/api/activity";
const badEndPoint = "https://httpstat.us/404";

export async function getTodaysLetters() {
  // const response = await fetch(goodEndPoint);
  // if (!response.ok) {
  //   throw new Error(`Error has occured ${response.status}`);
  // }
  // const activity = await response.json();
  // return activity;

  const letters = { letters: "nictey", coreLetter: "a" };
  return letters;
}
