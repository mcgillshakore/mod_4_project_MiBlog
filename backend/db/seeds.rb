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

4.times do |index|
    User.create!(first_name: Faker::Name.first_name ,
                 last_name: Faker::Name.last_name , 
                 username:  Faker::Internet.username, 
                 password: "1234")
end

4.times do |index|
    Blog.create!(user_id: User.all.sample.id,
                 image_url: "https://images.unsplash.com/photo-1597393656521-1a522bf8da82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
                 title: Faker::Book.title,
                 content: Faker::Quote.famous_last_words)
end

4.times do |index|
    Like.create!(user_id: User.all.sample.id,
                 blog_id: Blog.all.sample.id,
                 likes: 0)
end

4.times do |index|
    Comment.create!(user_id: User.all.sample.id,
                    blog_id: Blog.all.sample.id, 
                    content: Faker::Quote.famous_last_words)
end