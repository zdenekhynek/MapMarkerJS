MapMakerJS
==========

Create rich interactive Google Maps markers.

The MapMarkerJS library enables you to create Google Maps Markers from any HTML content ( including videos, iframes, vector graphics, flash files etc. ). Furthemore the HMTL withing marker is  is still fully accessible so you can create truly animated and fully interactive markers.

Even with Symbols introduced recently, I didn't find a way in Google Maps Api V3 to have creative freedom while working with Markers. The Flash version of API, now deprecated, allows for creating custom marker class, which enables you have fully interactive marker graphics, with animations, videos etc. In the latest V3 version of API, you cannot do that, or at least I didn't find a way as easy as in Flash.

So I write this little MapMarkerJS class, which takes advantage of the google.maps.OverlayView. This class enables you to put arbitrary overlay at specific location. The library does nothing else than appends supplied HTML content to of the panes. 

The idea came to when I was trying to replicate this flash project using gRapheal and Google Maps.

This is heavily "work in progress" and there might be some issues with performance, or certain dom elements.

The first example shows img elements, which have fadeIn and fadeOut base on mouse position.

The second example shows iframes with embedded youtube videos.

The third example shows gRaphael piecharts.