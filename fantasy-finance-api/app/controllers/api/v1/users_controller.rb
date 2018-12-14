class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def create
      @user = User.create(user_params)
      if @user.valid?
        @user.avatar.attach(params[:avatar])
        @token = encode_token(user_id: @user.id)
        render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
      else
        render json: { error: 'failed to create user' }, status: :not_acceptable
      end
    end

  def leagues
    user_leagues = User.find(@user.id).leagues
    render json: user_leagues, status: :ok
  end
    private

    def user_params
      params.require(:user).permit(:username, :password, :first_name, :last_name, :avatar)
    end

end
