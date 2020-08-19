class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :user_id, :blog_id
end
