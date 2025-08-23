// listeye eleman ekleme fonksiyonu
function newElement(){
    let input = document.getElementById("task");
    let inputValue = input.value.trim();

    //boşsa hata versin
    if ( inputValue === ""){
        console.log("boş ekleme yapılamaz!");
        return;
    }

    //yeni li oluşturma
    let li = document.createElement("li");
    li.textContent = inputValue; //input değerini li içine yazdım.
    
    //ul içine ekleme
    let ul = document.getElementById("list")
    ul.appendChild(li);
    
    //inputu temizle
    input.value = "";
}
function addCloseButtons() {
    let liItems = document.querySelectorAll("#list li");

    liItems.forEach(function(li) {
        // zaten close yoksa ekle
        if (!li.querySelector(".close")) {
            let span = document.createElement("span");
            span.textContent = "×"; // çarpı işareti
            span.className = "close";
            li.appendChild(span);

            // tıklanınca görev sil
            span.addEventListener("click", function() {
                li.remove();
            });
        }
    });
}
// sayfa yüklenince butonları ekle
addCloseButtons();

















