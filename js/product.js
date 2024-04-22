console.log("hello world!");

var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

console.log(id);

var client = contentful.createClient({
    space: 'f7mp64jz9fcp',
    accessToken: 'UWiDchefAhl13tJ2Vh9UkgZeKVZaMmHgap4vtd6bp7U',
});

var products = document.getElementById('products');
var images = document.createElement('div');
images.classList.add('images');
products.append(images);
var info = document.createElement('div');
info.classList.add('info');
products.append(info);

  client.getEntry(id).then(function (entry) {
    console.log(entry.fields.mainImage.fields.file.url)

    console.log(entry);
    var sideImages = document.createElement('div');
    sideImages.classList.add('side-images');
    entry.fields.sideImages.forEach(function(image){
        var img = document.createElement('img');
        img.src = image.fields.file.url;
        sideImages.appendChild(img);
    });
    images.appendChild(sideImages);

    var mainImage = document.createElement('img');
    mainImage.classList.add('product-main-image')
    if (entry.fields.mainImage){
        var hero = document.createElement('div');
        hero.style.backgroundImage = entry.fields.mainImage.fields.file.url;
        
        mainImage.src = entry.fields.mainImage.fields.file.url;
        images.append(mainImage);
    }

    var name = document.createElement('h2');
    name.innerHTML = entry.fields.name;
    name.classList.add('details-h3')
    info.appendChild(name);

    var price = document.createElement('p');
    price.innerHTML = entry.fields.price;
    info.appendChild(price);

    var color = document.createElement('p');
    color.innerHTML = entry.fields.color;
    info.appendChild(color);

    var description = document.createElement('p');
    description.innerHTML = entry.fields.description;
    description.classList.add('details-p')
    info.appendChild(description);

    var buttonText = document.createElement('button');
    buttonText.innerHTML = entry.fields.buttonText;
    info.append(buttonText);


    var sizeFit = document.createElement('p');
    sizeFit.innerHTML = entry.fields.sizeFit;
    info.append(sizeFit);

    var fabricCare = document.createElement('p');
    fabricCare.innerHTML = entry.fields.fabricCare;
    info.append(fabricCare);

    var linkToDetails = document.createElement('a');
    linkToDetails.href = 'checkout.html?id=' + entry.sys.id;
    linkToDetails.appendChild(buttonText);
    info.append(linkToDetails);

    // content.appendChild(name);
    // content.appendChild(price);
    // content.appendChild(color);
    // content.appendChild(description);
    // content.appendChild(buttonText);
    // content.appendChild(sizeFit);
    // content.appendChild(fabricCare);
    // content.appendChild(linkToDetails);
    // content.appendChild(content);


    document.getElementById("menu-toggle").addEventListener("click", function(){
        document.getElementById("menu").classList.toggle("active");
    });


    document.getElementById("menu-item").addEventListener("click", function(){
        document.getElementById("dropdown").classList.toggle("active");
    });
    

    });