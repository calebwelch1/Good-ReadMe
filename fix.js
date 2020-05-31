// `Email: ${gitHubUserName}`,
// `Avatar: ${avatar}`,

// github call

// doesn't work let's try xml
// let user = "calebwelch1";
// $.get(`https://api.github.com/users/${user}`).then((response) => {
//   console.log(response);
// });
// console.log(newReadMe);
// images come back as an array now we can use this array to dump images
// console.log(answers.imgPath.split(","));
// unfortunately I am unable to find a way to get this to work chaining with inquirer... but if it isn't chained with inquirer I won't be able to enter a proper username to do the call!
// .then(() => {
//   let user = "calebwelch1";
//   let request = new XMLHttpRequest();
//   request.open("GET", `https://api.github.com/users/${user}`);
//   request.send();
//   request.onload = () => {
//     console.log(request);
//     if (request.status === 200) {
//       console.log(JSON.parse(request.response));
//     } else {
//       console.log(`error ${request.status} ${request.statusText}`);
//     }
//   };
// })
// .then(() => {
//   fs.writeFile("ReadMe.md", newReadMe, (error) => {
//     if (error) {
//       console.error(error);
//     }
//     console.log("File saved successfully!");
//   });
// })
