class UsersController < ApplicationController

  def index
    if params[:groupId].present?
      @group = Group.find(params[:groupId])
      @users = User.where(['name LIKE ?', "%#{params[:keyword]}%"] ).where.not(id: current_user.id, id: @group.users.ids).limit(10)
    else
      @users = User.where(['name LIKE ?', "%#{params[:keyword]}%"] ).where.not(id: current_user.id).limit(10)
    end
    respond_to do |format|
      format.json
    end
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

    private

    def user_params
      params.require(:user).permit(:name, :email)
    end

    # def selectedmembers
    #   selectedmembers = []
    #   selectedmembers << current_user.id
    #   if params[:selectedmembers]
    #     params[:selectedmembers].map do |electedmember|
    #       selectedmembers << electedmember
    #     end
    #   end
    #   return selectedmembers
    # end
end
