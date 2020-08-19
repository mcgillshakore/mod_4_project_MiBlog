class BlogSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :image_url, :title, :content
  
  has_many :likes
  has_many :comments
end
