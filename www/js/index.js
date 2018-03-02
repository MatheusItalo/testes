function onLoad(){
    document.addEventListener("deviceready", onDeviceReady);
}

function onDeviceReady(){
    window.localStorage.setItem('usuario', 'Matheus');
}