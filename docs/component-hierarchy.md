## Component Heirarchy

**AuthFormContainer**
  - AuthForm

**HomeContainer**
  - Header
  - Home
  - ProjectIndexContainer

**ProjectIndexContainer**
  - ProjectIndex
    - ProjectIndexItem

**ProjectDetailContainer**
  - ProjectDetail
  - CommentIndexContainer
    - CommentIndex
      - CommentIndexItem
  - CommentFormContainer
    - CommentForm

**ProjectFormContainer**
  - ProjectForm

**Search**

## Routes

|Path |Component|
|-----|---------|
|"/"|"HomeContainer"|
|"/sign-up"|AuthFormContainer|
|"/sign-in"|AuthFormContainer|
|"/projects"|ProjectIndexContainer|
|"/projects/categoryTitle"|ProjectIndexContainer|
|"/new-project"|ProjectFormContainer|
|"/projects/projectTitle"|ProjectDetailContainer|
|"/projects/projectTitle/edit"|ProjectFormContainer|
|"/search"|Search|
