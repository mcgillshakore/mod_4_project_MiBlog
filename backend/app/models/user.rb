class User < ApplicationRecord
    has_many :blogs
    has_many :comments
    has_many :likes

    has_secure_password

    validates :username, uniqueness: true
end
