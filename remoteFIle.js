(function() {
    if (typeof plxDwnld == 'undefined') {
        const jsCode = document.createElement('script');
        jsCode.setAttribute('src', 'https://plex-downloader.netlify.app/bookmarklet.js?ts=' + Math.floor(Date.now() / 1000));
        document.body.appendChild(jsCode);
    } else {
        plxDwnld.init();
    }
})()
