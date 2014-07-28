class Bookmark < ActiveRecord::Base
  belongs_to :User
  belongs_to :Book
end
