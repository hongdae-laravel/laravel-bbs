@extends('layouts.app')

@section('content')
    <div>
        <div>Dashboard</div>
        <div>
            @if (session('status'))
                <div>
                    {{ session('status') }}
                </div>
            @endif
            <ul class="post-list">
                <li>
                    <ul class="post post-header">
                        <li class="post-num">번호</li>
                        <li class="post-title">제목</li>
                        <li class="post-user">글쓴이</li>
                        <li class="post-date">날짜</li>
                        <li class="post-count">조회수</li>
                    </ul>
                </li>
                <li>
                    <ul class="post">
                        <li class="post-num">4</li>
                        <li class="post-title">게시물 제목이 들어가는 자리</li>
                        <li class="post-user">paikwiki</li>
                        <li class="post-date">07-18</li>
                        <li class="post-count">83</li>
                    </ul>
                </li>
                <li>
                    <ul class="post">
                        <li class="post-num">3</li>
                        <li class="post-title">게시물 제목이 들어가는 자리</li>
                        <li class="post-user">paikwiki</li>
                        <li class="post-date">07-18</li>
                        <li class="post-count">83</li>
                    </ul>
                </li>
                <li>
                    <ul class="post">
                        <li class="post-num">2</li>
                        <li class="post-title">게시물 제목이 들어가는 자리</li>
                        <li class="post-user">paikwiki</li>
                        <li class="post-date">07-18</li>
                        <li class="post-count">83</li>
                    </ul>
                </li>
                <li>
                    <ul class="post">
                        <li class="post-num">1</li>
                        <li class="post-title">게시물 제목이 들어가는 자리</li>
                        <li class="post-user">paikwiki</li>
                        <li class="post-date">07-18</li>
                        <li class="post-count">83</li>
                    </ul>
                </li>
            </ul>
            <div class="board-button-wrapper">
                <span>{{ __('buttons.read') }} {{ __('buttons.write') }} {{ __('buttons.refresh') }} :</span>
                <span class="inputValue"></span>
                <span class="prompter">|</span>
            </div>
        </div>
    </div>
@endsection
