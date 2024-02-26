const goodEndPoint = "https://www.boredapi.com/api/activity";
const badEndPoint = "https://httpstat.us/404";
const simulateBackendResponseTime = 500;
// export async function getTodaysLetters() {
//   return new Promise((resolve, reject) => {
//     if (false) {
//       resolve({ letters: "nictey", coreLetter: "a" });
//     } else {
//       reject("bad data");
//     }
//   });
// }
export async function getTodaysLetters() {
  // const response = await fetch(goodEndPoint);
  // if (!response.ok) {
  //   throw new Error(`Error has occured ${response.status}`);
  // }
  // const activity = await response.json();
  // return activity;

  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(
        () => resolve({ letters: "nictey", coreLetter: "a" }),
        simulateBackendResponseTime
      );
    } else {
      reject("bad data");
    }
  });
}
