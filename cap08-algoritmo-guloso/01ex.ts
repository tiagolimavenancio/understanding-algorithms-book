type Activity = {
  name: string;
  start: number;
  end: number;
};

function selectActivities(activities: Activity[]): Activity[] {
  activities.sort((a, b) => a.end - b.end);

  const selectedActivities: Activity[] = [];
  let availableTime = 0;

  for (const activity of activities) {
    if (activity.start >= availableTime) {
      selectedActivities.push(activity);
      availableTime = activity.end;
    }
  }

  return selectedActivities;
}

const activities: Activity[] = [
  { name: "A", start: 1, end: 4 },
  { name: "B", start: 3, end: 5 },
  { name: "C", start: 0, end: 6 },
  { name: "D", start: 5, end: 7 },
  { name: "E", start: 8, end: 9 },
  { name: "F", start: 5, end: 9 },
];

const selectedActivities = selectActivities(activities);
console.log(selectedActivities);
