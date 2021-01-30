module.exports.getPage = async (req, res) => {
  res.send(`
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Login</title>
    
        <!-- Bootstrap core CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    
        <style>
          .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
          }
    
          @media (min-width: 768px) {
            .bd-placeholder-img-lg {
              font-size: 3.5rem;
            }
          }
          html,
          body {
            height: 100%;
          }
    
          body {
            display: flex;
            align-items: center;
            padding-top: 40px;
            padding-bottom: 40px;
            background-color: #f5f5f5;
          }
    
          .form-signin {
            width: 100%;
            max-width: 330px;
            padding: 15px;
            margin: auto;
          }
          .form-signin .checkbox {
            font-weight: 400;
          }
          .form-signin .form-control {
            position: relative;
            box-sizing: border-box;
            height: auto;
            padding: 10px;
            font-size: 16px;
          }
          .form-signin .form-control:focus {
            z-index: 2;
          }
          .form-signin input[type="email"] {
            margin-bottom: -1px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
          }
          .form-signin input[type="password"] {
            margin-bottom: 10px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
        </style>
      </head>
      <body class="text-center">
        <main class="form-signin">
          <form method="POST">
            <h1 class="h3 mb-3 fw-normal">Please log in</h1>
            <label for="inputLogin" class="visually-hidden">Login</label>
            <input type="text" id="inputLogin" class="form-control" name="login" placeholder="Login" required autofocus>
            <label for="inputPassword" class="visually-hidden">Password</label>
            <input type="password" id="inputPassword" class="form-control" name="password" placeholder="Password" required>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Remember me
              </label>
            </div>
            <label>Hello</label>
            <label>World</label>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
          </form>
        </main>
      </body>
    </html>
  `);
};

module.exports.login = async (req, res) => {
  const {
    body: { login, password },
  } = req;

  // const query = `
  //   INSERT INTO users (login, password)
  //   VALUES ('${login}', '${password}')
  // `;

  const sqlQuery = `
    SELECT * FROM users
    WHERE login='${login}' AND password='${password}'
  `;

  global.db.all(sqlQuery, [], (err, row) => {
    if (err) {
      console.log({ err });
      res.status(501).json({
        message: "Error!",
      });
    }

    console.log({ row });

    res.status(201).json({
      message: "Success!",
      data: row,
    });
  });
};
