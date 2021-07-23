# Dynamic-attributes.js

Dynamic-attributes.js is a tiny (>1kb) javascript module that makes dynamically changing HTML tag attributes and innerHTML easier. Page content can be loaded from object, Json strings, or Json files. The page content can also be changed on the fly by pushing new data to the content collection.

---

## Basic Usage

Example.html
```html
<html>
<head>
<title class="set-inner" data-inner="title">Page Title</title>
<!-- This is the JS file below -->
<script type="module" src="js/Example.js"></script>
</head>
<body>

<!-- The class set-inner indicates that you want to dynamically set the innerHTML for the tag and data-inner is the key for the content in the collection -->
<h1 class="set-inner" data-inner="header">My First Heading</h1>
<p class="set-inner" data-inner="content">My first paragraph.</p>

<!-- The class set-style indicates that you want to dynamically set the style attribute for the tag and data-style is the key for the content in the collection -->
<h1 class="set-style" data-style="color" style="color:green">My Second Heading</h1>

</body>
</html> 
```

Example.js

```js
// Import functions from dynamic-attributes.js
import { loadFileToCollection, loadJsonToCollection, loadObjectToCollection, pushToCollection, getCollection } from './dynamic-attributes.js';

// documentReady() will run the given function as soon as the document is ready.
documentReady(
    function setCollection() {
        var data = {
            "title": "This is a dynamic title from an object",
            "header": "This is a dynamic header from an object", 
            "content": "This is a dynamic content from an object <h3>...with added html</h3>",
            "color": "color:blue"};
        // loadObjectToCollection will take the object and load it into the collection.
        loadObjectToCollection(data);
    }
);
```

For a more detailed example check out the demo folder.

---
## HTML tags

Dynamic-attributes.js works by looking at the class list of each element and checking for class names starting with "set-". It will then find a corresponding data tag and check the collection for a value matching that key.

You should be able to use the name of any HTML attribute. Just add it to the class list with "set-" in front and add a corresponding "data-" attribute.

### Style attribute example
In this example we want the style attribute of the tag to be set by the content collection, so we add the class "set-style" and the attribute "data-style". Dynamic-attributes.js will see the set-style class, read the data-style attribute to get the key and look up the new value in the collection.
```html
<h1 class="set-style" data-style="color" style="color:green">My Heading</h1>
```

### InnerHTML example
InnerHTML is not an attribute but Dynamic-attributes.js treats it similarly. Just use the class "set-inner" and the attribute "data-inner" for the content key.
```html
<h1 class="set-inner" data-inner="heading-text">My Heading</h1>
```

The content collection is set using the javascript examples below.

---
## Function usage
### documentReady(function)
```js
// documentReady(function) will take a function in as an argument and run it as soon as the document is ready. This is handy when you need to load a content collection right away.
documentReady(loadFileToCollection(`json/content.json`));
```

### loadFileToCollection(url)
```js
// loadFileToCollection(url) will fetch json data from a url and load it into the collection.
var jsonFileName = `json/content.json`;
loadFileToCollection(jsonFileName);
```

### loadJsonToCollection(string)
```js
// loadJsonToCollection(string) takes a json formatted string and loads it into the collection.
var jsonData = `{"title": "This is a dynamic title from a Json string", "header": "This is a dynamic header from a Json string", "content": "This is a dynamic content from a Json string"}`;
loadJsonToCollection(jsonData);
```

### loadObjectToCollection(object)
```js
// loadObjectToCollection(object) takes a javascript object and loads it into the collection.
var data = {"title": "This is a dynamic title from an object", "header": "This is a dynamic header from an object", "content": "This is a dynamic content from an object <h3>...with added html</h3>"};
loadObjectToCollection(data);
```

### pushToCollection(key,value)
```js
// pushToCollection(key,value) takes a key in the form of a string and a value then adds it to the collection. If the key already exist in the collection this function will set it to the new value given.
var headerValue = "Hello World!"
pushToCollection("header", headerValue);
```

### getCollection()
```js
// getCollection() returns the content collection as a javascript object.
var collection = getCollection();
alert(JSON.stringify(collection));
```

---

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

