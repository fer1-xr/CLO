'use client'

import { useState } from 'react'
import { Plus, Star, Trash2, Quote } from 'lucide-react'

interface Note {
  id: string
  title: string
  content: string
  category: 'note' | 'quote' | 'reminder'
  isPinned: boolean
  createdAt: string
}

const mockNotes: Note[] = [
  {
    id: '1',
    title: 'La única forma de hacer un gran trabajo',
    content: 'La única forma de hacer un gran trabajo es amar lo que haces. - Steve Jobs',
    category: 'quote',
    isPinned: true,
    createdAt: '2024-01-20',
  },
  {
    id: '2',
    title: 'Recordatorio importante',
    content: 'Revisar los objetivos mensuales y ajustarlos según sea necesario',
    category: 'reminder',
    isPinned: false,
    createdAt: '2024-01-25',
  },
  {
    id: '3',
    title: 'Ideas para el nuevo proyecto',
    content: 'Crear una aplicación que combine todas las herramientas de productividad',
    category: 'note',
    isPinned: false,
    createdAt: '2024-01-26',
  },
]

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>(mockNotes)
  const [showForm, setShowForm] = useState(false)
  const [filterCategory, setFilterCategory] = useState<'all' | 'note' | 'quote' | 'reminder'>('all')

  const deleteNote = (id: string) => {
    setNotes(notes.filter((n) => n.id !== id))
  }

  const togglePin = (id: string) => {
    setNotes(
      notes.map((n) =>
        n.id === id ? { ...n, isPinned: !n.isPinned } : n
      )
    )
  }

  const filteredNotes = filterCategory === 'all'
    ? notes
    : notes.filter((n) => n.category === filterCategory)

  const pinnedNotes = filteredNotes.filter((n) => n.isPinned)
  const unpinnedNotes = filteredNotes.filter((n) => !n.isPinned)

  return (
    <div className="container max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Anotaciones y Frases</h1>
          <p className="text-gray-600">Guarda tus pensamientos, frases inspiradoras y recordatorios</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn btn-primary flex items-center gap-2"
        >
          <Plus size={20} /> Nueva Nota
        </button>
      </div>

      {showForm && (
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-6">Crear Nueva Nota</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Título</label>
              <input
                type="text"
                placeholder="Ej: Frase inspiradora"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Contenido</label>
              <textarea
                placeholder="Escribe el contenido de tu nota"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Categoría</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="note">Nota</option>
                <option value="quote">Frase Inspiradora</option>
                <option value="reminder">Recordatorio</option>
              </select>
            </div>
            <div className="flex gap-4">
              <button type="submit" className="btn btn-primary">
                Guardar Nota
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

      {/* Filters */}
      <div className="flex gap-2 mb-8 flex-wrap">
        <button
          onClick={() => setFilterCategory('all')}
          className={`px-4 py-2 rounded-lg font-medium ${
            filterCategory === 'all'
              ? 'btn btn-primary'
              : 'btn btn-secondary'
          }`}
        >
          Todas
        </button>
        <button
          onClick={() => setFilterCategory('note')}
          className={`px-4 py-2 rounded-lg font-medium ${
            filterCategory === 'note'
              ? 'btn btn-primary'
              : 'btn btn-secondary'
          }`}
        >
          Notas
        </button>
        <button
          onClick={() => setFilterCategory('quote')}
          className={`px-4 py-2 rounded-lg font-medium ${
            filterCategory === 'quote'
              ? 'btn btn-primary'
              : 'btn btn-secondary'
          }`}
        >
          Frases
        </button>
        <button
          onClick={() => setFilterCategory('reminder')}
          className={`px-4 py-2 rounded-lg font-medium ${
            filterCategory === 'reminder'
              ? 'btn btn-primary'
              : 'btn btn-secondary'
          }`}
        >
          Recordatorios
        </button>
      </div>

      {/* Pinned Notes */}
      {pinnedNotes.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">⭐ Fijadas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pinnedNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onDelete={deleteNote}
                onTogglePin={togglePin}
              />
            ))}
          </div>
        </div>
      )}

      {/* Unpinned Notes */}
      {unpinnedNotes.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Mis Notas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unpinnedNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onDelete={deleteNote}
                onTogglePin={togglePin}
              />
            ))}
          </div>
        </div>
      )}

      {filteredNotes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No hay notas en esta categoría</p>
        </div>
      )}
    </div>
  )
}

function NoteCard({
  note,
  onDelete,
  onTogglePin,
}: {
  note: Note
  onDelete: (id: string) => void
  onTogglePin: (id: string) => void
}) {
  const getCategoryColor = (category: Note['category']) => {
    switch (category) {
      case 'quote':
        return 'border-purple-200 bg-purple-50'
      case 'reminder':
        return 'border-orange-200 bg-orange-50'
      default:
        return 'border-blue-200 bg-blue-50'
    }
  }

  const getCategoryEmoji = (category: Note['category']) => {
    switch (category) {
      case 'quote':
        return '💬'
      case 'reminder':
        return '🔔'
      default:
        return '📝'
    }
  }

  return (
    <div className={`card border-2 ${getCategoryColor(note.category)} h-full flex flex-col`}>
      <div className="flex items-start justify-between mb-2">
        <span className="text-2xl">{getCategoryEmoji(note.category)}</span>
        <div className="flex gap-2">
          <button
            onClick={() => onTogglePin(note.id)}
            className={`${note.isPinned ? 'text-yellow-500' : 'text-gray-400'} hover:text-yellow-500`}
          >
            <Star size={20} fill={note.isPinned ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={() => onDelete(note.id)}
            className="text-red-600 hover:text-red-700"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
      <h3 className="font-bold text-lg mb-2 flex-1">{note.title}</h3>
      <p className="text-gray-700 text-sm mb-4 flex-1">{note.content}</p>
      <p className="text-xs text-gray-500">{note.createdAt}</p>
    </div>
  )
}
