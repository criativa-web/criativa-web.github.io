//----------------------Smoothscroll---------------------\\
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    } // End if
  });
});

//----------------------Portfolio---------------------\\
   filterSelection("all")
   function filterSelection(c) {
     var x, i;
     x = document.getElementsByClassName("col");
     if (c == "all") c = "";
     for (i = 0; i < x.length; i++) {
       w3RemoveClass(x[i], "show");
       if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
     }
   }

   function w3AddClass(element, name) {
     var i, arr1, arr2;
     arr1 = element.className.split(" ");
     arr2 = name.split(" ");
     for (i = 0; i < arr2.length; i++) {
       if (arr1.indexOf(arr2[i]) == -1) {
         element.className += " " + arr2[i];
       }
     }
   }
   function w3RemoveClass(element, name) {
     var i, arr1, arr2;
     arr1 = element.className.split(" ");
     arr2 = name.split(" ");
     for (i = 0; i < arr2.length; i++) {
       while (arr1.indexOf(arr2[i]) > -1) {
         arr1.splice(arr1.indexOf(arr2[i]), 1);
       }
     }
     element.className = arr1.join(" ");
   }
   var btnContainer = document.getElementById("myBtnContainer");
   var btns = btnContainer.getElementsByClassName("btn");
   for (var i = 0; i < btns.length; i++) {
     btns[i].addEventListener("click", function(){
       var current = document.getElementsByClassName("active");
       current[0].className = current[0].className.replace(" active", "");
       this.className += " active";
     });
   }

//----------------------Preloader---------------------\\

   $(document).ready(function () {
      $.preloader({
           bgColor: '#101d2c',
           spinner:"spinner"
      });
   });

   ! function(d) {
       d.preloader = function(i) {
           var s = d.extend({
                   targetClass: "preloader",
                   timeToHide: 1200,
                   bgColor: "#101d2c",
                   spinner: "spinner"
               }, i),
               c = '<div class="fl fl-spinner spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',
               e = d("body").find("." + s.targetClass);
           e.each(function() {
               switch (s.spinner) {
                   case "spinner":
                       e.html(c);
                   default:
                       e.html(c)
               }
           }), e.css({
               backgroundColor: s.bgColor
           }), setTimeout(function() {
               d(e).fadeOut()
           }, s.timeToHide)
       }
   }(jQuery);

//----------------------Progressbar---------------------\\
function bar_group() {
    group_ident = 1, $(".bar_group").each(function() {
        $(this).addClass("group_ident-" + group_ident), $(this).data("gid", group_ident), group_ident++
    })
}

function get_max() {
    $(".bar_group").each(function() {
        var a = [];
        $(this).children().each(function() {
            a.push($(this).attr("data-value"))
        }), max_arr["group_ident-" + $(this).data("gid")] = a, void 0 !== $(this).attr("data-max") ? $(this).data("bg_max", $(this).attr("data-max")) : $(this).data("bg_max", Math.max.apply(null, a))
    })
}

function data_labels() {
    $(".bar_group__bar").each(function() {
        void 0 !== $(this).attr("data-label") && $('<p class="b_label">' + $(this).attr("data-label") + "</p>").insertBefore($(this))
    })
}

function show_values() {
    $(".bar_group__bar").each(function() {
        "true" == $(this).attr("data-show-values") && ($(this).css("margin-bottom", "14px"), void 0 !== $(this).attr("data-unit") ? ($(this).append('<p class="bar_label_min">0 ' + $(this).attr("data-unit") + "</p>"), $(this).append('<p class="bar_label_max">' + $(this).parent().data("bg_max") + " " + $(this).attr("data-unit") + "</p>")) : ($(this).append('<p class="bar_label_min">0</p>'), $(this).append('<p class="bar_label_max">' + $(this).parent().data("bg_max") + "</p>")))
    })
}

function show_tooltips() {
    $(".bar_group__bar").each(function() {
        "true" == $(this).attr("data-tooltip") && ($(this).css("margin-bottom", "40px"), $(this).append('<div class="b_tooltip"><span>' + $(this).attr("data-value") + '</span><div class="b_tooltip--tri"></div></div>'))
    })
}

function in_view(a) {
    var t = $(a),
        i = $(window),
        s = i.scrollTop(),
        r = s + i.height(),
        n = t.offset().top,
        o = n + t.height();
    r > o - 45 && t.css("width", t.attr("data-value") / t.parent().data("bg_max") * 100 + "%")
}

function bars() {
    bar_group(), get_max(), data_labels(), show_tooltips(), show_values()
}
max_arr = {}, $(".bar_group__bar").each(function() {
    in_view($(this))
}), $(window).scroll(function() {
    $(".bar_group__bar").each(function() {
        in_view($(this))
    })
}), bars();

//----------------------Typer---------------------\\
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
