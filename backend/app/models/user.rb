class User < ApplicationRecord
    has_many :blogs
    has_many :comments, through: :blogs
    has_many :likes, through: :blogs
end
