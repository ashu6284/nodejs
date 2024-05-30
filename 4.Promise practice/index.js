// PROMISE CREATION
// const password = "2";
// const pr = new Promise((res, rej) => {
//   if (password === "2") {
//     res("Resolved");
//   }
//   rej("Rejected");
// });
// pr.then((res) => console.log(res)).catch((e) => console.log(e));

// promise definition----promise is an object representing the eventual completion of success or failure of asynchronous operation.........
const name = "ashu jaiswal";

const PR = new Promise((res, rej) => {
  if (name === "ashu") {
    res("correct name");
  } else {
    rej("incorrrect name");
  }
});
// PR.then((res) => {
//   console.log(res);
// }).catch((e) => console.log(e));
async function a ()
{
  await 
}