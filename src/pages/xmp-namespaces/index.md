# XMP namespace definitions

The XMP namespaces define a set of properties. In any given XMP Packet, a property may be absent or present.For any given XMP, there is no requirement that all properties from a given namespace must be present. For structured properties, there is no requirement that all fields be present (unless otherwise specified by a namespace).

XMP metadata may include properties from one or more of the namespaces. For example, a typical subset used by many Adobe applications might include the following: 	

* Dublin Core namespace: **dc:title, dc:creator, dc:description, dc:subject, dc:format, dc:rights**
* XMP basic namespace: **xmp:CreateDate, xmp:CreatorTool, xmp:ModifyDate, xmp:MetadataDate**
* XMP rights management namespace: **xmpRights:WebStatement, xmpRights:Marked**
* XMP media management namespace: **xmpMM:DocumentID**

XMP defines namespaces into *two* catagories:

1. *XMP standard namespaces*, provides namespace definitions for standard general-purpose namespaces.
2. *Specialized Namespaces*, provides namespace definitions for namespaces that are specialized for Adobe applications or usages

## XMP Standard Namespaces

* [XMP Namespace](xmp/index.md)
* [XMP Media Management Namespace](xmp-mm/index.md)
* [XMP Basic Job Ticket Namespace](xmp-bj/index.md)
* [XMP Paged-text Namespace](xmp-t-pg/index.md)
* [XMP Dynamic Media Namespace](xmp-dm/index.md)
* [XMP Rights Management Namespace](xmp-rights/index.md)

## XMP Specialized Namespaces

* [Adobe PDF Namespace](pdf/index.md)
* [Photoshop Namespace](photoshop/index.md)
* [Camera Raw Namespace](crs/index.md)
* [Exif Namespace](exif/index.md)
* [Tiff Namespace](tiff/index.md)
* [Dublin Core Namespace](dc/index.md)
* [IPTC Core Namespace](iptc4-xmp-core/index.md)
