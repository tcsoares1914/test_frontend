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
  const [hour, setHour] = useState<string>(moment(schedule.schedule.start).format('HH:mm:ss'));
  const {register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = async (data: any) => {
    await updateOneSchedule(schedule.id, data);
    window.location.href = "http://localhost:3001/schedules/";
  }
  return (
    <>
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="mt-1 text-sm leading-6 text-gray-600">* Required fields</p>
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
                {errors.plate?.type === "required" && (
                  <p role="alert">This field is required</p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
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
                {errors.plate?.type === "required" && (
                  <p role="alert">This field is required</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="type"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                * Hour
              </label>
              <div className="mt-2">
                <select
                  id="hour"
                  {...register('hour', { required: true })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                  value={hour}
                  onChange={(e) => setHour(e.target.value)}
                  >
                  <option>Choose hour</option>
                  {hours.map((data) => {
                    return (
                      <option key={data.hour} value={data.hour}>{data.hour}</option>
                    )
                  })}
                </select>
                {errors.plate?.type === "required" && (
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