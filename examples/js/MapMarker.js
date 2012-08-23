function MapMarker( options ) {

	//initialize all properties.
	this.position_ = options.position;
	this.element = options.element;
	this.map_ = options.map;
	this.anchor_ = options.anchor;

	//error messages
	if( !this.position_ || !this.map_ || !this.element ){
		console.error("Missing 'position', 'map' or 'element' in mapMarker options")
		return;
	} 

	//set position to absolute, so that we can set left and top 
	this.element.style.position = "absolute";

	//explicitly call setMap() on this overlay
	this.setMap( this.map_ );
}

MapMarker.prototype = new google.maps.OverlayView();

MapMarker.prototype.onAdd = function() {

	//TODO allow specifying to which pane put markers
	var panes = this.getPanes();
	panes.overlayMouseTarget.appendChild( this.element );
}

MapMarker.prototype.draw = function() {

	// retrieve the projection and convert latLng to screen pixels
	var overlayProjection = this.getProjection();
	var mapPosition = overlayProjection.fromLatLngToDivPixel( this.position_ );
		console.log( this.position_ );
	//take anchor into account
	if( this.anchor_ ) {
		console.log("fads");
		mapPosition.x -= this.anchor_.x;
		mapPosition.y -= this.anchor_.y;
	}

	//position element
	this.element.style.left = mapPosition.x + 'px';
	this.element.style.top = mapPosition.y + 'px';

	console.log( mapPosition.x, mapPosition.y );
}

MapMarker.prototype.onRemove = function() {
	//remove and everything
	this.element.parentNode.removeChild( this.element );
	this.element = null;
}