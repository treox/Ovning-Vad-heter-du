
// Ger åtkomst till element:
let bodye = document.getElementById('bod-y');
let storeinfo = document.getElementById('store-info');
let writename = document.getElementById('write-name');
let removeinfo = document.getElementById('remove-info');

// Skapar div element under body:
bodye.insertAdjacentHTML('beforeend', '<div id="dive"></div>');

// Knapptryck sparar värde i localStorage:
storeinfo.addEventListener('click' , function(){
    var names = writename.value;
    var name = 'name';

    if (name && names) {
        localStorage.setItem('name', names);
        location.reload();
    }
});

// Knapptryck raderar localStorage:
removeinfo.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});

// Sätter in sparade värdet från localStorage i div elementet:
for (let i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);

    let dive2 = document.getElementById('dive');
    dive2.innerHTML += key + ': ' + value + '<br/>';
}
