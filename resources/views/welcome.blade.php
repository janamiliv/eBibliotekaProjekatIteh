<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

</head>

<body>
    <div class="container vh-100 d-flex justify-content-center align-items-center">
        <div class="">
            @if (Route::has('login'))

                @auth
                    <a href="{{ url('/home') }}">Home</a>
                @else
                    <a class="btn btn-lg btn-primary" href="{{ route('login') }}">Login</a>

                    @if (Route::has('register'))
                        <a class="btn btn-lg btn-primary" href="{{ route('register') }}">Register</a>
                    @endif
                @endauth

            @endif
        </div>
    </div>
</body>

</html>
