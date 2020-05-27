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
    { type: "input", message: "What is the title of your Project?" },
    { type: "input", message: "Enter a description" },
    { type: "input", message: "Enter a table of contents" },
    { type: "input", message: "How does a user install your project?" },
    { type: "input", message: "What is the usage of your project?" },
    { type: "input", message: "Licences" },
    { type: "input", message: "Contributers" },
    { type: "input", message: "Tests" },
    { type: "input", message: "Questions" },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
