const inquirer = require("inquirer");
var fs = require('fs'),
    convertFactory = require('electron-html-to');
const util = require("util");
const axios = require("axios");
const generateHTML = require("./generateHTML");
const writeFileAsync = util.promisify(fs.writeFile)

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



// fs.writeFile doc: fs.writeFile('message.txt', 'Hello Node.js', 'utf8', callback);
// function writeToFile(fileName, data, res) {
//     // use as data param in the fs.writefile
//     fs.writeFile(fileName, generateHTML(res, data))

    
// }

function init() {
  inquirer.prompt(questions).then(function(dataReturnedFromPrompt){
        requestAPI(dataReturnedFromPrompt)
        // console.log(dataReturnedFromPrompt.color)
    })
}

function requestAPI(data){
    console.log(data)
    // create the api url with appropriate information
    const queryUrl = `https://api.github.com/users/${data.userName}`;

    axios.get(queryUrl).then(function(res) {
      console.log(res)
      // console.log(res.data.name)
      // console.log(res.data.location)
      // console.log(res.data.bio)
      // console.log(res.data.public_repos)
      // console.log(res.data.avatar_url)
      // console.log('this', data.color)


      fs.writeFile(`${data.userName}.html`, generateHTML(res, data), function(){
        console.log("success")
      })
});
}
init()

// CREATE PDF...??
// var fs = require('fs'),
//     convertFactory = require('electron-html-to');
// var conversion = convertFactory({
//   converterPath: convertFactory.converters.PDF
// });
// conversion({ html: '<h1>Hello World</h1>' }, function(err, result) {
//   if (err) {
//     return console.error(err);
//   }


            //file name is user name or something
            //   let fileName = res.x.y.z + ".html"
            // writeToFile(fileName, res, data)

//IS NOT WRITING HTML
                  //      .then(function(data) {
                  //   const html = generateHTML(data);

                  //   return writeFileAsync("index.html", html);
                  // })
                  // .then(function() {
                  //   console.log("Successfully wrote to index.html");
                  // })
                  // .catch(function(err) {
                  //   console.log(err);
                      
                  //     });


// var conversion = convertFactory({
//     converterPath: convertFactory.converters.PDF
//   });
//   conversion({ html: '<h1>Hello World</h1>' }, function(err, result) {
//     if (err) {
//       return console.error(err);
//     }




//WROTE HTML BUT HAD UNDEFINED
            // .then(function(data) {
            //   const html = generateHTML(data);

            //   return writeFileAsync("index.html", html);
            // })
            // .then(function() {
            //   console.log("Successfully wrote to index.html");
            // })
            // .catch(function(err) {
            //   console.log(err);
            // });