import type { Metadata } from 'next';
import { format } from 'date-fns';
import { revalidateTag } from 'next/cache';
import { getAllSchedules } from '@/api/schedules/routes';

export const metadata: Metadata = {
  title: 'Lava Jato - Agendamentos',
  description: '',
};

export default async function Schedules() {
  const schedules = await getAllSchedules();
  revalidateTag('get-all-schedules');
  return (
    <>
      <div className="px-4 md:px-10 mx-auto w-full -m-24">
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-blueGray-700">
                      Agendamentos
                    </h3>
                  </div>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <a
                      className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                      href="/schedules/create/"
                    >
                      Criar
                    </a>
                  </div>
                </div>
              </div>
              {schedules && (
                <div className="block w-full overflow-x-auto">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          ID
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Placa
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Agendamento
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Tipo
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Status
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Ações
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {schedules?.map((schedule: any) => (
                        <tr key={schedule.id}>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            <a href={'schedules/' + schedule.id}>{schedule.id}</a>
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <a href={'schedules/' + schedule.id}>{schedule.plate}</a>
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {format(new Date(schedule.start), "dd/MM/yyyy (HH:mm:ss") + ' - ' + format(new Date(schedule.finish), "HH:mm:ss)")}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <span className="text-gray-900 mr-4">{schedule.type}</span>
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {schedule.status === 'PENDING' && (
                              <span className="text-gray-900 mr-4">{schedule.status}</span>
                            )}
                            {schedule.status === 'CONFIRMED' && (
                              <span className="text-green-700 mr-4">{schedule.status}</span>
                            )}
                            {schedule.status === 'CANCELED' && (
                              <span className="text-red-700 mr-4">{schedule.status}</span>
                            )}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <a href={'schedules/' + schedule.id}>
                              <i className="fas fa-edit hover:text-green-600"></i>&nbsp;EDIT
                            </a>
                          </td>
                        </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
             )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
