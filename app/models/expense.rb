class Expense < ApplicationRecord
  belongs_to :user

  before_save :set_default_currency

  CATEGORIES = %w[Food Home Travel Car].freeze

  private

  def set_default_currency
    self.currency = 'BYN'
  end
end
