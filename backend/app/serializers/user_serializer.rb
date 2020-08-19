class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :username, :password
  
  has_many :blogs
  has_many :comments
  has_many :likes
end
