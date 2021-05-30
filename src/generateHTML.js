const { restoreDefaultPrompts } = require("inquirer");



function generateHTML(answers) {
  // const answerV = answers.map(answer => {

    
      const generated = answers.map(answer => {
    if (answer.role === "manager") {
      console.log("herooo");

       return `
       <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
    <title>Document</title>
  </head>
       <body>
  <div class="container">
  <div class="row align-items-start">
    <div class="col">
      <h3>${answer.role}</h3>
      <h3>${answer.managerP}</h3>
      <p>${answer.name}</p>
      <p>${answer.ID}</p>
      <p>${answer.Email}</p>
    </div>
</div>
</div>
  </body>
  </html>`
    
} else if (answer.role === "engineer") {

  return `
  <div class="container">
  <div class="row align-items-start">
    <div class="col">
      <h3>${answer.role}</h3>
      <h3>${answer.Github}</h3>
      <p>${answer.name}</p>
      <p>${answer.ID}</p>
      <p>${answer.Email}</p>
    </div>
</div>
</div>`
} else if (answer.role === "intern") {

  return `
  <div class="container">
  <div class="row align-items-start">
    <div class="col">
      <h3>${answer.role}</h3>
      <h3>${answer.school}</h3>
      <p>${answer.name}</p>
      <p>${answer.ID}</p>
      <p>${answer.Email}</p>
    </div>
</div>
</div>`
} else if (answer.role === "employee") {

  return `
  <div class="container">
  <div class="row align-items-start">
    <div class="col">
      <h3>${answer.role}</h3>
      <p>${answer.name}</p>
      <p>${answer.ID}</p>
      <p>${answer.Email}</p>
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