document.getElementById("menu-toggle").addEventListener("click", function(){
    document.getElementById("menu").classList.toggle("active");
});

document.getElementById("menu-item").addEventListener("click", function(){
    document.getElementById("dropdown").classList.toggle("active");
});
