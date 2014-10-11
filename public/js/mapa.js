function iniciar() {
	var mapOptions = {
		center: new google.maps.LatLng(22.1356658, -100.9607303,12),
		zoom: 20,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
}