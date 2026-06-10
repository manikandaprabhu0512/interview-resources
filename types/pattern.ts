export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type PatternCategory = "Behavioral" | "Creational" | "Structural";

export interface PatternMetadata {
  title: string;
  pattern: PatternCategory;
  tags: string[];
  difficulty: Difficulty;
}
