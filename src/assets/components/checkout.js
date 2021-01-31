module.exports.checkout = (balance) => {
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
        <p class="fs-3">Ordering</p>
        <div class="row">
          <div class="col-9">
            <div class="card p-3">
              <p class="fs-5">Address</p>
              <form action="/checkout" method="POST">
                <div class="mb-3">
                  <label for="city" class="form-label">Select city</label>
                  <select id="city" name="city" class="form-select" placeholder="Enter">
                    <option value="423">Innopolis</option>
                    <option value="77">Moscow</option>
                    <option value="343">Ekaterinburg</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="street" class="form-label">Street</label>
                  <input class="form-control" id="street" name="street">
                </div>
                <div class="mb-3">
                  <label for="building" class="form-label">Building</label>
                  <input class="form-control" id="building" name="building">
                </div>
                <div class="mb-3">
                  <label for="appartment" class="form-label">Appartment</label>
                  <input class="form-control" id="appartment" name="appartment">
                </div>
                <button type="submit" class="btn btn-success">Order</button>
              </form>
            </div>
          </div>
          <div class="col-3">
            <div class="card">
              <div class="card-body d-flex flex-column">
                <p>Your order:</p>
                <span class="mb-5">Iron Galaxy 20,99 $</span>
                <p><b>Total: 20,99 $</b></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
    </html>  
  `;
};
