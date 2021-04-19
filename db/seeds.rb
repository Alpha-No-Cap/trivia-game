user1 = User.first

games = [
    {
        score: 100, 
        streak: 0,
        category: "Entertainment: Film", 
        difficulty: "easy",
        user_id: user1.id
    }, 
    {
        score: 150, 
        streak: 0,
        category: "Entertainment: Books", 
        difficulty: "hard",
        user_id: user1.id
    }, 
    {
        score: 50, 
        streak: 0,
        category: "Entertainment: Television", 
        difficulty: "medium",
        user_id: user1.id
    }
]

games.each do |attributes|
    Game.create attributes
end