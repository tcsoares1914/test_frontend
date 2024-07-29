'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { updateOneSchedule } from '@/api/schedules/routes';
import types from '@/mocks/types.json';
import hours from '@/mocks/hours.json';


export default function FormEditSchedule(schedule: any) {
  const [plate, setPlate] = useState<string>(schedule.schedule.plate);
  const [type, setType] = useState<string>(schedule.schedule.type);
  const [day, setDay] = useState<string>(moment(schedule.schedule.start).format('YYYY-MM-DD'));
  const [startHour, setStartHour] = useState<string>(moment(schedule.schedule.start).format('HH:mm:ss'));
  const [finishHour, setFinishHour] = useState<string>(moment(schedule.schedule.finish).format('HH:mm:ss'));
  const [start, setStart] = useState<string>(schedule.schedule.start);
  const [finish, setFinish] = useState<string>(schedule.schedule.finish);
  const [errorMessage, setErrorMessage] = useState<string | null>('');
  const {register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = async (data: any) => {
    const date = new Date(data.day);
    if (date.getDay() === 5 || date.getDay() === 6) {
      setErrorMessage('Schedules is not available on weekends!');
    }

    if (date.getDay() !== 5 && date.getDay() !== 6) {
      const update = await updateOneSchedule(schedule.schedule.id, data);
      if (update.status === 404) {
        setErrorMessage(update.message);
      }
      if (update) {
        window.location.href = "http://localhost:3001/schedules/";
      }
    }
  }
  return (
    <>
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <form onSubmit={handleSubmit(onSubmit)}>
        <p className="mt-1 text-sm leading-6 bg-red-400 text-white border-spacing-0 rounded">{errorMessage}</p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="plate"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                * Plate
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  {...register('plate', { required: true, pattern: /^[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{1,2}/i })}
                  id="plate"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value)}
                  
                />
                {errors.plate?.type === "required" && (
                  <p role="alert">This field is required</p>
                )}
                {errors.plate?.type === "pattern" && (
                  <p role="alert">This plate is outside Mercosul pattern!</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="hour"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                * Type
              </label>
              <div className="mt-2">
                <select
                  id="type"
                  {...register('type', { required: true })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option>Choose type</option>
                  {types.map((data) => {
                    return (
                      <option key={data.type} value={data.type}>{data.type}</option>
                    )
                  })}
                </select>
                {errors.type?.type === "required" && (
                  <p role="alert">This field is required</p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="day"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                * Day
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  {...register('day', { required: true })}
                  id="day"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                />
                {errors.day?.type === "required" && (
                  <p role="alert">This field is required</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="type"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Start
              </label>
              <div className="mt-2">
                <select
                  id="hour"
                  {...register('hour', { required: true })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                  value={startHour}
                  onChange={(e) => setStartHour(e.target.value)}
                
                  >
                  <option>Choose hour</option>
                  {hours.map((data) => {
                    return (
                      <option key={data.hour} value={data.hour}>{data.hour}</option>
                    )
                  })}
                </select>
                {errors.hour?.type === "required" && (
                  <p role="alert">This field is required</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="type"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Finish
              </label>
              <div className="mt-2">
                <select
                  id="finishHour"
                  {...register('finishHour', { required: false })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                  value={finishHour}
                  onChange={(e) => setFinishHour(e.target.value)}
                  disabled
                  >
                  <option value={finishHour}>{finishHour}</option>
                </select>
                {errors.finishHour?.type === "required" && (
                  <p role="alert">This field is required</p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <div className="mt-2">
                <button
                  type="submit"
                  className="bg-green-900 text-white hover:bg-green-600 active:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1" 
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}