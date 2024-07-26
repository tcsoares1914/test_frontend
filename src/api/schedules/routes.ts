/**
 * Get all schedules.
 */
export async function getAllSchedules() {
  try {
    const API_ENDPOINT = 'http://localhost:3000/schedule/';
    const response = await fetch(API_ENDPOINT, {
      method: 'GET',
      next: {
        tags: ['get-all-schedules']
      },
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Create one schedule.
 */
export async function createOneSchedule(data: any) {
  try {
    const API_ENDPOINT = 'http://localhost:3000/schedule/';
    const start = data.day + ' ' + data.hour;
    const body = JSON.stringify({
      plate: data.plate,
      type: data.type,
      start: start,
    });
    console.log(body);
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      body: body,
      next: {
        tags: ['create-schedule']
      },
    });
  
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Get one schedule.
 */
export async function getOneSchedule(id: string) {
  try {
    const API_ENDPOINT = 'http://localhost:3000/schedule/' + id;
    const response = await fetch(API_ENDPOINT, {
      method: 'GET',
      next: {
        tags: ['get-schedule']
      },
    });
  
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Update one schedule.
 */
export async function updateOneSchedule(id: string, data: any) {
  try {
    const API_ENDPOINT = 'http://localhost:3000/schedule/' + id;
    const response = await fetch(API_ENDPOINT, {
      method: 'PATCH',
      body: JSON.stringify(data),
      next: {
        tags: ['update-schedule']
      },
    });
  
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Delete one schedule.
 */
export async function deleteOneSchedule(id: string) {
  try {
    const API_ENDPOINT = 'http://localhost:3000/schedule/' + id;
    const response = await fetch(API_ENDPOINT, {
      method: 'DELETE',
      next: {
        tags: ['delete-schedule']
      },
    });
  
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}