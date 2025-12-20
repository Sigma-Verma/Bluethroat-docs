import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '37f'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '49b'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '903'),
            routes: [
              {
                path: '/backdrop-tees-and-adjacent-tech',
                component: ComponentCreator('/backdrop-tees-and-adjacent-tech', '516'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/contributors',
                component: ComponentCreator('/contributors', 'c89'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/dumb-ways-to-get-rekt-with-tees',
                component: ComponentCreator('/dumb-ways-to-get-rekt-with-tees', '084'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/future-directions',
                component: ComponentCreator('/future-directions', 'c4f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/layers-of-security-for-tees',
                component: ComponentCreator('/layers-of-security-for-tees', 'b7b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/platform-profiles-and-architectures',
                component: ComponentCreator('/platform-profiles-and-architectures', '139'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Platforms/04A_aws-nitro-system',
                component: ComponentCreator('/Platforms/04A_aws-nitro-system', 'bed'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Platforms/04B_aws-nitro-enclaves',
                component: ComponentCreator('/Platforms/04B_aws-nitro-enclaves', '7e8'),
                exact: true
              },
              {
                path: '/Platforms/04C_aws-nitro-threat-vectors-paranoid',
                component: ComponentCreator('/Platforms/04C_aws-nitro-threat-vectors-paranoid', '3e2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Platforms/04D_dstack-decentralized-cloud-tees',
                component: ComponentCreator('/Platforms/04D_dstack-decentralized-cloud-tees', '0ee'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tee-attacks-categorisation',
                component: ComponentCreator('/tee-attacks-categorisation', '13b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/tees-in-web3',
                component: ComponentCreator('/tees-in-web3', '317'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/what-to-expect',
                component: ComponentCreator('/what-to-expect', '1f6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'c23'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
