export interface User {
  id: string
  email: string
  name: string
}

export interface Habit {
  id: string
  user_id: string
  name: string
  description: string
  frequency: 'daily' | 'weekly' | 'monthly'
  category: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface HabitCompletion {
  id: string
  habit_id: string
  completed_date: string
  notes: string
  created_at: string
}

export interface Goal {
  id: string
  user_id: string
  title: string
  description: string
  goal_type: 'annual' | 'monthly' | 'weekly'
  status: 'not_started' | 'in_progress' | 'completed'
  priority: 'low' | 'medium' | 'high'
  start_date: string
  end_date: string
  progress_percentage: number
  created_at: string
  updated_at: string
}

export interface FinanceTransaction {
  id: string
  user_id: string
  amount: number
  category: string
  description: string
  transaction_date: string
  type: 'income' | 'expense'
  created_at: string
}

export interface FinanceBudget {
  id: string
  user_id: string
  category: string
  limit: number
  month: string
  spent: number
  created_at: string
}

export interface Schedule {
  id: string
  user_id: string
  title: string
  description: string
  start_time: string
  end_time: string
  day_of_week: number
  is_recurring: boolean
  created_at: string
}

export interface Note {
  id: string
  user_id: string
  title: string
  content: string
  category: 'note' | 'quote' | 'reminder'
  is_pinned: boolean
  created_at: string
  updated_at: string
}
