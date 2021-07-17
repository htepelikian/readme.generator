// create license badge
function renderLicenseBadge(license) {
    if (license === 'MIT'){
      return '[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)'
    }
    else if (license === "GPL-3.0"){
      return '[![License](https://img.shields.io/badge/license-GPL--3.0-brightgreen)](https://opensource.org/licenses/GPL-3.0)'
    }
    else if (license === "MPL-2.0"){
      return '[![License](https://img.shields.io/badge/license-MPL--2.0-orange)](https://opensource.org/licenses/MPL-2.0)'
    }
    else if (license === "Apache-2.0"){
      return '[![License](https://img.shields.io/badge/license-Apache--2.0-red)](https://opensource.org/licenses/Apache-2.0)'
    }
    else if (license === "BSD-3-Clause"){
      return '[![License](https://img.shields.io/badge/license-BSD--3--Clause-blueviolet)](https://opensource.org/licenses/BSD-3-Clause)'
    }
    else if (license === "None") {
      return ''
    }
  }
  
  // render license link
  function renderLicenseLink(license) {
    if (license === 'MIT') {
      return '[MIT](https://opensource.org/licenses/MIT)'
    }
    else if(license === 'GPL-3.0'){
      return '[GNU General Public License v3](https://opensource.org/licenses/GPL-3.0)'
    }
    else if(license === 'MPL-2.0'){
      return '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)'
    }
    else if(license === 'Apache-2.0'){
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)'
    }
    else if(license === 'BSD-3-Clause'){
      return '[3-Clause BSD License](https://opensource.org/licenses/BSD-3-Clause)'
    }
    else if (license === 'None'){
      return ''
    }
  }
  
  
  //generate markdown for readme.md
  function generateMarkdown(data) {
  
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
    ## Description 
    
    ${data.description}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [License](#license)
    * [Testing](#testing)
    * [Questions](#questions)
    
    
    ## Installation
    
    ${data.install}
    ## Usage 
    
    ${data.usage}
    
    ## Contributing
    
    * **${data.credits}**
    
    
    ## License
    
    ${renderLicenseLink(data.license)}
    
    
    ---
    
    
    ## Testing
    
    ${data.test}
    ## Questions
    
    - [Link to Github](https://github.com/${data.username})
    or alternatively you can contact me with questions using the email listed below
    Email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;
