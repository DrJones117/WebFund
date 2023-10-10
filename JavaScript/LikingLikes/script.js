
var likeValues = [0, 0, 0]

function likeBtn1() {
        var numLike = document.querySelector("#likes1");
        likeValues[0]++;
        numLike.innerText = likeValues[0] + " Like(s)"
}

function likeBtn2() {
    var numLike = document.querySelector("#likes2");
    likeValues[1]++;
    numLike.innerText = likeValues[1] + " Like(s)"
}

function likeBtn3(element) {
    var numLike = document.querySelector("#likes3");
    likeValues[2]++;
    numLike.innerText = likeValues[2] + " Like(s)"
}


