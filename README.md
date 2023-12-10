# React II

## Challenge 02

### Context

We were asked to develop a platform for photographers that let them show their nature-related photos. The platform should handle a "likes" mechanism, and should be able to filter the liked photos.

You can check this wonderful piece of code [here.](https://pelafustan.github.io/react_ii-challenge_02/)

### What is going on here?

~~Breakfast~~ This app has the following structure:

```
App.tsx
└── components
    ├── Gallery.tsx
    ├── IconHeart.tsx
    └── Navbar.tsx
    contexts
    └── PhotosContext.tsx
    hooks
    └── usePhotos.ts
    views
    ├── Favourites.tsx
    ├── Home.tsx
    └── NotFound.tsx
```

* The `App.tsx` component handle the whole app:
  * Handle the main layout for the components.
  * Has the routes (`home`, `favourites`, and `404`).
  * The return is wrapped by a context provider, allowing access to the `photos`, amongst other things, to all children components.

* The components inside `components` folder are "generic" components that are used inside components defined inside `views` folder.
  * `Gallery` is an `antd` list that shows all the data passed via a props as `Cards`, and that data will be managed by the parent component, i.e., `Home` or `Favourites`.
  * `IconHeart` is a `svg` object that shows a heart. It will be the "button" that will toggle the like on each photo.
  * `Navbar` is a simple `antd` `Menu` that will be rendered by the `Layout.Header` component. Only manages the `Home` and `Favourites` views.

* Inside `contexts` folder there is a file that handle the api call, set the data and provide the context.
* Inside `hooks` folder there is a custom hook that handle the context defined in the `contexts` folder.
* The `views` folder contains all the views for the project:
  * `Favourites` will show the list of the user liked photos.
  * `Home` will show all the photos from the API.
  * `NotFound` will be displayed whenever the user put an invalid url, and then redirects the user to the home page.

### Author

* [Patricio Parada](https://github.com/pelafustan)

### Acknowledgement

* Black coffee.
* Green tea (when tummy hurts).
* [Desafío Latam](https://desafiolatam.com) 
