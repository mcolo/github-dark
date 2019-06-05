function sendToggleDarkModeMessage() {
    const options = {
        currentWindow: true,
        active: true
    };
    const sendMessage = (tabs) => {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {action: "toggleDarkMode"});
    };
    chrome.tabs.query(options, sendMessage);
}

document.addEventListener("DOMContentLoaded", function() {
    document
        .getElementById("toggleDarkMode")
        .addEventListener("click", sendToggleDarkModeMessage);
});
