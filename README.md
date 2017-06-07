# Constructibles

[Constructibles Live][live]

[live]: http://constructibles.pro

Constructibles is a full-stack web application modeled after Instructables, a website for posting instructions for DIY projects. It was built using Ruby on Rails for the backend, a PostgeSQL database and React-Redux for front end components.

## Features and Implementation

#### Users and Authentication

Users do not need to be logged in or have an account to browse Constructibles. They do need to be logged in to post or edit projects. A user can only edit or delete projects that they created.

On the database side, users are stored in a table that has columns for `id`, `username`, `password_digest` and `session_token`. When a user creates an account their username is checked to ensure uniqueness and their password is encrypted with the Ruby BCrypt gem. Only the encrypted password is stored in the database as `password_digest`.

To keep track of a logged in user a Rails controller, `session_controller`, maintains a `session_token` that is stored as a cookie in the user's browser and as a string in the `user` table. A user receives a new `session_token` every time they log in and it is reset every time they log out. `session_token`s are also checked to ensure uniqueness.

#### Projects

Projects are stored in a database table that contains columns for `id`, `title`, `intro`, `cover_image` and `user_id`. Each project `has_many` steps and `accepts_nested_attributes_for` steps.

Projects are created with a text input for `title`, textarea for `intro` and file upload for `cover_image`. The same React component is used to render both the project creation and editing forms.

#### Steps

Steps are stored in database as a table that contains columns for `id`, `title`, `body` and `image`. Each step `belongs_to` a project and is destroyed if a project is destroyed.

Steps are created from the project creation or editing forms.

## Future Features

There are many additional features on Instructables.com that I would like to implement on my site. My future plans for Constructibles are listed below.

#### Comments

Commenting on projects is a nice way for creators to interact with other users on the site. Any user will be able to comment on a project and the project's author will have their comments differentiated from others by a different color background.

#### Rich Text Editing

Rich text editing will be a very useful feature for this site since projects involve a lot of text input. I plan to use Quill.js to implement this feature. It will be used for Projects and Comments. Users will be able to make numbered or bulleted lists which will be very helpful for listing materials.

#### Keywords

Searching for projects by keyword will be an essential feature as more projects are created. This will be implemented by adding a keywords table and a project_keywords join table. Keywords will have a many to many relationship with projects. Keywords will be added during project creation or from the project edit page.

#### Categories

Classifying projects by category will be a helpful way to browse only projects that might interest you. Categories will be a single table and each category will have many projects. Projects will belong to one category.
