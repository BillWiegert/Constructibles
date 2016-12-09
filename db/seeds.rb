# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
users = User.create([
  { username: "Guest", password: "password"},
  { username: "ConstructiveCarl", password: "hunter12" },
  { username: "FlourPower", password: "fullybaked42"},
  { username: "BobTheBuilder", password: "canwebuildit" }
])

Project.delete_all
projects = Project.create([
  {
    title: "DIY scratching post",
    intro: "My cat likes scratching so I made this post.",
    user_id: users[1].id
  },
  {
    title: "My first project!",
    intro: "This is my first project.",
    user_id: users.first.id
  },
  {
    title: "DIY Log Cabin",
    intro: "Can you build it? Yes, you can!",
    user_id: users[3].id
  },
  {
    title: "Homemade Apple Pie",
    intro: "Quick and easy apple pie.",
    user_id: users[2].id
  },
  {
    title: "My Second Project!",
    intro: "This is my second project.",
    user_id: users.first.id
  },
  {
    title: "My Third Project!",
    intro: "This is my third project.",
    user_id: users.first.id
  }
])
