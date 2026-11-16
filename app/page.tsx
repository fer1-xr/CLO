import Link from 'next/link'
import { ArrowRight, CheckCircle, DollarSign, Calendar, Target, FileText, Clock } from 'lucide-react'

const features = [
  {
    icon: CheckCircle,
    title: 'Gestión de Hábitos',
    description: 'Construye hábitos efectivos con seguimiento diario y análisis de progreso',
    path: '/habits',
  },
  {
    icon: DollarSign,
    title: 'Control de Finanzas',
    description: 'Administra ingresos, gastos y presupuestos de forma inteligente',
    path: '/finances',
  },
  {
    icon: Calendar,
    title: 'Cronograma Semanal',
    description: 'Organiza tu tiempo con un calendario y horarios optimizados',
    path: '/schedule',
  },
  {
    icon: Target,
    title: 'Metas y Objetivos',
    description: 'Define metas anuales y objetivos mensuales con seguimiento integrado',
    path: '/goals',
  },
  {
    icon: FileText,
    title: 'Notas y Frases',
    description: 'Guarda anotaciones, recuerdos y frases inspiradoras',
    path: '/notes',
  },
  {
    icon: Clock,
    title: 'Hábitos de Éxito',
    description: 'Implementa los hábitos de la gente altamente efectiva',
    path: '/habits',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Transforma Tu Productividad
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Una plataforma completa para gestionar hábitos, finanzas, tiempo y metas.
            Conviértete en la mejor versión de ti mismo.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
              Comenzar Ahora <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:bg-opacity-10 transition-colors">
              Conocer Más
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Características Principales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link
                  key={index}
                  href={feature.path}
                  className="card hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <span className="text-blue-600 font-medium flex items-center gap-2">
                    Explorar <ArrowRight size={16} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Beneficios de Usar Productividad Pro
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3">📈 Mayor Productividad</h3>
              <p className="text-gray-700">
                Aumenta tu productividad hasta 40% con seguimiento inteligente
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-xl font-bold mb-3">💡 Mejor Toma de Decisiones</h3>
              <p className="text-gray-700">
                Datos y análisis para tomar decisiones informadas sobre finanzas
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold mb-3">🎯 Logra Tus Metas</h3>
              <p className="text-gray-700">
                Alcanza tus objetivos con un sistema probado de seguimiento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para Cambiar Tu Vida?
          </h2>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Registrarse Gratis
          </button>
        </div>
      </section>
    </>
  )
}
