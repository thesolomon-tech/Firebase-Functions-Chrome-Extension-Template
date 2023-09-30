import { initializeApp } from 'firebase/app';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "myFunction") {
    communicate(request.send).then(output => {
      sendResponse({ result: "Function executed " + JSON.stringify(output) });
    });

    return true;
  }
});


console.log("check");
const firebaseConfig = {

  //insert
};
const url = "" ;//insert

const app = initializeApp(firebaseConfig);

async function communicate(text) {
  const data = {
    content: text
  };
  //console.log(text); to debug
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
      return "error";
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error calling the function:', error);
    return "error";
  }
}