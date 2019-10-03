var sdk = new window.sfdc.BlockSDK();

var uid = document.getElementById('text-input-id-1').value;
console.log(uid);

sdk.getData(function (data) {
    console.log(data);
});

sdk.setData({
    userId: uid
});

sdk.setContent('<html>' + '<head>' + '</head>' + +'<body>'+
    '<p>' + uid + '</p>' + +'</body>'+
    '</html>');