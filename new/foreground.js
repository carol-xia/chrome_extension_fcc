// document.querySelector('.lnXdpd').classList.add('spinspin');
const picArray = document.querySelectorAll('.team-item img');
picArray.forEach(el => {
  el.classList.add('spinspin');
})



// const first = document.createElement('button');
// first.innerText = "SET DATA";
// first.id = "first";

// const second = document.createElement('button');
// second.innerText = "SHOUTOUT TO BACKEND";
// second.id = "second";

// document.querySelector('body').appendChild(first);
// document.querySelector('body').appendChild(second);

// first.addEventListener('click', () => {
//     chrome.storage.local.set({"password": "123"});
//     console.log("I SET DATA");
// })

// second.addEventListener('click', () => {
//     chrome.runtime.sendMessage({message: 'check the storage'});
//     console.log('I sent the message');
// })
