# Photoshop namespace

This namespace specifies properties used by Adobe Photoshop

- The namespace URI is [http://ns.adobe.com/photoshop/1.0/](http://ns.adobe.com/photoshop/1.0/)

- The preferred namespace prefix is photoshop

|    |           |    |
|----|-----------|----|
|**Name**|**Description**|**Type**|
|photoshop:ColorMode|The colour mode. One of: `0 = Bitmap` , `1 = Gray scale`,   `2 = Indexed colour`, `3 = RGB colour`, `4 = CMYK colour`, `7 = Multi-channel`, `8 = Duotone`, `9 = LAB colour`|Closed Choice of [Integer](../xmp-data-types/index.md#integer)|
|photoshop:DocumentAncestors|If the source document for a copy-and-paste or place operation has a document ID, that ID is added to this list in the destination document's XMP.  |Unordered array of [Ancestor](../xmp-data-types/ancestor/index.md)|
|photoshop:History|The history that appears in the FileInfo panel, if activated in the application preferences.  |[Text](../xmp-data-types/index.md#text)|
|photoshop:ICCProfile|The colour profile, such as AppleRGB, AdobeRGB1998.  |[Text](../xmp-data-types/index.md#text)|
|photoshop:TextLayers|If a document has text layers, this property caches the text for each layer.  |Ordered array of [Layer](../xmp-data-types/layer/index.md)|
|photoshop:AuthorsPosition|By-line title.  |[Text](../xmp-data-types/index.md#text)|
|photoshop:CaptionWriter|Writer/editor.  |[ProperName](../xmp-data-types/index.md#propername)|
|photoshop:Category|Category. Limited to 3 7-bit ASCII characters.  |[Text](../xmp-data-types/index.md#text)|
|photoshop:City|City.  |[Text](../xmp-data-types/index.md#text)|
|photoshop:Country|Country/primary location.  |[Text](../xmp-data-types/index.md#text)|
|photoshop:Credit|Credit.  |[Text](../xmp-data-types/index.md#text)|
|photoshop:DateCreated|The date the intellectual content of the document was created, rather than the creation date of the physical representation.  |[Date](../xmp-data-types/index.md#date)|
|photoshop:Headline|Headline.  |[Text](../xmp-data-types/index.md#text)|
|photoshop:Instructions|Special instructions.  |[Text](../xmp-data-types/index.md#text)|
|photoshop:Source|Source.  |[Text](../xmp-data-types/index.md#text)|
|photoshop:State|Province/state.  |[Text](../xmp-data-types/index.md#text)|
|photoshop:SupplementalCategories|Supplemental category.  |Unordered array of [Text](../xmp-data-types/index.md#text)|
|photoshop:TransmissionReference|Original transmission reference.  |[Text](../xmp-data-types/index.md#text)|
|photoshop:Urgency|Urgency. Valid range is 1-8.  |[Integer](../xmp-data-types/index.md#integer)|
|photoshop:LabelColor|A user-assigned color for this file. The value can be either a predefined name (red, yellow, green, blue, purple) or a hexadecimal value in the #RRGGBB format interpreted in sRGB color space.  |[Text](../xmp-data-types/index.md#text)|
