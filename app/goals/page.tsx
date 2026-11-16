'use client'

import { useState } from 'react'
import { Plus, Target, CheckCircle, Trash2 } from 'lucide-react'

interface Goal {
  id: string
  title: string
  description: string
  type: 'annual' | 'monthly' | 'weekly'
  progress: number
  status: 'not_started' | 'in_progress' | 'completed'
  priority: 'low' | 'medium' | 'high'
  dueDate: string
}

const mockGoals: Goal[] = [
  {
    id: '1',
    title: 'Ahorrar 10,000',
    description: 'Meta financiera anual',
    type: 'annual',
    progress: 60,
    status: 'in_progress',
    priority: 'high',
    dueDate: '2024-12-31',
  },
  {
    id: '2',
    title: 'Completar certificación',
    description: 'Certificación profesional en línea',
    type: 'annual',
    progress: 40,
    status: 'in_progress',
    priority: 'high',
    dueDate: '2024-06-30',
  },
  {
    id: '3',
    title: 'Hacer ejercicio 4 veces',
    description: 'Objetivo semanal de ejercicio',
    type: 'weekly',
    progress: 75,
    status: 'in_progress',
    priority: 'medium',
    dueDate: '2024-02-02',
  },
]

export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>(mockGoals)
  const [showForm, setShowForm] = useState(false)

  const deleteGoal = (id: string) => {
    setGoals(goals.filter((g) => g.id !== id))
  }

  const getStatusColor = (status: Goal['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'in_progress':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: Goal['priority']) => {
    switch (priority) {
      case 'high':
        return 'border-red-400 bg-red-50'
      case 'medium':
        return 'border-yellow-400 bg-yellow-50'
      default:
        return 'border-green-400 bg-green-50'
    }
  }

  const groupedGoals = {
    annual: goals.filter((g) => g.type === 'annual'),
    monthly: goals.filter((g) => g.type === 'monthly'),
    weekly: goals.filter((g) => g.type === 'weekly'),
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Metas y Objetivos</h1>
          <p className="text-gray-600">Define y persigue tus objetivos de forma estructurada</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn btn-primary flex items-center gap-2"
        >
          <Plus size={20} /> Nueva Meta
        </button>
      </div>

      {showForm && (
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-6">Crear Nueva Meta</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Título de la Meta</label>
              <input
                type="text"
                placeholder="Ej: Ahorrar 5000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Descripción</label>
              <textarea
                placeholder="Describe tu meta"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows={3}
              />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Tipo</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option value="annual">Anual</option>
                  <option value="monthly">Mensual</option>
                  <option value="weekly">Semanal</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Prioridad</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option value="low">Baja</option>
                  <option value="medium">Media</option>
                  <option value="high">Alta</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Fecha Límite</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <button type="submit" className="btn btn-primary">
                Crear Meta
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

      {/* Annual Goals */}
      {groupedGoals.annual.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target size={24} /> Metas Anuales
          </h2>
          <div className="space-y-4">
            {groupedGoals.annual.map((goal) => (
              <GoalCard key={goal.id} goal={goal} onDelete={deleteGoal} />
            ))}
          </div>
        </div>
      )}

      {/* Monthly Goals */}
      {groupedGoals.monthly.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target size={24} /> Objetivos Mensuales
          </h2>
          <div className="space-y-4">
            {groupedGoals.monthly.map((goal) => (
              <GoalCard key={goal.id} goal={goal} onDelete={deleteGoal} />
            ))}
          </div>
        </div>
      )}

      {/* Weekly Goals */}
      {groupedGoals.weekly.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target size={24} /> Objetivos Semanales
          </h2>
          <div className="space-y-4">
            {groupedGoals.weekly.map((goal) => (
              <GoalCard key={goal.id} goal={goal} onDelete={deleteGoal} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function GoalCard({
  goal,
  onDelete,
}: {
  goal: Goal
  onDelete: (id: string) => void
}) {
  const getPriorityColor = (priority: Goal['priority']) => {
    switch (priority) {
      case 'high':
        return 'border-red-400 bg-red-50'
      case 'medium':
        return 'border-yellow-400 bg-yellow-50'
      default:
        return 'border-green-400 bg-green-50'
    }
  }

  const getStatusColor = (status: Goal['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'in_progress':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className={`card border-l-4 ${getPriorityColor(goal.priority)}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-bold">{goal.title}</h3>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${getStatusColor(goal.status)}`}>
              {goal.status === 'completed' ? '✓ Completado' : goal.status === 'in_progress' ? '⏳ En Progreso' : '⭕ No Iniciado'}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-3">{goal.description}</p>
        </div>
        <button
          onClick={() => onDelete(goal.id)}
          className="text-red-600 hover:text-red-700"
        >
          <Trash2 size={20} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Progreso</span>
          <span className="font-bold">{goal.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all"
            style={{ width: `${goal.progress}%` }}
          />
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-3">Vencimiento: {goal.dueDate}</p>
    </div>
  )
}
