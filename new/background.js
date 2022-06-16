chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        // console.log(current_tab_info.url)
        // if (/^https:\/\/www\.codesmith/.test(current_tab_info.url)){
        if (/^https:\/\/www\.codesmith\.io\/about/.test(current_tab_info.url)){
            // console.log(current_tab_info.url)
            chrome.tabs.insertCSS(null, {file: './styles.css'});
            chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log('i inject'))
        }
    });
});

chrome.storage.local.get('onClick', )

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if(request.message === 'check the storage'){
//         chrome.storage.local.get("password", value => {
//             console.log(value);
//         })
//     }
// })