class GamesController < ApplicationController
    def index 
        games = Game.all
        render json: games, :include => {:user => {:only => :username}}
    end

    def create
        game = Game.create(game_params)
        if game.valid?
			render json: game
		else
			render json: game.errors
        end
    end

    private 
    def game_params
        params.require(:game).permit(:score, :category, :difficulty, :user_id)
    end
end

