```js
{
  session: {
    currentUser: {
      id: 1,
      username: "Bill"
    },
    errors: []
  }

  projects: {
    index: {
      1: {
        title: "DIY Scratching Post",
        user: 1,
        cover_image_url: "imgur.com/guihwjg"
      },
      2: {
        title: "Modular Shoes",
        user: 2,
        cover_image_url: "imgur.com/ejifis1"
      }  
    },
    order: [1,2],
    detail: {
      id: 1,
      title: "DIY Scratching Post",
      intro: "My cat like scratching, so I made this post",
      steps: "Step by step instructions...",
      user: {id: 1, username: "Bill"},
      comments: [
        {username: "Bob", content: "Great Post!"},
        {username: "Ron", content: "My cat loves it!"}
      ],
      cover_image_url: "imgur.com/guihwjg",
      video_url: "youtu.be/gh9fwf8"
    }
  },

  categories: {
    1: {
      title: "Technology"
    },
    2: {
      title: "Home"
    },
    3: {
      title: "Food"
    }
  }
}
```
