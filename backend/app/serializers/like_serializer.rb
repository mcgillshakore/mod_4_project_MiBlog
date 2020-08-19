class LikeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :likes, :user_id, :blog_id
end
