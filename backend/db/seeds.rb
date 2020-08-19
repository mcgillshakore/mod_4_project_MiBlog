# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.destroy_all
Blog.destroy_all
Comment.destroy_all
Like.destroy_all

u1 = User.create(first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , username:  Faker::Internet.username, password: "1234")
u2 = User.create(first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , username:  Faker::Internet.username, password: "1234")
u3 = User.create(first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , username:  Faker::Internet.username, password: "1234")
u4 = User.create(first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , username:  Faker::Internet.username, password: "1234")

b1 = Blog.create(user_id: u1.id, image_url: "https://images.unsplash.com/photo-1597393656521-1a522bf8da82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", title: Faker::Book.title, content: Faker::Quote.famous_last_words)
b2 = Blog.create(user_id: u2.id, image_url: "https://images.unsplash.com/photo-1597393656521-1a522bf8da82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", title: Faker::Book.title, content: Faker::Quote.famous_last_words)
b3 = Blog.create(user_id: u3.id, image_url: "https://images.unsplash.com/photo-1597393656521-1a522bf8da82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", title: Faker::Book.title, content: Faker::Quote.famous_last_words)
b4 = Blog.create(user_id: u4.id, image_url: "https://images.unsplash.com/photo-1597393656521-1a522bf8da82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", title: Faker::Book.title, content: Faker::Quote.famous_last_words)

c1 = Comment.create(user_id: u1.id, blog_id: b1.id, content: Faker::Quote.famous_last_words)
c2 = Comment.create(user_id: u2.id, blog_id: b2.id, content: Faker::Quote.famous_last_words)
c3 = Comment.create(user_id: u3.id, blog_id: b3.id, content: Faker::Quote.famous_last_words)
c4 = Comment.create(user_id: u4.id, blog_id: b4.id, content: Faker::Quote.famous_last_words)

l1 = Like.create(likes: 0, user_id: u1.id, blog_id: b1.id)
l2 = Like.create(likes: 0, user_id: u4.id, blog_id: b4.id)
l3 = Like.create(likes: 0, user_id: u3.id, blog_id: b3.id)
l4 = Like.create(likes: 0, user_id: u2.id, blog_id: b2.id)