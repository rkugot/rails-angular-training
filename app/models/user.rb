class User < ApplicationRecord
  before_save :set_user_id

  private

  def set_user_id
    self.userId = Digest::MD5.hexdigest(email)
  end
end
