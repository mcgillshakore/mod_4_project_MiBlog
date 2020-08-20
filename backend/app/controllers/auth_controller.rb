class AuthController < ApplicationController

    def login
        user = User.find_by(username: params[:username])
        if user != nil && user.authenticate(params[:password])
            # session[:user_id] = user.id
            # byebug
            current_user = {username: user.username, email: user.email, id: user.id}
            render json: current_user
        else
            render json: {error: 'Invalid User'}
        end 
    end
end