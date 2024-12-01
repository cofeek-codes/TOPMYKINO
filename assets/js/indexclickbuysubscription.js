$(document).ready(function () {
    if (localStorage.getItem("subscription") == "true") {
        document.querySelector(".div1").innerHTML = ""
    }
    else {
        document.querySelector(".div1").innerHTML = `
        <div class="div1-block1">
        <span>Фильмы и сериалы</span>
        <span class="span2">в одной подписке</span>
        <span class="textorange">7 дней беслатно</span>
        <button style="width: fit-content" class="btnSubscription">Подключить подписку</button>
        <p>Отключить можно в любой момент</p>
        </div>
        <div class="div1-block2">
            <p>
                <img width="100%" src="./assets/img/angrybirds2moviefull.jpg" />
            </p>
        </div>`
        document.querySelector(".btnSubscription").addEventListener("click", () => {
            if (localStorage.getItem("auth") == "true") {
                $(document).on("keydown", function (event) {
                    if (event.keyCode == 27) {
                        $(".window2").fadeOut();
                        $(".modul2").fadeOut();
                        $("body").removeClass("fixed");
                    }
                });

                $(".window2").click(function (event) {
                    if ($(event.target).closest(".modul2").length == 0) {
                        $(".window2").fadeOut();
                        $(".modul2").fadeOut();
                        $("body").removeClass("fixed");
                    }
                });
            } else {
                alert("Вам необходимо войти в профиль")
            }
        });
        if (localStorage.getItem("auth") == "true") {
            $(".btnSubscription").click(function () {
                $(".window2").fadeIn();
                $(".modul2").fadeIn();
                $("body").addClass("fixed");
            });
        }
    }
});