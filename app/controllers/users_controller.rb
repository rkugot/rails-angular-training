class UsersController < ApplicationController
  def login
    user = User.find_or_initialize_by(user_params)
    user.save if user.new_record?
    render json: user
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
