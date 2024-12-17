function accessWebServer() {
    const url = document.getElementById("url").value;
    const webResponseDiv = document.getElementById("webResponse");

    if (!url) {
        webResponseDiv.textContent = "Please enter a valid URL.";
        return;
    }

    fetch(url)
        .then(response => response.text())
        .then(data => {
            webResponseDiv.textContent = data;
        })
        .catch(error => {
            webResponseDiv.textContent = `Error: ${error.message}`;
        });
}
