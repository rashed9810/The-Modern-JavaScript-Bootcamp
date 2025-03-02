function downloadImage(url, callback) {
    console.log("ছবি ডাউনলোড হচ্ছে...");
    setTimeout( function() {
        console.log("ছবি ডাউনলোড হয়েছে...");
        callback(url);
    }, 3000);
}

function showImage(url) {
    console.log("ছবি দেখানো হচ্ছে...");
}
downloadImage("https://www.google.com", showImage);
console.log("Program is on going into my server...");


downloadImage((url, callback) => {
    console.log("Image is downloading...");
    setTimeout(() => {
        console.log("Image is downloaded...");
        callback(url);
    }, 4000);
})

showImage((url) => {
    console.log("Image is showing...");
});
downloadImage("https://www.google.com", showImage);;
console.log("Server is running into my pc....");


