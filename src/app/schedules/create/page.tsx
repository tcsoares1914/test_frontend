import type { Metadata } from 'next';
import FormCreateSchedule from '@/app/components/feature/forms/FormCreateSchedule';

export const metadata: Metadata = {
  title: 'TEST - Create',
  description: '',
};

export default function CreateSchedule() {
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
                      Schedules
                    </h3>
                  </div>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right"></div>
                </div>
              </div>
              <FormCreateSchedule />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
