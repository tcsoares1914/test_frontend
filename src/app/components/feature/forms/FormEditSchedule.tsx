import types from '@/mocks/types.json';
import hours from '@/mocks/hours.json';

export default function FormEditSchedule() {
  return (
    <>
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <form>
          <p className="mt-1 text-sm leading-6 text-gray-600">* Required fields</p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="plate"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Plate
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="plate"
                  id="plate"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="hour"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Type
              </label>
              <div className="mt-2">
                <select
                  id="type"
                  name="type"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6">
                  <option>Choose type</option>
                  {types.map((data) => {
                    return (
                      <option key={data.type}>{data.type}</option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="day"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Day
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="day"
                  id="day"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" 
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="type"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Hour
              </label>
              <div className="mt-2">
                <select
                  id="hour"
                  name="hour"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6">
                  <option>Choose hour</option>
                  {hours.map((data) => {
                    return (
                      <option key={data.slot}>{data.slot}</option>
                    )
                  })}
                </select>
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