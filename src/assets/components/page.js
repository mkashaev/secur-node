module.exports.page = (comments, balance) => {
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
        <nav class="navbar navbar-light bg-light mb-3">
          <div class="container-fluid">
            <a class="navbar-brand">InnoExpress</a>
            <form class="d-flex">
              Balance: ${balance} $
            </form>
          </div>
        </nav>
        
        <main class="container">
          <div class="row">
            <div class="col-4">
              <img src="https://c.dns-shop.ru/thumb/st1/fit/300/300/9bdeb4938d337532923c702cd335e458/529300b03dfb37295e638b542fec984aec1d2181b0fe5ab17117e7ddc34f0610.jpg" class="img-fluid" alt="...">
            </div>
            <div class="col-8">
              <div class="card">
                <div class="card-body d-flex flex-column">
                  <p class="fs-2">20,99 $</p>
                  <p class="fs-3">Iron Galaxy GLXY 6162 blue</p>
                  <p class="lh-sm">
                    The Galaxy GLXY 6162 iron shows a high power of 1400 W, thanks to which the
                    device heats up to operating temperature in a matter of minutes.
                  </p>
                  <button type="button" class="btn btn-success mb-1">Add to cart</button>
                  <a class="btn btn btn-warning" href="/checkout" role="button">By now with one click</a>
                </div>
              </div>
            </div>
          </div>

          <p>List of comments</p>
          <form action="/comments" method="POST">
            <div class="input-group">
              <textarea name="comment" class="form-control" aria-label="With textarea" placeholder="Leave a comment"></textarea>
              <button type="submit" class="btn btn-secondary">Submit</button>
            </div>
          </form>
          
          ${comments}
        </main>
      </body>
    </html>
  `;
};
