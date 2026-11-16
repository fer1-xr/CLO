'use client'

import { useState } from 'react'
import { Plus, CheckCircle, Circle, Trash2 } from 'lucide-react'

interface Habit {
  id: string
  name: string
  description: string
  frequency: string
  completed_today: boolean
  streak: number
}

const mockHabits: Habit[] = [
  {
    id: '1',
    name: 'Meditación Diaria',
    description: '10 minutos de meditación matutina',
    frequency: 'daily',
    completed_today: true,
    streak: 24,
  },
  {
    id: '2',
    name: 'Ejercicio',
    description: '30 minutos de ejercicio',
    frequency: 'daily',
    completed_today: false,
    streak: 12,
  },
  {
    id: '3',
    name: 'Lectura',
    description: '30 minutos de lectura',
    frequency: 'daily',
    completed_today: true,
    streak: 8,
  },
]

export default function HabitsPage() {
  const [habits, setHabits] = useState<Habit[]>(mockHabits)
  const [showForm, setShowForm] = useState(false)

  const toggleHabit = (id: string) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completed_today: !habit.completed_today,
              streak: habit.completed_today ? habit.streak - 1 : habit.streak + 1,
            }
          : habit
      )
    )
  }

  const deleteHabit = (id: string) => {
    setHabits(habits.filter((h) => h.id !== id))
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Mis Hábitos</h1>
          <p className="text-gray-600">Construye hábitos positivos y sigue tu progreso</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn btn-primary flex items-center gap-2"
        >
          <Plus size={20} /> Nuevo Hábito
        </button>
      </div>

      {showForm && (
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-6">Crear Nuevo Hábito</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nombre del Hábito</label>
              <input
                type="text"
                placeholder="Ej: Meditación matutina"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Descripción</label>
              <textarea
                placeholder="Describe el hábito y su importancia"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows={3}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Frecuencia</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Diario</option>
                  <option>Semanal</option>
                  <option>Mensual</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Categoría</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Salud</option>
                  <option>Productividad</option>
                  <option>Finanzas</option>
                  <option>Aprendizaje</option>
                  <option>Relaciones</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4">
              <button type="submit" className="btn btn-primary">
                Crear Hábito
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="btn btn-secondary"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {habits.map((habit) => (
          <div key={habit.id} className="card">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <button
                  onClick={() => toggleHabit(habit.id)}
                  className="text-blue-600 hover:text-blue-700 mt-1"
                >
                  {habit.completed_today ? (
                    <CheckCircle size={24} className="text-green-600" />
                  ) : (
                    <Circle size={24} />
                  )}
                </button>
                <div className="flex-1">
                  <h3 className={`text-lg font-bold ${habit.completed_today ? 'line-through text-gray-400' : ''}`}>
                    {habit.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{habit.description}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                      📈 Racha: {habit.streak} días
                    </span>
                    <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full">
                      ⏰ {habit.frequency === 'daily' ? 'Diario' : habit.frequency === 'weekly' ? 'Semanal' : 'Mensual'}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => deleteHabit(habit.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
