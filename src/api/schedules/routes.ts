import moment from "moment";
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
    data.finish = setFinishtime(data.type, start);
    delete data.day && delete data.hour;
    console.log(data);
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
    data.finish = setFinishtime(data.type, start);
    console.log(data);
    const response = await axios.patch(API_ENDPOINT, data);
  
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

/**
 * Define finish time based on start and washing type.
 */
export function setFinishtime(type: string, start: string) {
  const startDate = new Date(start);
  const finishDate = new Date(startDate);

  if (type === 'SIMPLE') {
    finishDate.setMinutes(startDate.getMinutes() + 29);
    finishDate.setSeconds(59);
  }

  if (type === 'COMPLETE') {
    finishDate.setMinutes(startDate.getMinutes() + 44);
    finishDate.setSeconds(59);
  }

  return moment(finishDate).format('YYYY-MM-DD HH:mm:ss');
}

/**
 * Check if day are available.
 */
export function checkIfDayIsValid(day: string) {
  const date = new Date(day);

  if (date.getDay() === 0 || date.getDay() === 6) {
    return false;
  }

  return true;
}