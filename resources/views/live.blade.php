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
        // var resize_frame = function (event) {
        //   if (origin_url.indexOf(event.origin.replace(/^http(s)?\:/, '')) !== -1) {
        //     var iframe = jQuery('#iframe_container');
        //     if (typeof event.data.css !== 'undefined') {
        //       jQuery.extend(default_css, event.data.css);
        //       iframe.css(default_css);
        //     }

        //     if (typeof event.data.scrolltop !== 'undefined') {
        //       jQuery('html,body').animate({
        //         scrollTop: event.data.scrolltop
        //       }, 1000);
        //     }
        //     if (
        //         typeof event.data.data !== 'undefined'
        //         && typeof event.data.data.height !== 'undefined'
        //     ) {
        //       document.getElementById('iframe_container').style.height = event.data.data.height + 'px';
        //       document.getElementById('iframe_bdi').height = event.data.data.height + 'px';
        //     }
        //   }
        // };

        // if (window.addEventListener) {
        //   window.addEventListener('message', resize_frame, false);
        // }

        window.addEventListener('load', function() {
            parent.postMessage({
                css: {
                    height: "100vh"
                }
            }, '*');
        })

        // document.getElementById("iframe").style.height = parent.innerHeight + "px";

        // function bdi_resizeIframe() {
        //     if (parent.postMessage) {
        //         var body = document.getElementsByTagName("BODY")[0];
        //         body.style.height = 'auto';
        //         var height = document.body.scrollHeight;
        //         parent.postMessage({
        //             css: {
        //                 height: height
        //             }
        //         }, '*');
        //     }
        // }

        // function bdi_scrollTop(scrolltop) {
        //     if (parent.postMessage) {
        //         parent.postMessage({
        //             scrolltop: scrolltop
        //         }, '*');
        //     }
        // }
        // window.addEventListener('load', function() {
        //     setTimeout(bdi_resizeIframe, 500);
        // });
        // // window.addEventListener('load', bdi_resizeIframe);
        // var bdiTO;
        // window.addEventListener('resize', function() {
        //     clearTimeout(bdiTO);
        //     bdiTO = setTimeout(bdi_resizeIframe, 500);
        // });

        // // Back to top
        // document.getElementsByClassName('.back_to_top').length &&
        //     document.getElementsByClassName('.back_to_top')[0].addEventListener('click', function() {
        //         bdi_scrollTop(0)
        //     });
    </script>
</body>

</html>