type Team = {
  name: string;
  cost: number;
  cities: Set<string>;
};

function selectTeams(citiesNeeded: Set<string>, teams: Team[]): Team[] | null {
  const selectedTeams: Team[] = [];

  while (citiesNeeded.size > 0) {
    let bestTeam: Team | null = null;
    let lowestCostPerCity = Infinity;

    for (const team of teams) {
      let coveredCount = 0;

      for (const city of team.cities) {
        if (citiesNeeded.has(city)) {
          coveredCount++;
        }

        if (coveredCount === 0) {
          continue; // Skip teams that don't cover any needed cities
        }

        const costPerCity = team.cost / coveredCount;

        if (costPerCity < lowestCostPerCity) {
          bestTeam = team;
          lowestCostPerCity = costPerCity;
        }
      }
    }

    if (bestTeam === null) {
      return null; // No team can cover the remaining cities
    }

    selectedTeams.push(bestTeam);

    for (const city of bestTeam.cities) {
      citiesNeeded.delete(city);
    }
  }

  return selectedTeams;
}

const citiesNeeded = new Set(["A", "B", "C", "D", "E", "F"]);

const teams: Team[] = [
  { name: "teamA", cost: 200, cities: new Set(["A", "B", "C", "D"]) },
  { name: "teamB", cost: 120, cities: new Set(["A", "B", "E"]) },
  { name: "teamC", cost: 80, cities: new Set(["C", "D", "F"]) },
];

const selectedTeams = selectTeams(citiesNeeded, teams);
console.log(selectedTeams);
