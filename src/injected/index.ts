function toggleDarkMode() {
    const className = 'gh-dark-extension-wrapper';
    const body = document.getElementsByTagName('body')[0];
    body.classList.contains(className)
        ? body.classList.remove(className)
        : body.classList.add(className);
}

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        if (message.action === 'toggleDarkMode') {
            toggleDarkMode();
        }
    });

toggleDarkMode();
