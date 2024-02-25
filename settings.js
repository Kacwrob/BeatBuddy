function saveApiKey() {
    const apiKey = document.getElementById('apiKey').value;
    chrome.storage.sync.set({ apiKey: apiKey }, function () {
        console.log('API key saved:', apiKey);
    });
}
