# CFAPattern

A structure describing the CFA pattern.

- The namespace URI is http://ns.adobe.com/exif/1.0/

- The preferred namespace prefix is exif

|Name|Description|Type|
|----|-----------|----|
|exif:Columns|Number of columns, *n*. |[Integer](./CoreProperties.md#integer)|
|exif:Rows|Number of rows, *m*.  |[Integer](./CoreProperties.md#integer)|
|exif:Values|CFA values, sequence should be, in order: *value[0, 0] ... value[n - 1, 0] value[0, m - 1] ... value[n - 1,m - 1]*  |Ordered array of [Integer](./CoreProperties.md#integer)|
