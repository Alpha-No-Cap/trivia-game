require 'rails_helper'

RSpec.describe Game, type: :model do
  it 'should have a valid score' do
    game = Game.create(category: 'Entertainment: Film', difficulty: 'easy')
    expect(game.errors[:score]).to include "can't be blank"
  end

  it 'should have a valid category' do
      game = Game.create(score: 150, difficulty: 'medium')
    expect(game.errors[:category]).to include "can't be blank"
  end

  it 'should have a valid difficulty' do
      game = Game.create(score: 200, category: 'Entertainment: Film')
    expect(game.errors[:difficulty]).to include "can't be blank"
  end
end
