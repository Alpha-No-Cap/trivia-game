RSpec.describe "Games", type: :request do
  describe "GET /games" do
    it 'gets a list of Games' do
   
      Game.create(score: 200, category: 'Entertainment: Film', difficulty: 'hard')
   
      get '/games'
  
      game_response = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(game_response.length).to eq 1
      first_game = game_response.first
      expect(first_game['name']).to eq 200
      expect(first_game['category']).to eq 'Entertainment: Film'
      expect(first_game['difficulty']).to eq 'hard'
    end
  end

  describe "POST /games" do
    it 'creates a new game' do
     
      game_params = {
        game: { score: 200, category: 'Entertainment: Film', difficulty: 'hard'
        }
      }
   
      post '/games', params: game_params

      game_response = JSON.parse(response.body)
      expect(game_response['score']).to eq 200
      expect(game_response['category']).to eq 'Entertainment: Film'
      expect(game_response['difficulty']).to eq 'hard'
    end

    it 'cannot create a new game without a score' do
      game_params = {
          game: { category: 'Entertainment: Film', difficulty: 'hard'
          }
        }

      post '/games', params: game_params

      error_response = JSON.parse(response.body)
      expect(error_response['score']).to include "Score cannot be blank"
      expect(response).to have_http_status(422)
    end

    it 'cannot create a new game without a category' do
      game_params = {
          game: { score: 200, difficulty: 'hard'
          }
        }

      post '/games', params: game_params

      error_response = JSON.parse(response.body)
      expect(error_response['category']).to include "category cannot be blank"
      expect(response).to have_http_status(422)
    end

    it 'cannot create a new game without a difficulty' do
      game_params = {
          game: { score: 200, category: 'Entertainment: Film'
          }
        }

      post '/games', params: game_params

      error_response = JSON.parse(response.body)
      expect(error_response['difficulty']).to include "Difficulty cannot be blank"
      expect(response).to have_http_status(422)
    end
  end
end
