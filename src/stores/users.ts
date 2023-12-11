import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

interface User {
  id: string
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

    getOne(id: string) {
      const user = this.users.find((user) => user.id === id)
      return user
    },

    checkExistence(register: string) {
      const user = this.users.find((user) => user.register === register)
      console.log(user)
      if (user !== undefined) {
        return true
      }
      return false
    },

    create(user: User) {
      const exists = this.checkExistence(user.register)
      if (!exists) {
        this.users.push(user)
        localStorage.setItem('users', JSON.stringify(this.users))
        return user
      }
      return false
    },

    edit(updatedUser: User) {
      const index = this.users.findIndex((user) => user.id === updatedUser.id)
      if (index !== -1) {
        this.users[index] = { ...this.users[index], ...updatedUser }
        this.saveToLocalStorage()
        return true
      }
      return false
    },

    async delete(id: string) {
      const result = await Swal.fire({
        title: 'Deseja excluir esse cooperado?',
        showDenyButton: true,
        confirmButtonText: 'Sim',
        confirmButtonColor: '#00392a',
        denyButtonText: `Não`,
        color: '#00392a'
      })

      if (result.isConfirmed) {
        const index = this.users.findIndex((user) => user.id === id)
        if (index !== -1) {
          this.users.splice(index, 1)
          this.saveToLocalStorage()
          return true
        }
        Swal.fire({ title: 'Feito!', confirmButtonColor: '#00392a' })
      } else if (result.isDenied) {
        Swal.fire({ title: 'O cooperado não foi excluído', confirmButtonColor: '#00392a' })
      }

      return false
    },

    setSearchQuery(query: string) {
      this.searchQuery = query
    },

    saveToLocalStorage() {
      localStorage.setItem('users', JSON.stringify(this.users))
    }
  }
})
