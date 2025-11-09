function Header() {
  return (
    <header className="bg-white shadow-md p-6 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-800">Task Manager Pro</h1>
      <nav>
        <ul className="flex space-x-6 text-gray-600">
          <li><a href="#" className="hover:text-black transition-colors">Inicio</a></li>
          <li><a href="#" className="hover:text-black transition-colors">Tareas</a></li>
          <li><a href="#" className="hover:text-black transition-colors">Acerca de</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
