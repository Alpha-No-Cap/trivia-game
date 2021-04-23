class Game < ApplicationRecord
    belongs_to :user

    validates :score, :category, :difficulty, presence: true

end
