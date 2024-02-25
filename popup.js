document.addEventListener('DOMContentLoaded', function () {

    chrome.storage.sync.get(['apiKey'], function (result) {
        const apiKey = result.apiKey;
        // Use apiKey in your OpenAI API requests...
    });

});
