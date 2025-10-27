'use client';

import { useState } from 'react';

export default function RegistroCongresoForm() {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    correoElectronico: '',
    institucion: '',
    nivelAcademico: '',
    modalidad: '',
    ejeTematico: '',
    reciboPago: null,
    interesPosgrado: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [fileName, setFileName] = useState('');

  const nivelesAcademicos = [
    { value: 'licenciatura', label: 'Licenciatura' },
    { value: 'maestria-cursando', label: 'Maestría (cursando)' },
    { value: 'maestria-concluida', label: 'Maestría (concluida)' },
    { value: 'doctorado-cursando', label: 'Doctorado (cursando)' },
    { value: 'doctorado-concluida', label: 'Doctorado (concluida)' },
    { value: 'otro', label: 'Otro' }
  ];

  const modalidades = [
    { value: 'platica-experiencia-profesional', label: '1.- Plática sobre experiencia profesional (Mesa de trabajo)' },
    { value: 'platica-experiencia-investigacion', label: '2.- Plática sobre experiencia investigación' },
    { value: 'ponencia', label: '3.- Ponencia' }
  ];

  const ejesTematicos = [
    { value: 'eje1', label: 'Eje 1: Evaluación institucional como estrategia de mejoramiento' },
    { value: 'eje2', label: 'Eje 2: Impacto del aprendizaje y la educación en la sociedad' },
    { value: 'eje3', label: 'Eje 3: Actores educativos y su papel en la transformación institucional' },
    { value: 'eje4', label: 'Eje 4: Políticas públicas y liderazgo educativo' },
    { value: 'eje5', label: 'Eje 5: Gobernanza colaborativa en entornos multinivel' },
    { value: 'eje6', label: 'Eje 6: Gobernabilidad y liderazgo directivo en sistemas institucionales' },
    { value: 'eje7', label: 'Eje 7: Educación transformadora para la sostenibilidad organizacional' },
    { value: 'eje8', label: 'Eje 8: Gestión organizacional con conciencia ecológica y aprendizaje práctico' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        setErrors(prev => ({ 
          ...prev, 
          reciboPago: 'Solo se permiten archivos JPG, PNG o PDF' 
        }));
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ 
          ...prev, 
          reciboPago: 'El archivo no debe superar los 5MB' 
        }));
        return;
      }

      setFormData(prev => ({
        ...prev,
        reciboPago: file
      }));
      setFileName(file.name);
      
      if (errors.reciboPago) {
        setErrors(prev => ({ ...prev, reciboPago: '' }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombreCompleto.trim()) {
      newErrors.nombreCompleto = 'El nombre completo es requerido';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.correoElectronico.trim()) {
      newErrors.correoElectronico = 'El correo electrónico es requerido';
    } else if (!emailRegex.test(formData.correoElectronico)) {
      newErrors.correoElectronico = 'Correo electrónico inválido';
    }

    if (!formData.institucion.trim()) {
      newErrors.institucion = 'La institución es requerida';
    }

    if (!formData.nivelAcademico) {
      newErrors.nivelAcademico = 'Selecciona tu nivel académico';
    }

    if (!formData.modalidad) {
      newErrors.modalidad = 'Selecciona una modalidad';
    }

    if (!formData.ejeTematico) {
      newErrors.ejeTematico = 'Selecciona un eje temático';
    }

    if (!formData.reciboPago) {
      newErrors.reciboPago = 'El recibo de pago es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      const firstError = document.querySelector('.error-message');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });

      // Aquí conectas con tu API
      const response = await fetch('/api/registro-congreso', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          nombreCompleto: '',
          correoElectronico: '',
          institucion: '',
          nivelAcademico: '',
          modalidad: '',
          ejeTematico: '',
          reciboPago: null,
          interesPosgrado: ''
        });
        setFileName('');
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors({ submit: 'Hubo un error al enviar el formulario. Por favor intenta nuevamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-12 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Registro Exitoso!</h2>
        <p className="text-gray-600 mb-8">
          Gracias por registrarte al Congreso IIESBC. Recibirás un correo de confirmación en breve.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Realizar otro registro
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-800 to-orange-700 bg-clip-text text-transparent mb-3">
          Formulario de Registro
        </h2>
        <p className="text-gray-600">
          Completa todos los campos para confirmar tu participación
        </p>
      </div>

      {errors.submit && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-lg">
          {errors.submit}
        </div>
      )}

      <div className="space-y-6">
        {/* Nombre Completo */}
        <div>
          <label htmlFor="nombreCompleto" className="block text-sm font-semibold text-gray-700 mb-2">
            Nombre Completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nombreCompleto"
            name="nombreCompleto"
            value={formData.nombreCompleto}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all placeholder:text-gray-500 ${
              errors.nombreCompleto ? 'border-red-500' : 'border-gray-200'
            }`}
            placeholder="Ingresa tu nombre completo"
          />
          {errors.nombreCompleto && (
            <p className="error-message mt-2 text-sm text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.nombreCompleto}
            </p>
          )}
        </div>

        {/* Correo Electrónico */}
        <div>
          <label htmlFor="correoElectronico" className="block text-sm font-semibold text-gray-700 mb-2">
            Correo Electrónico <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="correoElectronico"
            name="correoElectronico"
            value={formData.correoElectronico}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all placeholder:text-gray-500 ${
              errors.correoElectronico ? 'border-red-500' : 'border-gray-200'
            }`}
            placeholder="ejemplo@correo.com"
          />
          {errors.correoElectronico && (
            <p className="error-message mt-2 text-sm text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.correoElectronico}
            </p>
          )}
        </div>

        {/* Institución */}
        <div>
          <label htmlFor="institucion" className="block text-sm font-semibold text-gray-700 mb-2">
            Institución <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="institucion"
            name="institucion"
            value={formData.institucion}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all placeholder:text-gray-500 ${
              errors.institucion ? 'border-red-500' : 'border-gray-200'
            }`}
            placeholder="Nombre de tu institución"
          />
          {errors.institucion && (
            <p className="error-message mt-2 text-sm text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.institucion}
            </p>
          )}
        </div>

        {/* Nivel Académico */}
        <div>
          <label htmlFor="nivelAcademico" className="block text-sm font-semibold text-gray-700 mb-2">
            Nivel Académico <span className="text-red-500">*</span>
          </label>
          <select
            id="nivelAcademico"
            name="nivelAcademico"
            value={formData.nivelAcademico}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all appearance-none bg-white ${
              errors.nivelAcademico ? 'border-red-500' : 'border-gray-200'
            } ${!formData.nivelAcademico ? 'text-gray-500' : 'text-gray-900'}`}
          >
            <option value="" className="text-gray-500">Selecciona tu nivel académico</option>
            {nivelesAcademicos.map(nivel => (
              <option key={nivel.value} value={nivel.value}>
                {nivel.label}
              </option>
            ))}
          </select>
          {errors.nivelAcademico && (
            <p className="error-message mt-2 text-sm text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.nivelAcademico}
            </p>
          )}
        </div>

        {/* Modalidad */}
        <div>
          <label htmlFor="modalidad" className="block text-sm font-semibold text-gray-700 mb-2">
            Modalidad <span className="text-red-500">*</span>
          </label>
          <select
            id="modalidad"
            name="modalidad"
            value={formData.modalidad}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all appearance-none bg-white ${
              errors.modalidad ? 'border-red-500' : 'border-gray-200'
            } ${!formData.modalidad ? 'text-gray-500' : 'text-gray-900'}`}
          >
            <option value="" className="text-gray-500">Selecciona una modalidad</option>
            {modalidades.map(modalidad => (
              <option key={modalidad.value} value={modalidad.value}>
                {modalidad.label}
              </option>
            ))}
          </select>
          {errors.modalidad && (
            <p className="error-message mt-2 text-sm text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.modalidad}
            </p>
          )}
        </div>

        {/* Eje Temático */}
        <div>
          <label htmlFor="ejeTematico" className="block text-sm font-semibold text-gray-700 mb-2">
            Eje Temático <span className="text-red-500">*</span>
          </label>
          <select
            id="ejeTematico"
            name="ejeTematico"
            value={formData.ejeTematico}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all appearance-none bg-white ${
              errors.ejeTematico ? 'border-red-500' : 'border-gray-200'
            } ${!formData.ejeTematico ? 'text-gray-500' : 'text-gray-900'}`}
          >
            <option value="" className="text-gray-500">Selecciona un eje temático</option>
            {ejesTematicos.map(eje => (
              <option key={eje.value} value={eje.value}>
                {eje.label}
              </option>
            ))}
          </select>
          {errors.ejeTematico && (
            <p className="error-message mt-2 text-sm text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.ejeTematico}
            </p>
          )}
        </div>

        {/* Recibo de Pago */}
        <div>
          <label htmlFor="reciboPago" className="block text-sm font-semibold text-gray-700 mb-2">
            Recibo de Pago <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="file"
              id="reciboPago"
              name="reciboPago"
              onChange={handleFileChange}
              accept="image/jpeg,image/jpg,image/png,application/pdf"
              className="hidden"
            />
            <label
              htmlFor="reciboPago"
              className={`flex items-center justify-center w-full px-4 py-8 border-2 border-dashed rounded-xl cursor-pointer transition-all hover:border-green-500 hover:bg-green-50 ${
                errors.reciboPago ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'
              }`}
            >
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                {fileName ? (
                  <p className="text-sm text-green-600 font-medium">{fileName}</p>
                ) : (
                  <>
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="font-semibold text-green-600">Haz clic para subir</span> o arrastra el archivo
                    </p>
                    <p className="text-xs text-gray-500">JPG, PNG o PDF (máx. 5MB)</p>
                  </>
                )}
              </div>
            </label>
          </div>
          {errors.reciboPago && (
            <p className="error-message mt-2 text-sm text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.reciboPago}
            </p>
          )}
        </div>

        {/* Interés en Posgrado */}
        <div>
          <label htmlFor="interesPosgrado" className="block text-sm font-semibold text-gray-700 mb-2">
            ¿Te interesa estudiar algún posgrado?
          </label>
          <select
            id="interesPosgrado"
            name="interesPosgrado"
            value={formData.interesPosgrado}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all appearance-none bg-white ${!formData.interesPosgrado ? 'text-gray-500' : 'text-gray-900'}`}
          >
            <option value="" className="text-gray-500">Selecciona una opción</option>
            <option value="maestria">Maestría</option>
            <option value="doctorado">Doctorado</option>
            <option value="no-interesa">No me interesa</option>
          </select>
        </div>
      </div>

      {/* Botón de envío */}
      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="relative px-12 py-4 bg-gradient-to-r from-green-600 to-orange-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </span>
          ) : (
            'Enviar Registro'
          )}
        </button>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        Los campos marcados con <span className="text-red-500">*</span> son obligatorios
      </p>
    </form>
  );
}