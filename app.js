// Question 1
/**
 *
    The scores are guaranteed to be non-negative integers.
    The list of scores may contain duplicates.
    The list of scores is not necessarily sorted.
    Participants with the same score will receive the same rank, and the next highest
    rank will be skipped.
 *
 */

function calculate_ranks(scores) {
  //copy and sort the score array
  const sortedScores = scores.slice().sort((a, b) => b - a);
  const ranks = [];
  const scoreToRank = {};
  for (let i = 0; i < sortedScores.length; i++) {
    const score = sortedScores[i];

    //check element is already exist in the object or not, if not then set the  property and value as a rank
    if (!(score in scoreToRank)) {
      scoreToRank[score] = i + 1;
    }
  }

  for (let i = 0; i < scores.length; i++) {
    ranks.push(scoreToRank[scores[i]]);
  }

  return ranks;
}

const scores = [100, 90, 80, 100, 70];
const ranks = calculate_ranks(scores);
console.log(ranks);

// Question 2

/**
 * number of floors = N =  12 floors,.
 * event floor : - 10*2+no of floors steps
 * odd floor:- 10*2+10+1 steps.
 *floor 6:- which has 22 steps.
 */

let calculate_steps = (floor) => {
  if (floor <= 12 && floor !== 0) {
    if (floor % 2 === 0 && floor !== 6) {
      return 10 * 2 + floor;
    } else if (floor % 2 !== 0) {
      return 10 * 2 + 10 + 1;
    } else {
      return 22;
    }
  }
  return "invalid floor";
};

let steps = calculate_steps(6);
console.log(steps);
