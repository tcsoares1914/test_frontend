export default function Menu() {
  return (
    <>
      <div
        className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden"
      >
        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
          <li className="items-center">
            <a
              className="text-gray-700 hover:text-green-600 text-xs uppercase py-3 font-bold block"
              href="/schedules"
            >
              <i className="fas fa-tv opacity-75 mr-2 text-sm"></i>
              Agendamentos
            </a>
          </li>
          <li className="items-center">
            <a
              className="text-gray-700 hover:text-green-600 text-xs uppercase py-3 font-bold block"
              href="/schedules/create"
            >
              <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>
              Criar Agendamento
            </a>
          </li>
          <hr />
          <li className="items-center">
            <a
              className="text-gray-700 hover:text-green-600 text-xs uppercase py-3 font-bold block"
              href="/confirmations"
            >
              <i className="fas fa-thumbs-up opacity-75 mr-2 text-sm"></i>
              Lista Confirmados
            </a>
          </li>
          <li className="items-center">
            <a
              className="text-gray-700 hover:text-green-600 text-xs uppercase py-3 font-bold block"
              href="/cancelations"
            >
              <i className="fas fa-times-circle opacity-75 mr-2 text-sm"></i>
              Lista Cancelados
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}