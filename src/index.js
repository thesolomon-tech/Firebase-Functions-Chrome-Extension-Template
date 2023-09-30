document.addEventListener("DOMContentLoaded", function () {

    const textInput = document.getElementById("textInput");
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function () {

        const inputValue = textInput.value;

        console.log("Submitted value", inputValue);

        textInput.value = "";
        backgroundsend(inputValue);

    });
});

async function backgroundsend(string) {
    chrome.runtime.sendMessage({ action: "myFunction", send: string }, (response) => {
        console.log(response.result);
    });

}