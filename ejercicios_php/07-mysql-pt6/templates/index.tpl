<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>UpFlix cutre</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <style>
        .btn-primary {
            background-color: orangered;
            border-color: orange;
        }

        .btn-primary:hover {
            background-color: orange;
            border-color: orangered;
        }

        table th {
            min-width: 50px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>PELICULAS:</h1>
        <table class="table table-hover">
            <thead class="thead-dark">
            <tr>
                <th>Titulo<span><a href="index.php?sort=DESC"><img  style="background-color: white" height="24px" src="images/down-arrow.png"></a></span>
                    <span><a href="index.php?sort=ASC"><img style="background-color: white" height="24px" src="images/up-arrow.png"></a></span></th>
                <th>Sinopsis</th>
            </tr>
            </thead>
            <tbody>
            ##PELICULAS##
            </tbody>
        </table>
        <button type="button" class="btn btn-primary btn-lg" onclick="window.location = 'new-pelicula.html';">Nueva</button>
    </div>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>