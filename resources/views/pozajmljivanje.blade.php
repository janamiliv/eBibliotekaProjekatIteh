@extends('layouts.app')

@section('content')
    <div class="container">
        <h3>Pregled pozajmljivanja</h3>


        <table class="table table-info ">
            <thead>
                <tr>

                    <th>Datum kreiranja pozajmljivanja</th>
                    <th>Deadline pozajmljivanja</th>
                    <th style="width: 60%">Barcode</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> {{ $pozajmljivanje[0]->created_at }}</td>

                    <td> {{ $pozajmljivanje[0]->deadline }}</td>
                    <td> <img class="img img-thumbnail"
                            src="https://barcode.tec-it.com/barcode.ashx?data=http://127.0.0.1:8000/svaPozajmljivanja/2" alt="">
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="table table-hover table-info table-striped  ">
            <thead>
                <tr>

                    <th style="width: 30%">Datum kreiranja komentara</th>
                    <th style="width: 60%">Komentar</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($pozajmljivanje[0]->komentari as $komentar)
                    <tr>
                        <td>{{ $komentar->created_at }}</td>
                        <td style="word-break: break-all">{{ $komentar->komentar }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        @auth

            <h6>Dodaj komentar:</h6>
            <form method="post" action="{{ route('komentar.post') }}" accept-charset="UTF-8">
                @csrf
                <input placeholder="Vas komentar za pozajmljivanje {{ $pozajmljivanje[0]->naziv }}" type="text" name="komentar"
                    class="form-control">
                <input hidden type="text" value="{{ $pozajmljivanje[0]->id }}" name="task_id" class="form-control">
                <input type="submit" value="Dodaj komentar" class="form-control btn btn-secondary">

            </form>
        @endauth

        </body>

        </html>


    </div>


@endsection
