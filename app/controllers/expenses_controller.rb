class ExpensesController < ApplicationController
  before_action :set_user

  def index
    render json: @user.expenses
  end

  def create
    @user.expenses.create(expense_params)
    render json: @user.expenses
  end

  def categories
    render json: Expense::CATEGORIES
  end

  private

  def expense_params
    params.require(:expense).permit(:date, :title, :category,
                                    :amount, :currency)
  end

  def set_user
    @user = User.find_by(userId: params[:id])
  end
end
