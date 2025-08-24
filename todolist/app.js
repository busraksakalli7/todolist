// listeye eleman ekleme fonksiyonu
function newElement(){
    let input = document.getElementById("task");
    let inputValue = input.value.trim();

    // boşsa hata ver
    if (inputValue === ""){
        console.log("Boş ekleme yapılamaz!");
        return;
    }

    // yeni li oluştur
    let li = document.createElement("li");
    li.textContent = inputValue;

    // X butonu ekle
    let span = document.createElement("span");
    span.textContent = "×";
    span.className = "close";
    span.addEventListener("click", function(){
        li.remove();
    });

    li.appendChild(span);

    // listeye ekle
    document.getElementById("list").appendChild(li);

    // inputu temizle
    input.value = "";
}

// sayfa yüklenince mevcut listedekilere X ekle
window.addEventListener("DOMContentLoaded", function(){
    let liItems = document.querySelectorAll("#list li");
    liItems.forEach(function(li){
        let span = document.createElement("span");
        span.textContent = "×";
        span.className = "close";
        span.addEventListener("click", function(){
            li.remove();
        });
        li.appendChild(span);
    });
});
