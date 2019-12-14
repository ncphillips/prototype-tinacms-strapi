# Prototype: Tinacms + Strapi + Gatsby

## Setup the Repo

  ```
  git clone git@github.com:ncphillips/prototype-tinacms-strapi.git
  cd prototype-tinacms-strapi
  yarn
  cd gatsby-blog
  yarn 
  ```

## Setup Strapi

1. **Start the Strapi Backend**

   ```
   yarn develop
   ```
1. **Setup Auth**

   Go to the [Strapi Admin](http://localhost:1337/admin/auth/register) and your user.
  
1. **Open up the API**

   Go to the [Public Permissions page](http://localhost:1337/admin/plugins/users-permissions/roles/edit/2) and under "Permissions – applications" set turn check the following boxes for "Post" and press save.
   * find
   * create
   * update
   * delete

1. **Create a Post**

   Go [create a new post](http://localhost:1337/admin/plugins/content-manager/post/create?redirectUrl=/plugins/content-manager/post?source=content-manager) and make sure to fill out _all of the fields_.
  
## Start Gatsby

Open a terminal in the repo

1. **Start the Gatsby Server**

   ```
   cd gatsby-blog
   yarn develop
   ```

1. **Go to the Gatsby site**

   http://localhost:8000
   
## What can you do?

* Create new posts from the home page
* Edit existing posts

## Caveats

* **Insecure AF** Everything is totally open, there's no security on the `posts` endpoint at all.
* **Gatsby Doesn't Update:** You have to restart the Gatsby dev server to see any changes in the Strapi CMS.
