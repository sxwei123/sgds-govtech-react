# Customisation with Sass

If you want to modify SGDS's base styling, you can import the Sass source (your project needs to support Sass compilation) and [override SGDS's sass variables](https://www.designsystem.tech.gov.sg/get-started/customise-with-sass).

```
npm install @govtechsg/sgds
```

For example, importing sgds in your own sass file:

```scss
// styles/app.scss

// Override SGDS defaults
$primary: rgb(8, 11, 56);
$secondary: #ff8c00;
$warning: rgb(134, 37, 37);

// Import all of sgds
@import '@govtechsg/sgds/sass/sgds.scss';
```

Then, in your app:

```js
import React from 'react';

import './styles/app.scss';

export default function App() {
  return <div>...</div>;
}
```

For more information on customising with Sass, see the [SGDS documentation](https://www.designsystem.tech.gov.sg/get-started/customise-with-sass).
