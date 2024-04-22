console.log("hello world!");

var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

console.log(id);

var client = contentful.createClient({
    space: 'f7mp64jz9fcp',
    accessToken: 'UWiDchefAhl13tJ2Vh9UkgZeKVZaMmHgap4vtd6bp7U',
});

var product = document.getElementById('item');
  client.getEntry(id).then(function (entry) {
    console.log(entry.fields.mainImage.fields.file.url)

    console.log(entry);

    var mainImage = document.createElement('img');
    mainImage.classList.add('checkout-image')
    if (entry.fields.mainImage){
        var hero = document.createElement('div');
        hero.style.backgroundImage = entry.fields.mainImage.fields.file.url;
        
        mainImage.src = entry.fields.mainImage.fields.file.url;
        item.append(mainImage);
    }

    var name = document.createElement('h3');
    name.innerHTML = entry.fields.name;
    name.classList.add('details-h3')
    item.appendChild(name);

    var price = document.createElement('p');
    price.innerHTML = entry.fields.price;
    item.appendChild(price);

    var color = document.createElement('p');
    color.innerHTML = entry.fields.color;
    item.appendChild(color);
});