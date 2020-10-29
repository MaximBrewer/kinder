<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Kinder New Year</title>
</head>

<body style="margin:0;padding:0;">
    <iframe src="/live-iframe" style="height:100vh;width:100%;margin:0;padding:0;" frameborder="0" id="iframe"></iframe>
    <script type="text/javascript">
        document.getElementById("iframe").style.height = document.getElementById("iframe").offsetHeight + "px";
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
            setTimeout(bdi_resizeIframe, 500);
        });
        // window.addEventListener('load', bdi_resizeIframe);
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