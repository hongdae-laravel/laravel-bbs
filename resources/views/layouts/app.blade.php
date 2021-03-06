<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app" class="global-wrapper">
        <div class="header-wrapper">
            <header>
                <div class="header-title">
                    <p>BBS Emulator Ver. 0.1.</p>
                </div>
                <div class="user-wrapper">
                    <div class="user">
                        <ul>
                            <!-- Authentication Links -->
                            @guest
                                <li>
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('buttons.login') }}</a>
                                </li>
                                <li>
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('buttons.register') }}</a>
                                </li>
                            @else
                                <li>
                                    <a href="#">
                                        {{ Auth::user()->name }} 님으로 접속중
                                    </a>
                                </li>
                                <li>
                                    <a  href="{{ route('logout') }}"
                                        onclick="event.preventDefault();
                                                 document.getElementById('logout-form').submit();">
                                        {{ __('buttons.logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </li>
                            @endguest
                        </ul>
                    </div>
                </div>
            </header>
        </div>
        <nav>
            <div>
                <a href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
            </div>
        </nav>

        <main>
            @yield('content')
        </main>
        <div class="footer-wrapper">
            <footer>
                <div class="copyrights">
                    <p>&copy;2018 paikwiki.</p>
                </div>
            </footer>
        </div>
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>
