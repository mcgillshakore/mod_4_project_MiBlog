class LikesController < ApplicationController

    def index
        likes = Like.all
        render json: LikeSerializer.new(likes)
    end

    def create
        like = Like.new(like_params)
        like.save
        render json: LikeSerializer.new(like)
    end

    private

    def like_params
        params.require(:like).permit(:user_id, :blog_id, :likes)
    end
end
