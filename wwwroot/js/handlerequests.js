//let accept = document.getElementById("animalNameFav");
//let animalImageFav = document.getElementById("animalImageFav");
//let userIdFav = document.getElementById("userIdFav");



//function createFav() {
//    let favPetObject =
//    {
//        "AnimalId": parseInt(animalId.value),
//        "AnimalName": animalName.value,
//        "AnimalImage": animalImage.value,
//        "UserId": parseInt(userId.value),
//    }
//    return favPetObject;
//}

//function sendData(endpoint, data) {
//    fetch(endpoint,
//        {
//            headers: {
//                'Accept': 'application/json',
//                'Content-Type': 'application/json',
//            },
//            method: "POST",
//            body: JSON.stringify(data)
//        })
//        .then(function (res) { console.log(res); window.location.href = "https://localhost:44335/favorites" })
//        .catch(function (res) { console.log(res) })
//}

//function sendFavorite() {
//    let data = createFav();
//    console.log(data);
//    sendData("/favorite-pet", data);
//}
//function deny()
//{
//    console.log(this);
//}

$('.deny').click(function () {
    getData("https://localhost:44335/decline-adoption/" + $(this).data("req-id"))
    window.location.href = window.location.href;
});
$('.accept').click(function () {
    console.log($("#requestId").data("animal"))
    getData("https://localhost:44335/confirm-adoption/" + $(this).data("req-id"))
    window.location.href = window.location.href;

});

function getData(endpoint) {
    fetch(endpoint,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: "GET",

        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
}

