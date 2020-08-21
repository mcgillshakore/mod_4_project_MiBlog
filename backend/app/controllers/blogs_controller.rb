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
        first_user = User.first
        blog = Blog.new(blog_params)
        blog.save
        render json: BlogSerializer.new(blog)
    end

    def destroy
        blog_to_delete = Blog.find_by(id: params[:id])
        if blog_to_delete.user_id == User.first.id
            blog_to_delete.destroy
             render json: {"success": "playlist was deleted"}
         else 
             render json: {"error": "You must have created the category to delete it"}
         end
    end


    private

    def blog_params
        params.require(:blog).permit(:user_id, :image_url, :title, :content)
    end
end
