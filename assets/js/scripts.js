(function ($) {
  /*-----------------------------------------------------------------------------*/
  /*  Addiciona e remove classe ao clicar no menu hamburger
/*-----------------------------------------------------------------------------*/
  $(".hamburger").on("click", function () {
    let menu_clicado = document
      .getElementById("m-hamburger")
      .getAttribute("aria-expanded");
    // atrubui o heder a variavel
    let heder = $(".header");
    heder.addClass("fix-element");

    // atrubui o elemento body a variavel
    // adiciona overflow hiden ao elemento html para evitar a rolagem da página
    let body = $("html");
    body.addClass("scrollbars-hide");

    // Remove o background "tijolos" do menu do topo
    let menuTop = $(".container-menu-top");
    menuTop.addClass("background-off");

    // esconde botão de busca ao abrir menu mobile
    let btoSearch = $(".bto-search-mobile");
    btoSearch.toggle("hide");

    if (menu_clicado == "true") {
      heder.removeClass("fix-element");
      body.removeClass("scrollbars-hide");
      menuTop.removeClass("background-off");
    }
  });

  /*-----------------------------------------------------------------------------*/
  /*  Adiciona menu slim scrolled ao rolar a tela
/*-----------------------------------------------------------------------------*/
  //var header = $(".container-menu-top");
  var slim = $(".menu-slim");
  $(window).scroll(function () {
    // Verifica se o menu hambirguer do menu slim foi clicado, monitora se o menu slim esta aberto
    let menu_clicado = document
      .getElementById("m-hamburger-slim")
      .getAttribute("aria-expanded");

    // Se o botão do menu slim não foi clicado, mostra o menu slim
    if (menu_clicado != "true") {
      var scroll = $(window).scrollTop();
      if (scroll >= 250) {
        slim.addClass("slim-open");

        // Remove a busca da tela
        // $(".search-box").removeClass("search-desktop");
        // $(".search-box").slideUp("fast");
      } else {
        slim.removeClass("slim-open");
      }
    }
  });

  /*-----------------------------------------------------------------------------*/
  /*  Addiciona e remove classe ao clicar no menu hamburger
/*-----------------------------------------------------------------------------*/
  $(".hamburger").on("click", function () {
    let menu_clicado = document
      .getElementById("m-hamburger")
      .getAttribute("aria-expanded");
    // atrubui o heder a variavel
    let heder = $(".header");
    heder.addClass("fix-element");

    // atrubui o elemento body a variavel
    // adiciona overflow hiden ao elemento html para evitar a rolagem da página
    let body = $("html");
    body.addClass("scrollbars-hide");

    if (menu_clicado == "true") {
      heder.removeClass("fix-element");
      body.removeClass("scrollbars-hide");
    }
  });

  /*-----------------------------------------------------------------------------*/
  /*  Addiciona e remove classe ao clicar no menu hamburger
/*-----------------------------------------------------------------------------*/
  $(".h-slim").on("click", function () {
    let menu_clicado = document
      .getElementById("m-hamburger-slim")
      .getAttribute("aria-expanded");
    // atrubui o heder a variavel
    let heder = $(".header");
    heder.addClass("fix-element");

    // atrubui o elemento body a variavel
    // adiciona overflow hiden ao elemento html para evitar a rolagem da página
    let body = $("html");
    body.addClass("scrollbars-hide");

    $(".container-menu-top").css({ display: "none" });

    if (menu_clicado == "true") {
      heder.removeClass("fix-element");
      body.removeClass("scrollbars-hide");
      $(".container-menu-top").css({ display: "block" });
    }
  });

  /*-----------------------------------------------------------------------------*/
  /*  Função abre/fecha busca versão mobile
/*-----------------------------------------------------------------------------*/
  $(".btn-search").on("click", function (event) {
    event.preventDefault();

    // verifica se o menu slim esta na tela
    if ($(".menu-slim").hasClass("slim-open")) {
      if ($(".search-box").css("display") === "none") {
        $(".search-box").addClass("search-height");
        $(".search-box").addClass("search-desktop");
        // Abre/fecha box da busca
        $(".search-box").slideDown("fast");
        $("#search").focus();
        $("#search").attr("placeholder", "Digite um termo para buscar...");
      } else {
        $(".search-box").removeClass("search-height");
        $(".search-box").removeClass("search-desktop");
        $(".search-box").slideUp("fast");
      }
    } else {
      if ($(".search-box").css("display") === "none") {
        $(".search-box").addClass("search-desktop");
        // Abre/fecha box da busca
        $(".search-box").slideDown("fast");
        $("#search").focus();
        $("#search").attr("placeholder", "Digite um termo para buscar...");
        $(".search-box").removeClass("search-height");
      } else {
        $(".search-box").removeClass("search-desktop");
        $(".search-box").slideUp("fast");
      }
    }

    // Fecha a busca avançada se estiver aberta na tela
    if ($(".wrap-advsearch").hasClass("pad-top-mob")) {
      $(".wrap-advsearch").addClass("hide");
      $(".wrap-advsearch").removeClass("pad-top-mob");
    }

    return false;
  });

  /*-----------------------------------------------------------------------------*/
  /*  Função fecha busca quando o usuario clicar fora do campo da busca
/*-----------------------------------------------------------------------------*/
  // $("#search").on("focusout", function (event) {
  //   event.preventDefault();
  //   $(".navbar-nav:first-child, .item-search").slideToggle("fast");
  //   $(".search-box").removeClass("search-desktop");
  //   $(".search-box").slideUp("fast");
  // });

  /*-----------------------------------------------------------------------------*/
  /*  Função envia formulario (busca)
/*-----------------------------------------------------------------------------*/
  let form = document.getElementById("search-form");
  $("#search-button").on("click", function () {
    form.submit();
  });

  /*-----------------------------------------------------------------------------*/
  /*  Rolagem suave de tela para os links de Ancora, ligados uma section com ID
/*-----------------------------------------------------------------------------*/
  // $('a[href*="#m-"]:not([href="#m-"])').on('click', function() {
  //   let target = $(this.hash);
  //   //console.log(target.length);
  //   if (target.length) {
  //     $('html, body').animate({ scrollTop: target.offset().top }, 1000);
  //     $('.navbar-collapse').collapse('hide');
  //     return false;
  //   }
  // });

  /*-----------------------------------------------------------------------------/
/*  Adiciona slider no hero da home
/*-----------------------------------------------------------------------------*/

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    //centeredSlides: true,
    //centeredSlidesBounds: true,
    breakpoints: {
      300: {
        slidesOffsetAfter: 45,
        slidesOffsetBefore: 30,
        slidesPerView: 1.5,
      },
      576: {
        slidesOffsetAfter: 45,
        slidesOffsetBefore: 30,
        slidesPerView: 1.5,
      },
      768: {
        slidesOffsetAfter: 45,
        slidesOffsetBefore: 65,
        slidesPerView: 1.3,
      },
      992: {
        centeredSlides: true,
        slidesPerView: 1.5,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // -------------------------------------------
  // adiciona a funcionalidade de ir para o topo ao abrir um colapse
  $(".collapse").on("shown.bs.collapse", function (e) {
    $(this).prev().addClass("active");
    var $card = $(this).closest(".card");
    var $open = $($(this).data("parent")).find(".collapse.show");

    // altura do topo
    var additionalOffset = 200;

    if ($card.prevAll().filter($open.closest(".card")).length !== 0) {
      additionalOffset = $open.height();
    }

    $("html,body").animate(
      {
        scrollTop: $card.offset().top - additionalOffset,
      },
      500
    );
  });

  $(".collapse").on("hidden.bs.collapse", function () {
    $(this).prev().removeClass("active");
  });
  // -------------------------------------------

  /*-----------------------------------------------------------------------------*/
  /*  Adiciona funcionalodade de select mutiplo
/*-----------------------------------------------------------------------------*/
  $(document).ready(function () {
    $(".js-example-basic-multiple").select2({
      width: "100%",
    });
  });
})(jQuery);

/*-----------------------------------------------------------------------------*/
/*  Adiciona Scripts fora do Jquery
/*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*/
/*  Abre e fecha o box de filtros avançados da pesquisa principal
/*-----------------------------------------------------------------------------*/

const adv_search = document.getElementById("adv-search");
const adv_search_mob = document.getElementById("adv-search-mob");
const box_search = document.querySelector(".wrap-advsearch");

// Adiciona ou remove a classe hide da div de classe=wrap-advsearch
adv_search.addEventListener("click", () => {
  box_search.classList.toggle("hide");
});

adv_search_mob.addEventListener("click", () => {
  box_search.classList.toggle("hide");
  box_search.classList.toggle("pad-top-mob");
});

const close_search = document.getElementById("close-search");

// Adiciona ou remove a classe hide da div de classe=wrap-advsearch
close_search.addEventListener("click", () => {
  box_search.classList.toggle("hide");
});

/*-----------------------------------------------------------------------------*/
/*  Abre e fecha o box de filtros refinados da pesquisa principal
/*-----------------------------------------------------------------------------*/

const refine_search = document.getElementById("inp-refine-search");
const box_refine_search = document.querySelector(".refine-search");

// Adiciona ou remove a classe hide da div de classe=refine-search
refine_search.addEventListener("click", () => {
  box_refine_search.classList.toggle("hide");
});

/*-----------------------------------------------------------------------------*/
/*  Adiciona input range de data no input text usando JS adicional
/*-----------------------------------------------------------------------------*/
$("#inp-data-periodo").slider({
  min: 1500,
  max: 1825,
  value: [1500, 1825],
  //tooltip: "always",
  focus: true,
});

$("#inp-data-periodo").on("slide", function (slideEvt) {
  let result = slideEvt.value.toString().split(",");
  //let one = i.substr(0, 4);
  // var index = i.indexOf(",");
  // var one = i.substr(0, index);
  // var two = i.substr(index + 1, i.length - index - 1);

  //$("#range-values").text(slideEvt.value);
  $("#range-values").text(`De ${result[0]} até ${result[1]}`);
});

/*-----------------------------------------------------------------------------*/
/*  Search box advaanced functions
/*-----------------------------------------------------------------------------*/

// Adicionar mais campos ao botão de adicionar revoltas
var countRevolt = 0;
const addButtonRev = document.querySelector("#add-revolt");
const wrapRev = document.querySelector("#wrap-input-revolta");
addButtonRev.addEventListener("click", function () {
  addButtonsSearch(wrapRev, addButtonRev, countRevolt++);
});

var countLocal = 0;
const addButtonLoc = document.querySelector("#add-local");
const wrapLocal = document.querySelector("#wrap-input-local");
addButtonLoc.addEventListener("click", function () {
  addButtonsSearch(wrapLocal, addButtonLoc, countLocal++);
});

var countRebelde = 0;
const addButtonReb = document.querySelector("#add-rebelde");
const wrapReb = document.querySelector("#wrap-input-rebelde");
addButtonReb.addEventListener("click", function () {
  addButtonsSearch(wrapReb, addButtonReb, countRebelde++);
});

var countAutoridades = 0;
const addButtonAut = document.querySelector("#add-autoridades");
const wrapAut = document.querySelector("#wrap-input-autoridades");
addButtonAut.addEventListener("click", function () {
  addButtonsSearch(wrapAut, addButtonAut, countAutoridades++);
});

var countLiderancas = 0;
const addButtonLid = document.querySelector("#add-liderancas");
const wrapLid = document.querySelector("#wrap-input-liderancas");
addButtonLid.addEventListener("click", function () {
  addButtonsSearch(wrapLid, addButtonLid, countLiderancas++);
});

var countReus = 0;
const addButtonReus = document.querySelector("#add-reus");
const wrapReus = document.querySelector("#wrap-input-reus");
addButtonReus.addEventListener("click", function () {
  addButtonsSearch(wrapReus, addButtonReus, countReus++);
});

var countDelatores = 0;
const addButtonDela = document.querySelector("#add-delatores");
const wrapDela = document.querySelector("#wrap-input-delatores");
addButtonDela.addEventListener("click", function () {
  addButtonsSearch(wrapDela, addButtonDela, countDelatores++);
});

function addButtonsSearch(wrap, button, count) {
  let addButton = button;
  // Faz com que o formulário para de submeter
  addButton.type = "button";

  let wrapInputRevolta = wrap;

  let firstInput = wrapInputRevolta.querySelectorAll("input");
  let newDiv = document.createElement("div");
  let newInput = document.createElement("input");
  let deleteButtom = document.createElement("button");

  // Adiciona propriedades ao botão de exclusão
  deleteButtom.textContent = " - ";
  deleteButtom.type = "button";

  // Adiciona nome e tipo ai novo input de texto
  newInput.name = firstInput[0].name + "_" + count;
  newInput.type = firstInput[0].type;

  wrapInputRevolta.appendChild(newDiv);
  newDiv.appendChild(newInput);
  newDiv.appendChild(deleteButtom);

  deleteButtom.addEventListener("click", function () {
    newDiv.removeChild(newInput);
    newDiv.removeChild(deleteButtom);
  });
}

/*-----------------------------------------------------------------------------*/
/*  Adiciona funcionalidade ao campo select de conquistas
/*-----------------------------------------------------------------------------*/

let inputConquistas = document.querySelector("#inp-conquistas");
inputConquistas.addEventListener("change", (event) => {
  const result = document.querySelector(".result-conquistas");

  //removeClass
  if (event.target.value === "Parcialmente atendidas") {
    //result.classList.toggle("hide");
    result.classList.remove("hide");
  } else {
    //result.textContent = `You like`;
    result.classList.add("hide");
  }
});

/*-----------------------------------------------------------------------------*/
/*  Global modal window
/*-----------------------------------------------------------------------------*/

const openBtn = document.querySelectorAll("[data-modal-target]");
const closeBtn = document.querySelectorAll("[data-modal-close]");
const overlay = document.getElementById("overlay");

openBtn.forEach((btn) => {
  const modal = document.querySelector(btn.dataset.modalTarget); //Checks the target of our data-modal-target. could have also used '.modal'
  btn.addEventListener("click", () => {
    openModal(modal);
  });
});

closeBtn.forEach((btn) => {
  const modal = btn.closest(".modal");
  btn.addEventListener("click", () => {
    closeModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == undefined) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == undefined) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
