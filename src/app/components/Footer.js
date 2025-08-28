export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 p-8 mt-auto">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 className="font-bold text-lg mb-2 text-primary-dark-orange">IIESBC</h4>
          <p className="text-sm">Clave institucional: 02PSU0128P</p>
          <p className="text-sm">RVOE-BC (229 a la 235) M1/13</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2 text-primary-dark-orange">Contáctanos</h4>
          <p className="text-sm">Río Fuerte #1692 Col. Independencia Magisterial. Mexicali, B.C.</p>
          <p className="text-sm">Tel: (686) 564-9010</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2 text-primary-dark-orange">Síguenos</h4>
          {/* Aquí puedes agregar los íconos de redes sociales */}
        </div>
      </div>
      <div className="text-center text-xs text-gray-600 pt-8 mt-8 border-t border-gray-300">
        <p>&copy; {new Date().getFullYear()} Instituto Interamericano de Estudios Superiores de Baja California. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}