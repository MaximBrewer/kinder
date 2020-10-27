<!DOCTYPE html>
<html lang="ru-RU" dir="ltr">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    @yield('content')
    <script src="/js/app.js"></script>
    <script type="text/javascript">
        function bdi_resizeIframe() {
            if (parent.postMessage) {
                var body = document.getElementsByTagName("BODY")[0];
                body.style.height = 'auto';
                var height = document.body.scrollHeight;
                parent.postMessage({
                    css: {
                        height: height
                    }
                }, '*');
            }
        }

        function bdi_scrollTop(scrolltop) {
            if (parent.postMessage) {
                parent.postMessage({
                    scrolltop: scrolltop
                }, '*');
            }
        }
        window.addEventListener('load', function() {
            bdi_resizeIframe();
        });
        window.addEventListener('load', bdi_resizeIframe);
        var bdiTO;
        window.addEventListener('resize', function() {
            clearTimeout(bdiTO);
            bdiTO = setTimeout(bdi_resizeIframe, 500);
        });

        // Back to top
        document.getElementsByClassName('.back_to_top').length &&
            document.getElementsByClassName('.back_to_top')[0].addEventListener('click', function() {
                bdi_scrollTop(0)
            });
    </script>
</body>

</html>