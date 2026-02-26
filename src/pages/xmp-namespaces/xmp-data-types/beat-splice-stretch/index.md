# beatSpliceStretch

A set of parameters used when stretching audio using the Beat Splice stretch mode.

- The namespace URI is http://ns.adobe.com/xmp/1.0/DynamicMedia/

- The preferred namespace prefix is xmpDM

|    |           |    |
|----|-----------|----|
|**Name**|**Description**|**Type**|
|xmpDM:riseInDecibel|The amount sound must increase in amplitude to detect a beat.  |[Real](../../../xmp-namespaces/xmp-data-types/index.md#real)|
|xmpDM:riseInTimeDuration|The duration of the sampling window used to measure the audio increase for locating beats.  |[Time](../../../xmp-namespaces/xmp-data-types/time/index.md)|
|xmpDM:useFileBeatsMarker|When true, the file beat markers are used for stretching. Otherwise the rise and duration fields are used to automatically locate the beats.  |[Boolean](../../../xmp-namespaces/xmp-data-types/index.md#boolean)|
