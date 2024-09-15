// nextjs 14
// ---------

what is it?
 a react framework for building web apps

react is a library for building UIs, responsible for the view layer only of the app.
we need to use others libs for routing, data fetching and more.

But nextjs is react FRAMEWORK, it uses react for building UI's but offers additional features like 
routing, optimized rendering, data fetching, compiling, bundling and more.
no need to install addition packages like in react.

thus enabling the build of a production ready apps.

// 2. Nextjs simplifies the process of building apps with the features:

/* 
1 - Routing: built in, (no need to install routing packages, configure them and write code for them.)
2 - API routes: create apis, makes it fullstack framework. write frontend code for react and apis that are called byt react app.
3 - Rendering: supports both client side and server side rendering, which results in better performance and SEO.
4 - Data fetching: simplified data fetching wih async await support.
5 - dev and prod build system: allow to focus on coding rather than configuration.
6 - Optimization: out of the box for images font and scripts to improve app core web vitals and UX.
7 - Styling: supports css modules, css in js and tawilwindcss.
*/

// 3. nextjs prerequisites:

dev environment:
- nodejs
- vs code or other

create new app: npx create-next-app@latest
run dev: npm run dev

// nextjs folder structure:

package.json : project dependencies and scripts.
configuration fies:

next.config,s : for nextjs
tsconfig.json : for typescript
eslintrc: for eslint
tailwind.config and postcss.config.js : for tailwindcss
next-env.d.ts: typescript declarations for nextjs


.next folder: generated when we dun dev or build scripts
from this folder our app is served.

public folder: holds all static assets to be served like images and svgs

"src" folder:
one folder "app" which is the app router.

layout.tsx: UI shared across different pages in app
page.tsx: unique UI visiting home page
the page.tsx replaces children prop in layput.tsx to form the complete UI.

// flow of control when we run the app:

when we run the app the execution is transfered to layout.tsx,
the RouteLayout component is rendered
when we navigate to localhost:3000 the children prop will refer to component defined in page.tsx
that component is the home component which is then rendered in the browser.


// Understand React Server Components (RSC)
 
architecture introduced in react 18.
it introduces a new way of creating react components:
server and client components.

server comps: in nextjs all components are server components by default.
they can : run tasks like reading files or fetching data form a DB.
they can't: use hooks or handle user interactions

Client compos: to create one it's necessary to add "use client" at the top of the component file

they can : use hooks and manage user interactions.


RSCs and routing:
 examples of the below will follow:

server components await certain actions to finalize before rendering content on the screen.

client components leverage hooks from the routing module
 


/** ROUTING: */
/** ---------*/
/** ---------*/

nextjs has a file-system based routing mechanism.
URL paths are defined by files and folders in the codebase.

we follow the nextjs conventions for routes feature:

1. all routes must be placed in app folder
2. every file that represents a route must be named page.js or page.tsx
3. every folder corresponds to a path segment in the browser URL; 

example: localhost:3000/about
about is a folder with page name page.tsx, in the root app folder


if we enter a url that cannot map to a file in the app folder
nextjs will handle a non matching route with a default 404 page.


NESTED ROUTES:
--------------
example: localhost:3000/admin/dashboard
admin is the folder name
dashboard is another folder that has a page name page.tsx
admin is folder in the rout app folder and dashboard is a sub folder that has a page.tsx

DYNAMIC ROUTES:
---------------

example: localhost:3000/products that has a list of products when they user clicks on any it will take them to : localhost:3000/products/id


first we create a folder products inside app folder.
then page.tsx to list all the products.
:product1, product2, product3..
then to receive the productid, we create a folder named:
[productId] , nextjs will treat this as a dynamic value,
it allows nextjs to map this file with any route /products/productId

now we can have a url path : localhost:3000/products/1

to receive the productid param, we destrcture the id in the productdetails page (because every page receives route parameters as prop)

how to destrcture params in TS we have to specify the type or error:

export default function ProductDetails({params} : {params:{productId : string};}) {}

// params is an object with a key called productId with type string

NESTED DYNAMIC ROUTES:
----------------------
example: localhost:3000/products/1/reviews/1

under [productId] we create a reviews folder and inside it a [reviewId] folder and inside it a page.tsx

this way we can have the review 1 for product 1
(for example Url above)

// destructure both params:
// export default function ReviewDetails({params} : {params:{productId : string ; reviewId: string};}) { }
// then print :
//     return(
//         <>
//         <h2>Products details page with id: {params.productId} has review {params.reviewId} </h2>
//         </>
//     )

CATCH-ALL SEGMENTS
------------------
example: localhost:3000/docs/feature1/concept1
example: localhost:3000/docs/feature2/concept1

let's say feature 1 has 5 concepts
and feature 2 has 5 concepts etc..

our goal is to have a unique route for each concept under a given feature.

if we have 20 features * 20 concepts = 400 route

we can have one file and folder structure that catches all segments with one layout only.

we create folder docs then create a special folder:
[...slug], spread operator used to catch all slugs
inside slug the page.tsx will show on any path we add
like the examples mentioned above.

the catch all segment route captures all url segments and maps them to page.tsx inside ...slug folder

how to access different segments in url:

code inside docs>[...slug]>page.tsx


to have the route : localhost:3000/docs map to the page.tsx inside ...slug , nextjs offers optional catch all segemnts, we have to : wrap slug with other bracket and use optional chaining in the page.tsx

code inside docs>[[...slug]]>page.tsx

PAGE NOT FOUND
--------------

1. to create a page not found, we add "not-found.tsx" inside app folder.
nextjs will render it if url is not found.
this would be the global notfound page.


2. we can create notfound inside a certain folder we need
and dynamically render a page on certain conditions.

we use the notfound function of nextjs

import { notFound } from "next/navigation";

if(condition) { notFound(); } // call it and it will display the notfound page we created inside the folder.

code inside page.tsx inside [reviewId] folder.




