const menuItems = $(".menu-item");
const mobileToggler = $("#mobile-menu-toggler");


[...menuItems].map(menuItem => {

    const calculate = () => {
        let dropdownHeight = 0;
        const dropdown = $(menuItem).find(".custom-menu-dropdown");

        $(dropdown).children().map((index, item) => {
            dropdownHeight += $(item).height();
        })

        $(dropdown).css({
            height: `${dropdownHeight + 20}px`,
            visibility: "visible"
        })
    }

    menuItem.addEventListener("mouseover", () => {
        if (window.innerWidth >= 1010) {
            calculate();
        }
    })

    menuItem.addEventListener("mouseleave", () => {
        if (window.innerWidth >= 1010) {
            const dropdown = $(menuItem).find(".custom-menu-dropdown");

            $(dropdown).css({
                height: 0,
            })

            setTimeout(() => {
                $(dropdown).css({
                    visibility: "hidden"
                })
            }, 200)
        }
    })

    menuItem.addEventListener("click", () => {
        if (!$(menuItem).hasClass("active")) {
            $(".custom-menu-dropdown").css({
                height: 0
            })
            $(".menu-item").removeClass("active")
            calculate();
            $(menuItem).toggleClass("active")
        }
        else {
            const dropdown = $(menuItem).find(".custom-menu-dropdown");
            $(dropdown).css({
                height: "0px"
            })
            setTimeout(() => {
                $(menuItem).toggleClass("active")
            }, 300)
        }
    })
})

$(mobileToggler).on("click", (event) => {
    $(".menu-container").toggleClass("active")
    if ($(".menu-container").hasClass("active")) {
        setTimeout(() => {
            $(".menu-container").css({
                overflow: "visible"
            })
        }, 300)
    } else {
        $(".menu-container").css({
            overflow: "hidden"
        })
    }
})

$("#search-area i").on("click", (event) => {
    event.stopPropagation();
    document.querySelector("#search-area").classList.toggle("active");
})

noUiSlider.create(document.querySelector("#slider-range"), {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 1010) {
        $(".menu-container").attr("style", "")
    }
})

window.addEventListener("scroll", (e) => {
    const _tempTopOffset = $(document).height() / 2.5;
    const finalTopOffset = _tempTopOffset <= 500 ? _tempTopOffset : 500;

    if (window.scrollY >= finalTopOffset) {
        $(".to-up-button").addClass("active");
    } else {
        $(".to-up-button").removeClass("active");
    }
})

$(".to-up-button").on("click", () => {
    $(document).scrollTop(0);
})