# Photoshop namespace

This namespace specifies properties used by Adobe Photoshop

- The namespace URI is http://ns.adobe.com/photoshop/1.0/

- The preferred namespace prefix is photoshop

|Name|Description|Type|
|----|-----------|----|
|photoshop:ColorMode|The colour mode. One of: `0 = Bitmap` , `1 = Gray scale`,   `2 = Indexed colour`, `3 = RGB colour`, `4 = CMYK colour`, `7 = Multi-channel`, `8 = Duotone`, `9 = LAB colour`|Closed Choice of [Integer](./XMPDataTypes/CoreProperties.md#integer)|
|photoshop:DocumentAncestors|If the source document for a copy-and-paste or place operation has a document ID, that ID is added to this list in the destination document's XMP.  |Unordered array of [Ancestor](./XMPDataTypes/Ancestor.md)|
|photoshop:History|The history that appears in the FileInfo panel, if activated in the application preferences.  |[Text](./XMPDataTypes/CoreProperties.md#text)|
|photoshop:ICCProfile|The colour profile, such as AppleRGB, AdobeRGB1998.  |[Text](./XMPDataTypes/CoreProperties.md#text)|
|photoshop:TextLayers|If a document has text layers, this property caches the text for each layer.  |Ordered array of [Layer](./XMPDataTypes/Layer.md)|
|photoshop:AuthorsPosition|By-line title.  |[Text](./XMPDataTypes/CoreProperties.md#text)|
|photoshop:CaptionWriter|Writer/editor.  |[ProperName](./XMPDataTypes/CoreProperties.md#propername)|
|photoshop:Category|Category. Limited to 3 7-bit ASCII characters.  |[Text](./XMPDataTypes/CoreProperties.md#text)|
|photoshop:City|City.  |[Text](./XMPDataTypes/CoreProperties.md#text)|
|photoshop:Country|Country/primary location.  |[Text](./XMPDataTypes/CoreProperties.md#text)|
|photoshop:Credit|Credit.  |[Text](./XMPDataTypes/CoreProperties.md#text)|
|photoshop:DateCreated|The date the intellectual content of the document was created, rather than the creation date of the physical representation.  |[Date](./XMPDataTypes/CoreProperties.md#date)|
|photoshop:Headline|Headline.  |[Text](./XMPDataTypes/CoreProperties.md#text)|
|photoshop:Instructions|Special instructions.  |[Text](./XMPDataTypes/CoreProperties.md#text)|
|photoshop:Source|Source.  |[Text](./XMPDataTypes/CoreProperties.md#text)|
|photoshop:State|Province/state.  |[Text](./XMPDataTypes/CoreProperties.md#text)|
|photoshop:SupplementalCategories|Supplemental category.  |Unordered array of [Text](./XMPDataTypes/CoreProperties.md#text)|
|photoshop:TransmissionReference|Original transmission reference.  |[Text](./XMPDataTypes/CoreProperties.md#text)|
|photoshop:Urgency|Urgency. Valid range is 1-8.  |[Integer](./XMPDataTypes/CoreProperties.md#integer)|
