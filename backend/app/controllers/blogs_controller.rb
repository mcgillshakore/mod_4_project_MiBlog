class BlogsController < ApplicationController

    def index
        blogs = Blog.all
        render json: blogs
    end

    def show
        blog = Blog.find_by(id: params[:id])
    end
end
