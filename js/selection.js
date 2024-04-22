console.log("hello world!");
var client = contentful.createClient({
    space: 'f7mp64jz9fcp',
    accessToken: 'UWiDchefAhl13tJ2Vh9UkgZeKVZaMmHgap4vtd6bp7U',
});

var product = document.getElementById('list');

client.getEntries({content_type: 'products',}).then(function (entries) {
    entries.items.forEach(function (entry) {

        var productDiv = document.createElement('div');
        var name = document.createElement('h2');
        name.innerHTML = entry.fields.name;
        productDiv.append(name);
        product.append(productDiv);

        var price = document.createElement('p');
        price.innerHTML = entry.fields.price;
        productDiv.append(price);

        console.log(entry.fields.mainImage.fields.file.url)
        var mainImage = document.createElement('img');
        mainImage.classList.add('main-image')
        if (entry.fields.mainImage){
            var hero = document.createElement('div');
            hero.style.backgroundImage = entry.fields.mainImage.fields.file.url;
            mainImage.src = entry.fields.mainImage.fields.file.url;
            productDiv.append(mainImage);
        }

        var linkToDetails = document.createElement('a');
        linkToDetails.href = 'product.html?id=' + entry.sys.id;
        linkToDetails.appendChild(mainImage);
        
        productDiv.appendChild(linkToDetails);
        productDiv.appendChild(name);
        productDiv.appendChild(price);
        product.appendChild(productDiv);

    });

    document.getElementById("menu-toggle").addEventListener("click", function(){
        document.getElementById("menu").classList.toggle("active");
    });

    document.getElementById("menu-item").addEventListener("click", function(){
        document.getElementById("dropdown").classList.toggle("active");
    });
    
});