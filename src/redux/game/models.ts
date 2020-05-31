export type Difficulty = {
  name: "EASY" | "NORMAL" | "HARD"
  emoteCount: number
} 

export type Game = {
  difficulty : Difficulty,
  emoteIndex: number,
  score: number,
  deadline: Number ,
  guess: String
}