module.exports.success = () => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
      <title>Document</title>
    </head>
    <body>
      <div class="container">
        <p class="fs-1">Success!</p>
    
        <a class="btn btn btn-success" href="/comments" role="button">Go to product</a>
      </div>
    </body>
    </html>
  `;
};
