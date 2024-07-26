import axios from "axios";

/**
 * Get all schedules.
 */
export async function getAllSchedules() {
  try {
    const API_ENDPOINT = 'http://localhost:3000/schedule/';
    const response = await fetch(API_ENDPOINT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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
    data.start = start;
    delete data.day && delete data.hour;
    const response = await axios.post(API_ENDPOINT, data);
  
    return response.data;
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
    const start = data.day + ' ' + data.hour;
    data.start = start;
    const response = await axios.patch(API_ENDPOINT, data);
    console.log(response.data);
  
    return response.data;
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