// Necessary components
// GitHub repository with a unique name and a README describing project.

// The generated README includes the following sections:

// Title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions

// The generated README includes 1 badge that's specific to the repository.

// Repo MUST include package.json with required dependencies. (Hint: Run npm init when you first setup the project before installing any dependencies.)

// Include screenshots (or a video) of typical user flows through your application. This includes views of the prompts and the responses after their selection.

//add github api for profile pic and link to repo
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    // questions array
    {
      type: "input",
      message: "What is the title of your Project?:",
      name: "title",
    },
    {
      type: "input",
      message: "Enter a description for your project:",
      name: "description",
    },
    { type: "input", message: "Enter a table of contents:", name: "table" },
    {
      type: "input",
      message: "How does a user install your project?:",
      name: "install",
    },
    {
      type: "input",
      message: "What is the usage of your project?:",
      name: "usage",
    },
    {
      type: "list",
      message: "Would you like to add images?",
      choices: ["Yes", new inquirer.Separator(), "No"],
      name: "imgPrompt",
    },
    // test yes and no
    {
      type: "input",
      message: "Enter a path to the images.(Seperate img paths by comma)",
      name: "imgPath",
      default: ",",
      when: function (answers) {
        return answers.imgPrompt === "Yes";
      },
    },
    //test if adding image works x
    // test if add another image works
    // {
    //   type: "list",
    //   message: "Would you like to add more image?",
    //   choices: ["Yes", new inquirer.Separator(), "No"],
    //   name: "imgAgain",
    //   when: function (answers) {
    //     return answers.imgPath;
    //   },
    // },
    { type: "input", message: "Licenses:", name: "license" },
    { type: "input", message: "Contributors:", name: "contributors" },
    { type: "input", message: "Tests:", name: "test" },
    {
      type: "input",
      message: "Who to contact for Questions and how?:",
      name: "questions",
    },
    {
      type: "input",
      message: "What is your github username?",
      name: "gitHubUserName",
    },
    // cant get naming to work
    // {
    //   type: "input",
    //   message: "What would you like to name your readme? (include file type )",
    //   name: "readmeName",
    //   default: "README.md",
    // },
  ])
  .then((answers) => {
    // if I remove the commas it doesn't work but if I leave them in the readme prints with weird commmas before all of them.
    function readMeImg() {
      if (answers.imgPath != undefined) {
        imgArr = answers.imgPath.split(",");
        imgArr.forEach((img) => {
          addGitImg = `![](${img})`;
          newReadMe.splice(5, 0, addGitImg);
        });
      }
    }
    let avatar = `![](github.com/${answers.gitHubUserName}.png)`;
    // maybe it will work if I push it on to the readme
    function addGit() {
      try {
        let email = `Email: ${answers.gitHubUserName}@users.noreply.github.com\n`;

        let avatarGit = `Avatar: ${avatar}\n`;
        newReadMe.push(email, avatar);
        // console.log("newReadMe after push", newReadMe);
      } catch (error) {
        console.log(error);
      }
    }
    //ask for help in the morning. won't work when I add the github part
    // add a badge, make a video and you're done!
    newReadMe = [
      `Title: ${answers.title}\n`,
      `Description: ${answers.description}\n`,
      `Table of Contents: ${answers.table}\n`,
      `Installation: ${answers.install}\n`,
      `Usage: ${answers.usage}\n`,
      `Licenses: ${answers.license}\n`,
      `Contributors: ${answers.contributors}\n`,
      `Tests: ${answers.test}\n`,
      `Questions: ${answers.questions}\n`,
    ];
    readMeImg();
    addGit();
    // github call
    // let user = "calebwelch1";
    // let request = new XMLHttpRequest();
    // request.open("GET", `https://api.github.com/users/${user}`);
    // request.send();
    // request.onload = () => {
    //   console.log(request);
    //   if (request.status === 200) {
    //     console.log(JSON.parse(request.response));
    //   } else {
    //     console.log(`error ${request.status} ${request.statusText}`);
    //   }
    // };
    // doesn't work let's try xml
    // let user = "calebwelch1";
    // $.get(`https://api.github.com/users/${user}`).then((response) => {
    //   console.log(response);
    // });
    // console.log(newReadMe);
    // images come back as an array now we can use this array to dump images
    // console.log(answers.imgPath.split(","));

    fs.writeFile("ReadMe.md", newReadMe, (error) => {
      if (error) {
        console.error(error);
      }
      console.log("File saved successfully!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
      console.log("something else went wrong");
      console.error(error);
    }
  });
