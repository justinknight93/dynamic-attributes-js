var collection = {};

export function documentReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

export function loadFileToCollection(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => { collection = data; updateDocument(); });
}

export function loadJsonToCollection(jsonString) {
    collection = JSON.parse(jsonString);
    updateDocument();
}

export function pushToCollection(key, value) {
    collection[key] = value;
    updateDocument();
}

export function loadObjectToCollection(object) {
    collection = object;
    updateDocument();
}

export function getCollection() {
    return collection;
}

function updateDocument() {
    var Elements = document.querySelectorAll('[class^="set-"],[class*=" set-"]')

    Elements.forEach(function (element) {
        var classList = element.classList;
        classList.forEach(function (className) {
            var attributeName = className.replace("set-", "");
            if (attributeName == "inner") {
                var innerKey = element.getAttribute('data-inner');
                if (innerKey) {
                    if (collection[innerKey]) {
                        element.innerHTML = collection[innerKey];
                    }
                }
            } else {
                var dataKey = element.getAttribute(`data-${attributeName}`);
                if (dataKey) {
                    if (collection[dataKey]) {
                        element[attributeName] = collection[dataKey];
                    }
                }
            }
        });
    });
}

