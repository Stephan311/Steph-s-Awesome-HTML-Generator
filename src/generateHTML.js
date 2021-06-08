const { restoreDefaultPrompts } = require("inquirer");



function generateHTML(answers) {
  // const answerV = answers.map(answer => {

    
      const generated = answers.map(answer => {
    if (answer.role === "Manager") {
      console.log("herooo");

       return `
       <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
    <title>Document</title>
  </head>
       <body>
  <div  style="background-color:cornflowerblue; border-radius: 20px; margin-top: 20px; color: white;" class="container">
  <div class="row">
    <div class="col">
      <h3  style="font-size: 50px;" >${answer.role}</h3>
      <h3> Office Number: ${answer.managerP}</h3>
      <p>Name: ${answer.name}</p>
      <p> ID: ${answer.ID}</p>
      <p> Email: ${answer.Email}</p>
    </div>
</div>
</div>
  </body>
  </html>`
    
} else if (answer.role === "Engineer") {

  return `
  <div style="background-color:cornflowerblue; border-radius: 20px; margin-top: 20px; color: white;" class="container">
  <div class="row">
    <div class="col">
      <h3  style="font-size: 50px;" >${answer.role}</h3>
      <h3>Github: ${answer.Github}</h3>
      <p>Name: ${answer.name}</p>
      <p>ID: ${answer.ID}</p>
      <p>Email: ${answer.Email}</p>
    </div>
</div>
</div>`
} else if (answer.role === "Intern") {

  return `
  <div style="background-color:cornflowerblue; border-radius: 20px; margin-top: 20px; color: white;" class="container">
  <div class="row">
    <div class="col">
      <h3  style="font-size: 50px;" >${answer.role}</h3>
      <h3>School: ${answer.school}</h3>
      <p>Name: ${answer.name}</p>
      <p>ID: ${answer.ID}</p>
      <p>Email: ${answer.Email}</p>
    </div>
</div>
</div>`
} else if (answer.role === "Employee") {

  return `
  <div style="background-color:cornflowerblue; border-radius: 20px; margin-top: 20px; color: white;" class="container">
  <div class="row">
    <div class="col">
      <h3  style="font-size: 50px;" >${answer.role}</h3>
      <p>Name: ${answer.name}</p>
      <p>ID: ${answer.ID}</p>
      <p>Email: ${answer.Email}</p>
    </div>
</div>
</div>`
}

})
return generated.join("");

  // });

  // return answerV;

}

// return all of the templates generated
// use a join 

module.exports = generateHTML;