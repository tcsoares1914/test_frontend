/**
 * Get all schedules.
 */
export async function getAllSchedules() {
  const response = await fetch('http://localhost:3000/schedule/');

  return await response.json();
}

/**
 * Get all schedules.
 */
export async function getOneSchedule(id: string) {
  const response = await fetch('http://localhost:3000/schedule/' + id);

  return await response.json();
}