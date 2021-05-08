


function generateHTML(answers) {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
      <title>Document</title>
    </head>`
    const generated = answers.map(answer => (
    `<body>
    <div class="container">
    <div class="row align-items-start">
      <div class="col">
        <h3>${answer.managerP}</h3>
        <p>${answer.name}</p>
        <p>${answer.ID}</p>
        <p>${answer.Email}</p>
      </div>
  </div>
  </div>
    </body>
    </html>`
  ));
  return generated.join("");
}
//return all of the templates generated
//use a join 

module.exports = generateHTML;