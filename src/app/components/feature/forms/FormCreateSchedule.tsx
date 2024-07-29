'use client'

import { createOneSchedule } from '@/api/schedules/routes';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import typesOptions from '@/mocks/types.json';
import hoursOptions from '@/mocks/hours.json';
import statusOptions from '@/mocks/status.json';


export default function FormCreateSchedule() {
  const [day, setDay] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>('');

  const {register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = async (data: any) => {
    const date = new Date(data.day);

    if (date.getDay() === 5 || date.getDay() === 6) {
      setErrorMessage('Schedules is not available on weekends!');
    }

    if (date.getDay() !== 5 && date.getDay() !== 6) {
      await createOneSchedule(data);
      window.location.href = "http://localhost:3001/schedules/";
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
                * Status
              </label>
              <div className="mt-2">
                <select
                  id="status"
                  {...register('status', { required: true })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                >
                  {statusOptions.map((data) => {
                    return (
                      <option key={data.status} value={data.status}>{data.status}</option>
                    )
                  })}
                </select>
                {errors.status?.type === "required" && (
                  <p role="alert">This field is required</p>
                )}
              </div>
            </div>
          </div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6">
                  <option>Choose type</option>
                  {typesOptions.map((data) => {
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
                  onChange={(e) => setDay(e.target.value)}
                />
                {errors.day?.type === "required" && (
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6">
                  <option>Choose hour</option>
                  {hoursOptions.map((data) => {
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
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <div className="mt-2">
                <button
                  type="submit"
                  className="bg-green-900 text-white hover:bg-green-600 active:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1" 
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}