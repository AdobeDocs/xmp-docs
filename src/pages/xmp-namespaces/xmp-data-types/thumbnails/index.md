---
title: Thumbnail
description: A thumbnail image for a file.
---

# Thumbnail

A thumbnail image for a file.

- The namespace URI is [http://ns.adobe.com/xap/1.0/g/img/](http://ns.adobe.com/xap/1.0/g/img/)

- The preferred namespace prefix is xmpGImg

|    |           |    |
|----|-----------|----|
|**Name**|**Description**|**Type**|
|xmpGImg:format|The image encoding. Defined value: JPEG.  |Closed choice of [Text](../../../xmp-namespaces/xmp-data-types/index.md#text)|
|xmpGImg:height|Height in pixels  |[Integer](../../../xmp-namespaces/xmp-data-types/index.md#integer)|
|xmpGImg:width|Width in pixels  |[Integer](../../../xmp-namespaces/xmp-data-types/index.md#integer)|
|xmpGImg:image|The full thumbnail image data, converted to base 64 notation(according to section 6.8 of RFC 2045). This is the thumbnail data typically found in a digital image, such as the value of tag 513 in a JPEG stream.  |[Text](../../../xmp-namespaces/xmp-data-types/index.md#text)|
