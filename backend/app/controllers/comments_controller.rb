class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: CommentSerializer.new(comments)
    end

    def create
        comment = Comment.new(comment_params)
        comment.save
        render json: CommentSerializer.new(comment)
    end

    private

    def comment_params
        params.require(:comment).permit(:user_id, :blog_id, :content)
    end


end
