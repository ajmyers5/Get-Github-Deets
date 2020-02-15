const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const generateHTML = require("./generateHTML");

const questions = [
          {
            type: "input",
            name: "color",
            message: "What is your favorite color?"
          },
          {
            type: "input",
            name: "userName",
            message: "What is your Github username?"
          },
       ]

function promptUser() {
    return inquirer.prompt(questions)
}

// fs.writeFile doc: fs.writeFile('message.txt', 'Hello Node.js', 'utf8', callback);
// function writeToFile(fileName, data, res) {
//     // use as data param in the fs.writefile
//     fs.writeFile(fileName, generateHTML(res, data))

    
// }

function init() {
    promptUser().then(function(dataReturnedFromPrompt){
        requestAPI(dataReturnedFromPrompt)
    })
}

function requestAPI(data){
    console.log(data)
    // create the api url with appropriate information
    const queryUrl = `https://api.github.com/users/${data.userName}`;

    axios.get(queryUrl).then(function(res) {
      console.log(res)
      console.log(res.data.name)
      console.log(res.data.location)
      console.log(res.data.bio)
      console.log(res.data.public_repos)

      generateHTML(res, color)
        //file name is user name or something
      //   let fileName = res.x.y.z + ".html"
      // writeToFile(fileName, res, data)
      });

}

init()