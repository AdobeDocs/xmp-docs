/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    versions: [
      {
        title: 'v2.0'
      }
    ],
    pages: [
      {
        title: 'XMP Overview',
        path: '/'
      },
      {
        title: 'XMP Specifications',
        path: '/XMPSpecifications/'
      },
      {
        title: 'XMP Namespaces',
        path: '/XMPNamespaces/'
      },
            {
        title: 'XMP DataTypes',
        path: '/XMPNamespaces/XMPDataTypes/'
      }
    ],
    subPages: [
      {
        title: 'XMP Namespaces',
        path: '/XMPNamespaces/',
        pages: [
          {
            title: 'Camera Raw namespace',
            path: '/XMPNamespaces/crs/'
          },
          {  
            title:"IPTC Core namespace",
            path:'/XMPNamespaces/Iptc4xmpCore/',
          },
          {
            title: 'Dublin Core namespace',
            path: '/XMPNamespaces/dc/'
          },
          {
            title: 'EXIF namespace',
            path: '/XMPNamespaces/exif/'
          },
          {
            title: 'Adobe PDF namespace',
            path: '/XMPNamespaces/pdf/'
          },
          {
            title: 'Photoshop namespace',
            path: '/XMPNamespaces/photoshop/'
          },
          {
            title: 'TIFF namespace',
            path: '/XMPNamespaces/tiff/'
          },
          {
            title: 'Adobe XMP Basic namespace',
            path: '/XMPNamespaces/xmp/'
          },
          {
            title: 'Basic Job Ticket namespace',
            path: '/XMPNamespaces/xmpBJ/'
          },
          {
            title: 'XMP Dynamic Media namespace',
            path: '/XMPNamespaces/xmpDM/'
          },
          {
            title: 'XMP Media Management namespace',
            path: '/XMPNamespaces/xmpMM/'
          },
          {
            title: 'XMP Rights Management namespace',
            path: '/XMPNamespaces/xmpRights/'
          },
          {
            title: 'XMP Paged-Text namespace',
            path: '/XMPNamespaces/xmpTPg/'
          }
        ]
      },
      {
        title: 'XMP DataTypes',
        path: '/XMPNamespaces/XMPDataTypes/',
        pages: [
          {
            title: 'Ancestor',
            path: '/XMPNamespaces/XMPDataTypes/Ancestor/'
          },
          {
            title: 'CFAPattern',
            path: '/XMPNamespaces/XMPDataTypes/CFAPattern/'
          },
          {
            title: 'Colorant',
            path: '/XMPNamespaces/XMPDataTypes/Colorant/'
          },
          {
            title: 'ContactInfo',
            path: '/XMPNamespaces/XMPDataTypes/ContactInfo/'
          },
          {
            title: 'CuePointParam',
            path: '/XMPNamespaces/XMPDataTypes/CuePointParam/'
          },
          {
            title: 'DeviceSettings',
            path: '/XMPNamespaces/XMPDataTypes/DeviceSettings/'
          },
          {
            title: 'Dimensions',
            path: '/XMPNamespaces/XMPDataTypes/Dimensions/'
          },
          {
            title: 'Flash',
            path: '/XMPNamespaces/XMPDataTypes/Flash/'
          },
          {
            title: 'Font',
            path: '/XMPNamespaces/XMPDataTypes/Font/'
          },
          {
            title: 'Job',
            path: '/XMPNamespaces/XMPDataTypes/Job/'
          },
          {
            title: 'Layer',
            path: '/XMPNamespaces/XMPDataTypes/Layer/'
          },
          {
            title: 'Marker',
            path: '/XMPNamespaces/XMPDataTypes/Marker/'
          },
          {
            title: 'Media',
            path: '/XMPNamespaces/XMPDataTypes/Media/'
          },
          {
            title: 'OECF-SFR',
            path: '/XMPNamespaces/XMPDataTypes/OECF-SFR/'
          },
          {
            title: 'ProjectLink',
            path: '/XMPNamespaces/XMPDataTypes/ProjectLink/'
          },
          {
            title: 'ResourceEvent',
            path: '/XMPNamespaces/XMPDataTypes/ResourceEvent/'
          },
           {
            title: 'ResourceRef',
            path: '/XMPNamespaces/XMPDataTypes/ResourceRef/'
          },
          {
            title: 'Thumbnails',
            path: '/XMPNamespaces/XMPDataTypes/Thumbnails/'
          },
          {
            title: 'Time',
            path: '/XMPNamespaces/XMPDataTypes/Time/'
          },
          {
            title: 'Timecode',
            path: '/XMPNamespaces/XMPDataTypes/Timecode/'
          },
          {
            title: 'Track',
            path: '/XMPNamespaces/XMPDataTypes/Track/'
          },
          {
            title: 'Version',
            path: '/XMPNamespaces/XMPDataTypes/Version/'
          },
          {
            title: 'beatSpliceStretch',
            path: '/XMPNamespaces/XMPDataTypes/beatSpliceStretch/'
          },
          {
            title: 'resampleStretch',
            path: '/XMPNamespaces/XMPDataTypes/resampleStretch/'
          },
           {
            title: 'timeScaleStretch',
            path: '/XMPNamespaces/XMPDataTypes/timeScaleStretch/'
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/xmp/docs/'
};
