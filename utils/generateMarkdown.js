// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description 
  
  ${answers.description}
  
  
  ## Table of Contents 
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## Installation
  
  ${answers.installation}
  
  
  ## Usage 
  
  ${answers.usage}
  

  ## License
  
  ![<${answers.license}>](https://img.shields.io/badge/License-${answers.license}-blue)
  
  
  ## Contributing
  
  ${answers.contribution}
  

  ## Tests
  
  ${answers.tests}


  ## Questions  

  To view my other repositories along with my profile, you can visit my github below:

  * [My Github](https://https://github.com/${answers.github})
  
  If you have any further questions, you can reach me at the email address below:

  ${answers.email}
  `;
}

module.exports = generateMarkdown;
