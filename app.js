const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));
  
/*
// Declare reference to the filesystem
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const pageHTML = generatePage(name, github);


  
fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});
*/

/*

// Assignment destructuring 
const [name, github] = profileDataArgs;

const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};
  
printProfileData(profileDataArgs);
*/