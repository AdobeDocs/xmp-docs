---
title: XMP Dynamic Media namespace
description: This namespace specifies properties used by the Adobe dynamic media group.
---

# XMP Dynamic Media namespace

This namespace specifies properties used by the Adobe dynamic media group.

- The namespace URI is [http://ns.adobe.com/xmp/1.0/DynamicMedia/](http://ns.adobe.com/xmp/1.0/DynamicMedia/)

- The preferred namespace prefix is xmpDM

|    |           |    |
|----|-----------|----|
|**Name**|**Description**|**Type**|
|xmpDM:absPeakAudioFilePath|The absolute path to the file’s peak audio file. If empty, no peak file exists.  |[URI](../xmp-data-types/index.md#uri)|
|xmpDM:album|The name of the album.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:altTapeName|An alternative tape name, set via the project window or timecode dialog in Premiere. If an alternative name has been set and has not been reverted, that name is displayed.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:altTimecode|A timecode set by the user. When specified, it is used instead of the startTimecode.  |[Timecode](../xmp-data-types/timecode/index.md)|
|xmpDM:artist|The name of the artist or artists.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:audioChannelType|The audio channel type. One of:`Mono`,`Stereo`,`5.1`,`7.1`,`16 Channel`,`Other`|Closed Choice of [Text](../xmp-data-types/index.md#text)|
|xmpDM:audioCompressor|The audio compression used. For example, MP3.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:audioSampleRate|The audio sample rate. Can be any value, but commonly 32000, 44100, or 48000.  |[Integer](../xmp-data-types/index.md#integer)|
|xmpDM:audioSampleType|The audio sample type. One of:`8Int`,`16Int`,`24Int`,`32Int`,`32Float`,`Compressed`,`Packed`,`Other`|Closed Choice of [Text](../xmp-data-types/index.md#text)|
|xmpDM:beatSpliceParams|Additional parameters for Beat Splice stretch mode.  |[beatSpliceStretch](../xmp-data-types/beat-splice-stretch/index.md)|
|xmpDM:cameraAngle|The orientation of the camera to the subject in a static shot, from a fixed set of industry standard terminology. Predefined values include: `Low Angle` , `Eye Level` , `High Angle` , `Overhead Shot` , `Birds Eye Shot` , `Dutch Angle` , `POV` , `Over the Shoulder` , `Reaction Shot`  |Open Choice of [Text](../xmp-data-types/index.md#text)|
|xmpDM:cameraLabel|A description of the camera used for a shoot. Can be any string, but is usually simply a number, for example "1", "2", or more explicitly "Camera 1"  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:cameraModel|The make and model of the camera used for a shoot.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:cameraMove|The movement of the camera during the shot, from a fixed set of industry standard terminology. Predefined values include:`Aerial` , `Boom Up` , `Boom Down` , `Crane Up` , `Crane Down` , `Dolly In` , `Dolly Out` , `Pan Left` , `Pan Right` , `Pedestal Up` , `Pedestal Down` , `Tilt Up` , `Tilt Down` , `Tracking` , `Truck Left` , `Truck Right` , `Zoom In` , `Zoom Out`|Open Choice of [Text](../xmp-data-types/index.md#text)|
|xmpDM:client|The client for the job of which this shot or take is a part.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:comment|A user’s comments.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:composer|The composer’s name.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:contributedMedia|An unordered list of all media used to create this media.  |Unordered array of [Media](../xmp-data-types/media/index.md)|
|xmpDM:director|The director of the scene.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:directorPhotography|The director of photography for the scene.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:duration|The duration of the media file.  |[Time](../xmp-data-types/time/index.md)|
|xmpDM:engineer|The engineer’s name.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:fileDataRate|The file data rate in megabytes per second. For example:"36/10" = 3.6 MB/sec  |[Rational](../xmp-data-types/index.md#rational)|
|xmpDM:genre|The name of the genre.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:good|A checkbox for tracking whether a shot is a keeper.  |[Boolean](../xmp-data-types/index.md#boolean)|
|xmpDM:instrument|The musical instrument.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:introTime|The duration of lead time for queuing music.  |[Time](../xmp-data-types/time/index.md)|
|xmpDM:key|The audio’s musical key. One of:`C`, `C#`, `D`, `D#`, `E`, `F`, `F#`, `G`, `G#`, `A`, `A#`, `B`  |Closed Choice of [Text](../xmp-data-types/index.md#text)|
|xmpDM:logComment|User’s log comments.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:loop|When true, the clip can be looped seamlessly.  |[Boolean](../xmp-data-types/index.md#boolean)|
|xmpDM:numberOfBeats|The total number of musical beats in a clip; for example, the beats-per-second times the duration in seconds.  |[Real](../xmp-data-types/index.md#real)|
|xmpDM:markers|An ordered list of markers. See also [xmpDM:Tracks](../xmp-data-types/track/index.md).  |Ordered array of [Marker](../xmp-data-types/marker/index.md)|
|xmpDM:outCue|The time at which to fade out.  |[Time](../xmp-data-types/time/index.md)|
|xmpDM:projectName|The name of the project of which this file is a part.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:projectRef|A reference to the project of which this file is a part.  |[ProjectLink](../xmp-data-types/project-link/index.md)|
|xmpDM:pullDown|The sampling phase of film to be converted to video (pull-down). One of:`WSSWW` , `SSWWW` , `SWWWS` , `WWWSS` , `WWSSW` , `WWWSW` , `WWSWW` , `WSWWW` , `SWWWW` , `WWWWS`  |Closed Choice of [Text](../xmp-data-types/index.md#text)|
|xmpDM:relativePeakAudioFilePath|The relative path to the file’s peak audio file. If empty, no peak file exists.  |[URI](../xmp-data-types/index.md#uri)|
|xmpDM:relativeTimestamp|The start time of the media inside the audio project.  |[Time](../xmp-data-types/time/index.md)|
|xmpDM:releaseDate|The date the title was released.  |[Date](../xmp-data-types/index.md#date)|
|xmpDM:resampleParams|Additional parameters for Resample stretch mode.  |[resampleStretch](../xmp-data-types/resample-stretch/index.md)|
|xmpDM:scaleType|The musical scale used in the music. One of: `Major`, `Minor`, `Both`, `Neither`. Neither is most often used for instruments with no associated scale, such as drums.  |Closed Choice of [Text](../xmp-data-types/index.md#text)|
|xmpDM:scene|The name of the scene.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:shotDate|The date and time when the video was shot.  |[Date](../xmp-data-types/index.md#date)|
|xmpDM:shotDay|The day in a multiday shoot. For example: Day 2, Friday.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:shotLocation|The name of the location where the video was shot. For example: "Oktoberfest, Munich Germany". For more accurate positioning, use the Exif GPS values.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:shotName|The name of the shot or take.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:shotNumber|The position of the shot in a script or production, relative to other shots. For example: 1, 2, 1a, 1b, 1.1, 1.2.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:shotSize|The size or scale of the shot framing, from a fixed set of industry standard terminology. Predefined values include:`ECU --extreme close-up` , `MCU -- medium close-up` , `CU -- close-up` , `MS -- medium shot` , `WS -- wide shot` , `MWS -- medium wide shot` , `EWS -- extreme wide shot`  |Open Choice of [Text](../xmp-data-types/index.md#text)|
|xmpDM:speakerPlacement|A description of the speaker angles from centre front in degrees. For example: “Left = -30, Right = 30, Centre = 0, LFE = 45, Left Surround = -110, Right Surround = 110”  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:startTimecode|The timecode of the first frame of video in the file, as obtained from the device control.  |[Timecode](../xmp-data-types/timecode/index.md)|
|xmpDM:stretchMode|The audio stretch mode. One of:`Fixed length,` , `Time-Scale` , `Resample` , `Beat Splice` , `Hybrid`  |Closed Choice of [Text](../xmp-data-types/index.md#text)|
|xmpDM:takeNumber|A numeric value indicating the absolute number of a take.  |[Integer](../xmp-data-types/index.md#integer)|
|xmpDM:tapeName|The name of the tape from which the clip was captured, as set during the capture process.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:tempo|The audio’s tempo.  |[Real](../xmp-data-types/index.md#real)|
|xmpDM:timeScaleParams|Additional parameters for Time-Scale stretch mode.  |[timeScaleStretch](../xmp-data-types/time-scale-stretch/index.md)|
|xmpDM:timeSignature|The time signature of the music. One of:`2/4`, `3/4`, `4/4`, `5/4`, `7/4`, `6/8`, `9/8`, `12/8`, `other`  |Closed Choice of [Text](../xmp-data-types/index.md#text)|
|xmpDM:trackNumber|A numeric value indicating the order of the audio file within its original recording.  |[Integer](../xmp-data-types/index.md#integer)|
|xmpDM:Tracks|An unordered list of tracks. A track is a named set of markers, which can specify a frame rate for all markers in the set.See also [xmpDM:markers](../xmp-data-types/marker/index.md).  |Unordered array of [Track](../xmp-data-types/track/index.md)|
|xmpDM:videoAlphaMode|The alpha mode. One of: straight, pre-multiplied , or none  |Closed Choice of [Text](../xmp-data-types/index.md#text)|
|xmpDM:videoAlphaPremultipleColor|A colour in CMYK or RGB to be used as the premultiple colour when alpha mode is premultiplied.  |[Colorants](../xmp-data-types/colorant/index.md)|
|xmpDM:videoAlphaUnityIsTransparent|When true, unity is clear, when false, it is opaque.  |[Boolean](../xmp-data-types/index.md#boolean)|
|xmpDM:videoColorSpace|The colour space. One of:`sRGB (used by Photoshop)`, `CCIR-601 (used for NTSC)`, `CCIR-709 (used for HD)`  |Closed Choice of [Text](../xmp-data-types/index.md#text)|
|xmpDM:videoCompressor|Video compression used. For example, jpeg.  |[Text](../xmp-data-types/index.md#text)|
|xmpDM:videoFieldOrder|The field order for video. One of:`Upper`, `Lower`, `Progressive`  |Closed Choice of [Text](../xmp-data-types/index.md#text)|
|xmpDM:videoFrameRate|The video frame rate. Predefined values include:`24`, `NTSC`, `PAL`  |Open Choice of [Text](../xmp-data-types/index.md#text)|
|xmpDM:videoFrameSize|The frame size. For example: w:720, h: 480, unit:pixels  |[Dimensions](../xmp-data-types/dimensions/index.md)|
|xmpDM:videoPixelAspectRatio|The aspect ratio, expressed as wd/ht. For example: “648/720” = 0.9  |[Rational](../xmp-data-types/index.md#rational)|
|xmpDM:videoPixelDepth|The size in bits of each colour component of a pixel. Standard Windows 32-bit pixels have 8 bits per component. One of:`8Int`, `16Int`, `24Int`, `32Int`, `32Float`, `Other`|Closed Choice of [Text](../xmp-data-types/index.md#text)|
|xmpDM:partOfCompilation|Part of compilation.|[Boolean](../xmp-data-types/index.md#boolean)|
|xmpDM:lyrics|Lyrics text. No association with timecode.|[Text](../xmp-data-types/index.md#text)|
|xmpDM:discNumber|If in a multi-disc set, might contain total number of discs. For example: 2/3.|[Text](../xmp-data-types/index.md#text)|
