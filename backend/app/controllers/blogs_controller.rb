class BlogsController < ApplicationController

    def index
        blogs = Blog.all
        render json: BlogSerializer.new(blogs)
    end

    def show
        blog = Blog.find_by(id: params[:id])
        render json: BlogSerializer.new(blog)
    end

    def create
        blog = Blog.new(blog_params)
        blog.save
        render json: BlogSerializer.new(blog)
    end

    private

    def blog_params
        params.require(:blog).permit(:user_id, :image_url, :title, :content)
    end
end
