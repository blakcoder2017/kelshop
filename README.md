# Code Review

This code review is purposely to help make the code structure and quality much better for extensibility.

## File Structure Review

In React, the `"public"` folder serves as the root directory for your application and contains static assets that are directly accessible to the users. When you place files in the public folder, they are served as-is without any processing or bundling by the build tools like webpack or Babel. Here are some reasons why it is often better to put files in the public folder in React:

1. Accessibility: Files placed in the public folder can be accessed directly by their URLs. This makes them easily accessible to both the client-side and server-side code, as well as external services or APIs that might need to interact with those files.

2. Performance: Static assets in the public folder are typically served with cache headers and can be cached by the user's browser or CDN (Content Delivery Network). This improves the performance of your application, as the browser can retrieve the assets from the cache instead of making additional network requests.

3. Build Optimizations: When you place files in the public folder, they are not processed by build tools during the compilation process. This can reduce the build time and complexity, as there is no need to handle transformations or optimizations for these files.

4. External Assets: If you have external assets that are not bundled with your application, such as images, fonts, or videos, placing them in the public folder allows you to reference them directly using their URLs without the need for additional configuration or imports.

> For this reason, I moved all static assets to the public folder under a newly created folder `assets`
