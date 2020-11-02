export const DefaultAppStructure = `//app-folder structure from create-react-app
my-app
├── build
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── serviceWorker.js
├── .gitignore
├── package.json
└── README.md`;

export const ExtendAppStructure = `//extended app-folder structure
my-app
├── build
├── node_modules
├── src
│   ├── app
│   │   ├── assets
│   │   ├── components
│   │   ├── constants
│   │   ├── endpoints
│   │   ├── services
│   │   ├── layout
│   │   ├── pages
│   │   ├── routes
│   │   └── utils
│   └── redux-store
│       ├── actions
│       ├── reducers
│       └── index.js
├── .gitignore
├── .eslintrc.js
├── babel.config.js
├── webpack.config.js
├── package.json
└── README.md
`;