MapMakerJS
==========

Even with Symbols introduced recently, I didn't find a way in Google Maps Api V3 to have creative freedom while working with Markers. It was the one feature I missed most from the Flash version of the API.

So I wrote a little MapMarker class, which enables you to create Google Maps Markers from any HTML content ( including videos, iframes, vector graphics, flash files etc. ). Furthemore the HMTL within marker is is still fully accessible so you can create truly animated and fully interactive markers. The class takes advantage of the google.maps.OverlayView.

<strong>Example 1 - img element with fadeIns and fadeOuts</strong>

<iframe src="http://blog.zdenekhynek.cz/examples/mapmarkerjs/example1.html" width="505" height="342"></iframe>

<a title="Example 1" href="http://blog.zdenekhynek.cz/examples/mapmarkerjs/example1.html" target="_blank">View example</a> <a title="Sources example 1" href="http://blog.zdenekhynek.cz/examples/mapmarkerjs/example1.zip">Download sources</a>

<strong>Example 2 -  iframes with embedded youtube videos</strong>

<iframe src="http://blog.zdenekhynek.cz/examples/mapmarkerjs/example2.html" width="505" height="342"></iframe>

<a title="Example 2" href="http://blog.zdenekhynek.cz/examples/mapmarkerjs/example2.html" target="_blank">View example</a> <a title="Sources example 2" href="http://blog.zdenekhynek.cz/examples/mapmarkerjs/example2.zip">Download sources</a>

<strong>Example 2 -  gRaphael piecharts</strong>

<iframe src="http://blog.zdenekhynek.cz/examples/mapmarkerjs/example3.html" width="505" height="342"></iframe>

<a title="Example 3" href="http://blog.zdenekhynek.cz/examples/mapmarkerjs/example3.html" target="_blank">View example</a> <a title="Sources example 3" href="http://blog.zdenekhynek.cz/examples/mapmarkerjs/example3.zip">Download sources</a>

The idea for the library came to me when I was trying to replicate this flash project (<a href="http://www.geographics.cz/velov/">http://www.geographics.cz/velov/</a>) using gRapheal and Google Maps. It's heavily "work in progress" and there might be some issues with performance, or certain dom elements.

The library is available on <a title="MapMarkerJS" href="https://github.com/zdenekhynek/MapMarkerJS" target="_blank">Github</a> as well.

&nbsp;