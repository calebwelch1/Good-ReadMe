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
    { type: "input", message: "Enter a description:", name: "description" },
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
    { type: "input", message: "Licences:", name: "licence" },
    { type: "input", message: "Contributors:", name: "contributors" },
    { type: "input", message: "Tests:", name: "test" },
    { type: "input", message: "Questions:", name: "questions" },
  ])
  .then((answers) => {
    newReadMe = [
      `Title: ${answers.title}\n`,
      `Description: ${answers.description}\n`,
      `Table of Contents: ${answers.table}\n`,
      `Installation: ${answers.install}\n`,
      `Usage: ${answers.usage}\n`,
      `Licences: ${answers.licence}\n`,
      `Contributors: ${answers.contributors}\n`,
      `Tests: ${answers.test}\n`,
      `Questions: ${answers.questions}\n`,
    ];
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
    }
  });
