function selectedStations(
  statesNeeded: Set<string>,
  stations: Record<string, Set<string>>,
): string[] | null {
  const selectedStation: string[] = [];

  while (statesNeeded.size > 0) {
    let bestStation: string | null = null; // Guarda as estações escolhidas.
    let maxCoveredCount: number = 0;

    // 1. Avaliar todas as estações.
    for (const [station, states] of Object.entries(stations)) {
      let coveredCount = 0;

      // 1.1 Contar quantos estados cada estação cobre.
      for (const state of states) {
        if (statesNeeded.has(state)) {
          coveredCount++;
        }
      }

      // 2. Identificar a estação que cobre mais estados.
      if (coveredCount > maxCoveredCount) {
        maxCoveredCount = coveredCount;
        bestStation = station;
      }
    }

    if (bestStation === null) {
      return null;
    }

    // 3. Adicionar a melhor estação.
    selectedStation.push(bestStation);

    // 4. Remover os estados cobertos.
    for (const state of stations[bestStation]) {
      statesNeeded.delete(state);
    }
  }

  return selectedStation;
}

const statesNeeded = new Set<string>(["CE", "PI", "MA", "BA", "PE"]);

const stations: Record<string, Set<string>> = {
  radioA: new Set<string>(["CE", "PI", "MA"]),
  radioB: new Set<string>(["CE", "PI"]),
  radioC: new Set<string>(["MA", "BA"]),
  radioD: new Set<string>(["BA", "PE"]),
  radioE: new Set<string>(["PI", "BA", "PE"]),
};

const result = selectedStations(statesNeeded, stations);
console.log(result);
