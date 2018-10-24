@extends('layouts.app')

@section('content')
    <div>
        <h1>새글 쓰기</h1>

        <div>
            <form action="{{ route('posts.store') }}" method="POST" enctype="multipart/form-data">
                {!! csrf_field() !!}
                <span>제목</span><input type="text" />
                <hr/>
                <span>내용</span><textarea name="content" id="" cols="30" rows="10"></textarea>
                <hr/>
                <button type="">취소</button>
                <button type="submit">쓰기</button>
            </form>
        </div>
    </div>
@endsection
