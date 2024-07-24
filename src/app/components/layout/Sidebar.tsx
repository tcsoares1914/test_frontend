import Logo from '@/app/components/layout/Logo';
import Menu from '@/app/components/layout/Menu';

export default function Sidebar() {
  return (
    <>
      <nav 
        className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
      >
        <div
          className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
        >
          <Logo />
          <Menu />
        </div>
      </nav>
    </>
  )
}