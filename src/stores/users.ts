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
    users: [] as User[]
  }),
  actions: {
    getAll() {
      return this.users
    },

    create(user: User) {
      this.users.push(user)
    },

    edit(id: number) {},

    delete(id: number) {}
  }
})
