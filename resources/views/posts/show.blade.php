@extends('layouts.app')

@section('content')
    <div>
        <h1>{{ $post->id }}. {{ $post->title }}</h1>

        <div>{{ $post->content}}</div>
    </div>
@endsection
