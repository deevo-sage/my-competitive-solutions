/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const courses: number[][] = new Array(numCourses).fill(null).map(() => []);
  for (let i = 0; i < prerequisites.length; i++) {
    const [courseIndex, prerequisiteIndex] = prerequisites[i];
    courses[courseIndex].push(prerequisiteIndex);
  }
  const visited = new Array<boolean>(numCourses).fill(false);
  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(courses, visited, i, i)) return false;
  }

  return true;
}
const hasCycle = (
  adjacencyMatrix: number[][],
  visited: boolean[],
  startIndex: number,
  currentIndex: number
): boolean => {
  if (visited[currentIndex] === true) return true;
  if (adjacencyMatrix[currentIndex].length === 0) return false;
  if (currentIndex < startIndex) return false;

  visited[currentIndex] = true;

  for (let i = 0; i < adjacencyMatrix[currentIndex].length; i++) {
    if (
      hasCycle(
        adjacencyMatrix,
        visited,
        startIndex,
        adjacencyMatrix[currentIndex][i]
      )
    )
      return true;
  }

  visited[currentIndex] = false;

  return false;
};
// @lc code=end
