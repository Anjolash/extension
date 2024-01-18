document.addEventListener("DOMContentLoaded", ()=>{
    // GET THE SELECTORS OF THE BUTTONS
    const startVideoButton = document.querySelector("button#start_video")
    const stopVideoButton = document.querySelector("button#stop_video")

    // adding event listeners

    startVideoButton.addEventListener("click", ()=>{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "request_recording"},  function(response){
                if(!chrome.runtime.lastError){
                    console.log(response)
                } else{
                    console.log(chrome.runtime.lastError, 'error line 14')
                }
            })
        } )
    })


    

    // Detect the click event on the close button
    document.getElementById('close-button').addEventListener('click', function() {
        // Use the Chrome Extension API to close the extension's popup
        window.close();
    });

})