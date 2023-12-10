import { defineStore } from 'pinia'

interface User {
  id: number
  name: string
  register: string
  profile: string
  date: string
  budget: string
  phone: string
}

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [] as User[],
    searchQuery: ''
  }),
  actions: {
    getAll() {
      if (this.users.length === 0) {
        const storedUsers = localStorage.getItem('users')
        if (storedUsers) {
          this.users = JSON.parse(storedUsers)
        }
      }
      return this.users
    },

    create(user: User) {
      this.users.push(user)
      localStorage.setItem('users', JSON.stringify(this.users))
    },

    edit(id: number) {},

    delete(id: number) {},

    setSearchQuery(query: string) {
      this.searchQuery = query
    }
  }
})
