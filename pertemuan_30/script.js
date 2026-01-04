//mengambil akses
let moreText = document.getElementById("moreText");
let readmoreBtn = document.getElementById("readmoreBtn");

//function
function tampilkan(){
    if(moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");
        readmoreBtn.textContent = "Sembunyikan";
    }else{
        moreText.classList.add("hidden");
        readmoreBtn.textContent = "Selengkapnya"
    }
}

//addEventListener
readmoreBtn.addEventListener("click",tampilkan);