function openSlideMenu(){
    document.getElementById("nav-menu").classList.add("open");
    document.getElementById("overlay").classList.add("open");
}

function closeSlideMenu(){
    document.getElementById("nav-menu").classList.remove("open");
    document.getElementById("overlay").classList.remove("open");
}

function toggleDropdown(id){
    document.getElementById(id).classList.toggle("open");
}