import CardsTotalSchedules from '@/app/components/feature/cards/CardTotalSchedules';
import CardsConfirmations from '@/app/components/feature/cards/CardConfirmations';
import CardsCancelations from '@/app/components/feature/cards/CardCancelations';

export default function Header() {
    return (
      <>
        <div className="relative md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div>
              <div className="flex flex-wrap">
                <CardsTotalSchedules />
                <CardsConfirmations />
                <CardsCancelations />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }