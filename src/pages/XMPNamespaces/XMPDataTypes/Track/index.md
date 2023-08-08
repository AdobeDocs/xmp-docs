# Track

A named set of Markers, that can specify different default time-frame rates from those of the contained markers.

- The namespace URI is http://ns.adobe.com/xmp/1.0/DynamicMedia/

- The preferred namespace prefix is xmpDM

|    |           |    |
|----|-----------|----|
|**Name**|**Description**|**Type**|
|xmpDM:frameRate|The default frame rate for the markers in the track  |[FrameRate](./index.md#framerate)|
|xmpDM:markers|An ordered list of markers  |Ordered array of [Marker](./index/Marker.md)|
|xmpDM:trackName|The name of the track (For example: Lyrics, Speech, Voiceover, Audition Conditions, and so on)  |[Text](./index.md#text)|
|xmpDM:trackType|The default marker types for all markers in the track.See [Marker](Marker.md) field xmpDM:type. |Open Choice of [Text](./index.md#text)|
