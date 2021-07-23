import { loadFileToCollection, loadJsonToCollection, loadObjectToCollection, pushToCollection, documentReady, getCollection } from './dynamic-attributes.min.js';

// Example using the documentReady function to execute code when the document is ready.
documentReady(testJsonData());

// Example setting the content collection with a Json string.
function testJsonData() {
    var jsonData = `{"title": "This is a dynamic title from a Json string", "header": "This is a dynamic header from a Json string", "content": "This is a dynamic content from a Json string"}`;
    loadJsonToCollection(jsonData);
}
document.getElementById("testJsonData").addEventListener('click', testJsonData);


// Example setting the content collection with a Json file.
function testJsonFile() {
    var jsonFileName = `json/content.json`;
    loadFileToCollection(jsonFileName);
}
document.getElementById("testJsonFile").addEventListener('click', testJsonFile);


// Example setting the content collection with a javascript object.
function testObjectData() {
    var data = {"title": "This is a dynamic title from an object", "header": "This is a dynamic header from an object", "content": "This is a dynamic content from an object <h3>...with added html</h3>"};
    loadObjectToCollection(data);
}
document.getElementById("testObjectData").addEventListener('click', testObjectData);


// Example changing the text of a span tag with a variable.
var count = 0;
function testDataPush() {
    count++;
    pushToCollection("counter", count);
}
document.getElementById("testDataPush").addEventListener('click', testDataPush);


// Example changing the source and alt text for the car image
var pictureToggle = 0;
var pictureSrc = "images/paul-kansonkho-9xjHQvdMi4c-unsplash.jpg";
var pictureAlt = "a cool car";
function changePicture() {
    if(pictureToggle == 0) {pictureToggle = 1; pictureSrc = "images/paul-kansonkho-YVVrahl11xI-unsplash.jpg"; pictureAlt = "another cool car";} 
    else {pictureToggle = 0; pictureSrc = "images/paul-kansonkho-9xjHQvdMi4c-unsplash.jpg"; pictureAlt = "a cool car";}
    pushToCollection("car-scr", pictureSrc);
    pushToCollection("car-alt", pictureAlt);
}
document.getElementById("changePicture").addEventListener('click', changePicture);

// Example using the getCollection function to get the collection.
function alertCollection() {
    alert(JSON.stringify(getCollection()));
}
document.getElementById("alertCollection").addEventListener('click', alertCollection);