class Schedule < ActiveRecord::Base

  belongs_to :user
  default_scope -> { order(planed_completed_at: :desc) }

  #validates
  validates :user_id, presence: true
  validates :title, length: {maximum: 50}
  validates :title, presence: true, if: :require_title_presence?
  validates :content, presence: true, if: :require_content_presence?

  def complete
    update_columns(completed: true, completed_at: Time.zone.now)
  end

  def uncomplete
    update_columns(completed: false, completed_at: nil)
  end

  private
  def require_title_presence?
    !self.content?
  end

  def require_content_presence?
    !self.title?
  end

end