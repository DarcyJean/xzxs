import { tracks, type Track } from '../data/tracks'
import type { TestAnswers } from '../context/TestContext'

export interface MatchResult {
  track: Track
  score: number
  resourceMatch: string[]
  directionMatch: string[]
  stageMatch: boolean
  reasons: string[]
}

export function calculateMatch(answers: TestAnswers): MatchResult[] {
  const results: MatchResult[] = tracks.map((track) => {
    const { resources, directions, stages } = track.matchConfig

    // Resource overlap (40% weight)
    const resourceOverlap = answers.resources.filter((r) =>
      resources.includes(r)
    )
    const resourceScore =
      resources.length > 0
        ? (resourceOverlap.length / Math.max(resources.length, answers.resources.length)) * 0.4
        : 0

    // Direction overlap (40% weight)
    const directionOverlap = answers.directions.filter((d) =>
      directions.includes(d)
    )
    const directionScore =
      directions.length > 0
        ? (directionOverlap.length / Math.max(directions.length, answers.directions.length)) * 0.4
        : 0

    // Stage match (20% weight)
    const stageMatch = stages.includes(answers.stage)
    const stageScore = stageMatch ? 0.2 : 0

    const totalScore = resourceScore + directionScore + stageScore

    // Build reasons
    const reasons: string[] = []
    if (resourceOverlap.length > 0) {
      reasons.push(
        `你拥有的${resourceOverlap.length}项资源与该赛道高度匹配`
      )
    }
    if (directionOverlap.length > 0) {
      reasons.push(
        `你的${directionOverlap.length}个创业方向与该赛道发展方向一致`
      )
    }
    if (stageMatch) {
      reasons.push('你当前所处阶段适合进入该赛道')
    }
    if (reasons.length === 0) {
      reasons.push('该赛道是值得探索的方向，可了解更多后再做决策')
    }

    return {
      track,
      score: Math.round(totalScore * 100),
      resourceMatch: resourceOverlap,
      directionMatch: directionOverlap,
      stageMatch,
      reasons,
    }
  })

  // Sort by score descending
  return results.sort((a, b) => b.score - a.score)
}
