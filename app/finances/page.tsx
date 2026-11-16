'use client'

import { useState } from 'react'
import { Plus, TrendingUp, TrendingDown, Trash2 } from 'lucide-react'

interface Transaction {
  id: string
  description: string
  amount: number
  category: string
  type: 'income' | 'expense'
  date: string
}

const mockTransactions: Transaction[] = [
  {
    id: '1',
    description: 'Salario',
    amount: 3000,
    category: 'Ingresos',
    type: 'income',
    date: '2024-01-26',
  },
  {
    id: '2',
    description: 'Supermercado',
    amount: 150,
    category: 'Alimentación',
    type: 'expense',
    date: '2024-01-25',
  },
  {
    id: '3',
    description: 'Gimnasio',
    amount: 50,
    category: 'Salud',
    type: 'expense',
    date: '2024-01-24',
  },
]

export default function FinancesPage() {
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions)
  const [showForm, setShowForm] = useState(false)

  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const expenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = income - expenses

  const deleteTransaction = (id: string) => {
    setTransactions(transactions.filter((t) => t.id !== id))
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Finanzas</h1>
          <p className="text-gray-600">Controla tus ingresos y gastos</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn btn-primary flex items-center gap-2"
        >
          <Plus size={20} /> Nueva Transacción
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="card bg-gradient-to-br from-green-50 to-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Ingresos</p>
              <p className="text-3xl font-bold text-green-600">${income.toFixed(2)}</p>
            </div>
            <TrendingUp size={40} className="text-green-600" />
          </div>
        </div>
        <div className="card bg-gradient-to-br from-red-50 to-red-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Gastos</p>
              <p className="text-3xl font-bold text-red-600">${expenses.toFixed(2)}</p>
            </div>
            <TrendingDown size={40} className="text-red-600" />
          </div>
        </div>
        <div className="card bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Balance</p>
              <p className={`text-3xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${balance.toFixed(2)}
              </p>
            </div>
            <div className="text-blue-600 text-4xl">💰</div>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-6">Nueva Transacción</h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Descripción</label>
                <input
                  type="text"
                  placeholder="Ej: Salario, Compras"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Monto</label>
                <input
                  type="number"
                  placeholder="0.00"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Tipo</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option value="expense">Gasto</option>
                  <option value="income">Ingreso</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Categoría</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Alimentación</option>
                  <option>Transporte</option>
                  <option>Salud</option>
                  <option>Entretenimiento</option>
                  <option>Servicios</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4">
              <button type="submit" className="btn btn-primary">
                Registrar Transacción
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

      <h2 className="text-2xl font-bold mb-6">Historial de Transacciones</h2>
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="card">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`text-2xl ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.type === 'income' ? '📈' : '📉'}
                </div>
                <div>
                  <h3 className="font-bold">{transaction.description}</h3>
                  <p className="text-sm text-gray-600">{transaction.category} • {transaction.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className={`text-lg font-bold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                </p>
                <button
                  onClick={() => deleteTransaction(transaction.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
