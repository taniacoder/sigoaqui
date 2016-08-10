	function responsive() {
	    this.altura = window.innerHeight
	    this.ancho = window.innerWidth
	    var r = document.getElementById("none")
	    var cf_r = function() {
	        var cf = document.getElementById("container")
	        if (ancho < 768){
	        cf.style.height = altura-48 + "px"
	    	}
	    	else{
	    	cf.style.height = altura + "px"	
	    	}
	    }
	    if (r && ancho < 768) {
	        r.style.display = 'none';
	        cf_r()
	    } else {
	        r.style.display = 'block';
	        cf_r()
	    }
	}

	$(window).load(function() {
	    responsive();
	    obtener_modal(ancho)
	    window.addEventListener('resize', responsive);
	    poner_modal()	    
	});

	$(document).on('click', '#ver', function() {
	    $('html,body').animate({scrollTop: $("#section1").offset().top}, 800);
	});

	function poner_modal() {
	    var chichico = document.getElementsByClassName("chichico")
	    for (var i = 0; i < chichico.length; i++) {
	        var modal = document.createElement("div");
	        modal.innerHTML = '<a href= "" type="button" data-toggle="modal" data-target=#' + [i] + '><i class="fa fa-play-circle-o fa-5x" aria-hidden="true"></i></a>'
	        chichico[i].appendChild(modal)
	    }
	}

	function obtener_modal(ancho) {
	    var modal_full_screen = document.querySelectorAll("#modal-fullscreen")
	    for (var j = 0; j < modal_full_screen.length; j++) {
	        modal_full_screen[j].setAttribute('id', j);
	        var modal_dialog = document.createElement("div")
	        modal_dialog.className = "modal-dialog"
	        modal_dialog.innerHTML = '<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">Kristel Begazo: Madre de dos hijas que fue violentada por su ex esposo.  Sufrió cortes en el rostro y cuerpo. </h4></div><div class="modal-footer"></div></div>'
	        modal_full_screen[j].appendChild(modal_dialog)
	    }

	    var obtener_md = document.getElementsByClassName("modal-content")
	    for (var k = 0; k < obtener_md.length; k++) {
	        switch (obtener_md[k]) {
	            case obtener_md[0]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<object width="100%" height="315" src="https://webcast.sambatech.com.br/806AD0/origin1/account/236/8/2016-08-07/video/5977e89488bcb9dd888d6675370fb28f/LR_EDICION_97_720p.mp4" frameborder="0" allowfullscreen type="application/x-shockwave-flash"></object><div class="col-xs-12 col-sm-6">   <p class="text-modal">Kristel Begazo es una de las  más de 921 mujeres que desde el 2009 han estado a punto de morir a causa golpes. Madre de dos niñas que tristemente tuvieron que presenciar como su padre, Johnny Jalsovec Pimentel, ahorcó,  golpeó y acuchilló en el cuerpo y rostro a quién hacía unas horas había jurado amor eterno en una velada romántica.</p>   <p class="comillas">“Mi ex esposo, planificó mi muerte desfigurándome el rostro con lesiones contundentes. Mis hijas, le rogaban que deje de golpearme”</p> <p class="text-modal">Inconsciente, después de haber sido lanzada del segundo piso,  Kristel Begazo apenas podía respirar. Tenía los huesos rotos, el rostro desfigurado.</p>  <p class="comillas">“El raptó a mis hijas en el momento en el que yo me estaba ahogando con la sangre”</p> <p class="text-modal"> El dolor físico no se comparaba con el dolor de su alma. Los ojos se le llenaban de lágrimas pero no podía llorar por la gravedad de sus heridas. Sus lagrimas y tristeza contenida se hicieron palabras escritas en tres rollos de papel higiénico que fueron el inicio de su libro “Cuando no me amo”. Johnny Jalsovec Pimentel fue denunciado pero la lentitud de salida para la orden de captura le dio el tiempo suficiente para fugarse y ahora está prófugo. Como si no fuera suficiente, es Kristel Begazo quién tiene que renovar la orden de captura, cada seis meses, para su agresor siga siendo buscado.</p></div><div class="col-xs-12 col-sm-6 v-center"><img src="./images/foto_roko.jpg" class="img-responsive foto_modal"/></div>'
	                obtener_md[0].appendChild(modal_body)
	                break;
	            case obtener_md[1]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[1].appendChild(modal_body)
	                break;
	            case obtener_md[2]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[2].appendChild(modal_body)
	                break;
	            case obtener_md[3]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[3].appendChild(modal_body)
	                break;
	            case obtener_md[4]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[4].appendChild(modal_body)
	                break;
	            case obtener_md[5]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[5].appendChild(modal_body)
	                break;
	            case obtener_md[6]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[6].appendChild(modal_body)
	                break;
	            case obtener_md[7]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[7].appendChild(modal_body)
	                break;
	            case obtener_md[8]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[8].appendChild(modal_body)
	                break;
	        }
	        obtener_md[k].insertBefore(modal_body, obtener_md[k].childNodes[1]);
	        if (ancho < 601) {
	            $('.modal-body').children('iframe').css("height", "180");;
	        }

	        if (ancho > 600 && ancho<1000) {
	            $('.modal-body').children('iframe').css("height", "250");;
	        }
	    }
	    footer_modal()
	}

	function footer_modal() {
	    var poner_redes = document.getElementsByClassName("modal-footer")
	    for (z = 0; z < poner_redes.length; z++) {
	        var redes = document.createElement("div")
	        redes.innerHTML = ''
	        poner_redes[z].appendChild(redes)
	    }
	}

$(".modal-fullscreen").on('show.bs.modal', function () {  setTimeout( function() {    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");  }, 0);});
$(".modal-fullscreen").on('hidden.bs.modal', function () {  $(".modal-backdrop").addClass("modal-backdrop-fullscreen");});