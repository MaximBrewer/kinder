<!DOCTYPE html>
<html lang="ru-RU" dir="ltr">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="appNhy" class="nhy-app"></div>
    <div class="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="4 0 500 43" style="display:block;">
            <path d="M513.99969,11.40851c-4.01483,1.60236-7.94287,3.15778-11.49982,4.34344-18,6-21.4-4.2-23.3-8.5-2.3-5.4-11.8-5.5-33.8,3.9-7.2,3.1-12.8,5.1-17,5.8-3.7.6-9.4.8-13.4-2.1-4.9-3.6-3.3-10.2-9.9-11.2-7.2-1.1-19.7,4.2-29.6,8.1-10.3,4.1-15.1,6.4-22.7,5.2s-8.7-7.6-9.9-9.8c-1.6-3-5.1-5.6-18.8-1.4-15.8,4.9-24.3,10.2-33,11.4-12.5,1.6-14.9-4.7-16.5-8.1-1.8-4-4.3-8.8-22.8-2.4-18.3,6.4-23.3,10.6-32.8,10.7-16.8.1-9.5-12.6-19.6-13.6-8.4-.8-17.4,3.1-27.9,7.4a92.97487,92.97487,0,0,1-13.7,4.9c-15.1,3.8-18.7-2.7-20.8-7.3-.4-.9-1.2-3.3-3.2-4.3-4.1-2-12.7-1-19.1,1.9-7.8,3.5-18.4,11.2-26.1,11.8-5.1.4-6.8-1.8-7.1-3.7a4.67826,4.67826,0,0,1,.5-2.6c.6-1.3,1.5-3.7-.2-5.8-2.1-2.7-9.3-2.2-9.3-2.2-14.7.7-21,5.4-32,10.5-7,3.2-12,4.2-15.8,3.4a9.88372,9.88372,0,0,1-3.3-1.5c-1.4-1.1-3.1-3.4-2-5.9a6.43484,6.43484,0,0,1,2.2-2.7,8.635,8.635,0,0,0,1.3-1.4c1.4-1.9.8-5.1-2.9-6a17.60543,17.60543,0,0,0-9.9,1.2c-3.7,1.6-6.7,3.1-10.1,4.8V43.40125H513.99969Z" fill="#f3410e"></path>
            <path d="M68.29968,13.35193a4.76707,4.76707,0,0,0-4.9,1.7,8.88734,8.88734,0,0,0-1.9,4.7,3.29478,3.29478,0,0,0,0,1.4,3.23213,3.23213,0,0,0,3.9,2.5c2.6-.4,4.3-3.7,4.5-6.5C70.0997,13.95194,68.29968,13.35193,68.29968,13.35193Z" fill="#fff"></path>
            <path d="M55.69971,13.75192c-.9.4-1.8.9-2.7,1.4a36.594,36.594,0,0,0-8.2,8c-3.5,4.7-4.3,8.7-4.3,11.6a7.72571,7.72571,0,0,0,7.4,7.4c5.8.3,8.7-4,8.7-8.5,0-3.7-1.5-6.7-1-11.5a16.125,16.125,0,0,1,1.3-4.9h0c.2-.3.4-.7.6-1,1.1-1.3,1.1-2.1.5-2.6A2.65713,2.65713,0,0,0,55.69971,13.75192Z" fill="#fff"></path>
        </svg>
    </div>
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