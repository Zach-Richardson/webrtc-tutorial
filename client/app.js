(function() {

    activate();

    function activate() {
        getUserMedia();
        createPeerConnection();
    }

    function createPeerConnection() {
        var peerConn = new RTCPeerConnection();
        var dataChannel = peerConn.createDataChannel("myChannel", dataChannelOptions)
    }

    function getUserMedia() {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
        || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        if(!navigator.getUserMedia) {
            return alert("WebRTC is not supported!");
        }
        navigator.getUserMedia({video: true, audio: false}, stream => { 
            let video = document.querySelector('video');
            video.srcObject = stream;
        }, err => console.log);
    }
        
})();