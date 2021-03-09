# ResourceRef

A multiple part reference to a resource. Used to indicate prior versions, originals of renditions, originals for derived documents, and so on. The fields present in any specific reference depend on usage and on whether the referenced resource is managed. Except for instanceID, the fields are all properties from the referenced resource's xmpMM namespace.

- The namespace URI is http://ns.adobe.com/xap/1.0/sType/ResourceRef#

- The preferred namespace prefix is stRef

|Name|Description|Type|
|----|-----------|----|
|stRef:documentID|The value of the xmpMM:DocumentID property from the referenced resource.  |[GUID](./CoreProperties.md#guid)|
|stRef:filePath|The referenced resource’s file path or URL.  |[URI](./CoreProperties.md#uri)|
|stRef:instanceID|The value of the xmpMM:InstanceID property from the referenced resource.  |[GUID](./CoreProperties.md#guid)|
|stRef:renditionClass|The value of the xmpMM:RenditionClass property from the referenced resource.  |[RenditionClass](./CoreProperties.md#renditionclass)|
|stRef:renditionParams|The value of the xmpMM:RenditionParams property from the referenced resource.  |[Text](./CoreProperties.md#text)|
|stRef:alternatePaths|The referenced resource's fallback file paths or URLs. The sequence order is the recommended order in attempting to locate the resource.  |[Text](./CoreProperties.md#text)|
|stRef:fromPart|For a resource within an xmpMM:Ingredients list, the part of this resource that is incorporated in the containing document.  |[Part](./CoreProperties.md#part)|
|stRef:lastModifyDate|The value of stEvt:when for the last time the file was written  |[Date](./CoreProperties.md#date)|
|stRef:manager|The referenced resource's xmpMM:Manager  |[AgentName](./CoreProperties.md#agent-name)|
|stRef:managerVariant|The referenced resource's xmpMM: ManagerVariant  |[Text](./CoreProperties.md#text)|
|stRef:manageTo|The referenced resource's xmpMM:ManageTo  |[URI](./CoreProperties.md#uri)|
|stRef:manageUI|The referenced resource's xmpMM:ManageUI  |[URI](./CoreProperties.md#uri)|
|stRef:maskMarkers|For a resource within an xmpMM:Ingredients list, whether markers in this resource should be ignored (masked) or processed normally. One of: *All*: Ignore markers in this ingredient and all its children. *None*: Process markers in this ingredient and all its children. |Closed choice of [Text](./CoreProperties.md#text)|
|stRef:partMapping|The name or URI of a mapping function used to map the fromPart to the toPart. The default for time mappings is "linear".  |[Text](./CoreProperties.md#text)|
|stRef:toPart|For a resource within an xmpMM:Ingredients list, the part of the containing document into which this resource is incorporated.  |[Part](./CoreProperties.md#part)|
|stRef:versionID|The referenced resource’s xmpMM:VersionID  |[Text](./CoreProperties.md#text)|
