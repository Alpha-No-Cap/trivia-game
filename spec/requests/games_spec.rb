require 'rails_helper'

RSpec.describe "Games", type: :request do
  describe "GET /games" do

    it 'gets a list of Games' do
   
      user1 = User.create(
        email:"yahoo@gmail.com",
        password:"password",
      )
     Game.create(
       score: 200, 
       category: 'Entertainment: Film', 
       difficulty: 'hard', 
       user_id: user1.id)
   
      get '/games'
      
      game_response = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      
      expect(game_response.length).to eq 1
      first_game = game_response.first
      expect(first_game['score']).to eq 200
      expect(first_game['category']).to eq 'Entertainment: Film'
      expect(first_game['difficulty']).to eq 'hard'
      expect(first_game['user_id']).to eq user1.id
    end
  end

  describe "POST /games" do
    it 'creates a new game' do
     
      user1 = User.create(
        email:"yahoo@gmail.com",
        password:"password",
      )
      game1 = Game.create(
        score: 200, 
        category: 'Entertainment: Film', 
        difficulty: 'hard', 
        user_id: user1.id
      )
      game_params = {
        game: { 
        score: 200, 
        category: 'Entertainment: Film', 
        difficulty: 'hard',
        game_id: game1.id,
        user_id: user1.id
        }
      }
   
      post '/games', params: game_params

      game = Game.all
      game_response = JSON.parse(response.body)

      pp game_response

      expect(game_response['score']).to eq 200
      expect(game_response['category']).to eq 'Entertainment: Film'
      expect(game_response['difficulty']).to eq 'hard'
      expect(game_response['user_id']).to eq user1.id
    end

    it 'cannot create a new game without a score' do
      user1 = User.create!(
        email:"yahoo@gmail.com",
        password:"password",
      )
      game1 = Game.create(
        category: 'Entertainment: Film', 
        difficulty: 'hard', 
        user_id: user1.id
      )
      game_params = {
          game: {
            score: 200, 
            category: 'Entertainment: Film', 
            difficulty: 'hard',
            game_id: game1.id,
            user_id: user1.id
          }
        }

      post '/games', params: game_params

      error_response = JSON.parse(response.body)
      expect(error_response['score']).to include "can't be blank"
      expect(response).to have_http_status(422)
    end

    it 'cannot create a new game without a category' do
      user1 = User.create!(
        email:"yahoo@gmail.com",
        password:"password",
      )
      game1 = Game.create(
        score: 200,
        category: 'Entertainment: Film',
        difficulty: 'hard', 
        user_id: user1.id
      )
      game_params = {
          game: { 
            score: 200,
            difficulty: 'hard',
            game_id: game1.id,
            user_id: user1.id
          }
        }

      post '/games', params: game_params

      error_response = JSON.parse(response.body)
      expect(error_response['category']).to include "can't be blank"
      expect(response).to have_http_status(422)
    end

    it 'cannot create a new game without a difficulty' do
      user1 = User.create!(
        email:"yahoo@gmail.com",
        password:"password",
      )
      game1 = Game.create(
        score: 200, 
        category: 'Entertainment: Film', 
        user_id: user1.id
      )
      game_params = {
          game: { 
            score: 200,
            category: 'Entertainment: Film',
            game_id: game1.id,
            user_id: user1.id
          }
        }

      post '/games', params: game_params

      error_response = JSON.parse(response.body)
      expect(error_response['difficulty']).to include "can't be blank"
      expect(response).to have_http_status(422)
    end
  end
end
