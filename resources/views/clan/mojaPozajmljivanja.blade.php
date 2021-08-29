@extends('layouts.app')

@section('content')
    <div class="container">

        <h4 align="center">Ovde ce biti prikazani sva vasa pozajmljivanja:</h4>
        @if (session('status'))
            <div class="alert alert-success" role="alert">
                {{ session('status') }}
            </div>
        @endif

        <div id="mojapozajmljivanja" data-pozajmljivanja="{{ $pozajmljivanja }}"></div>
    </div>

@endsection
