<script setup>
import { useUsersStore } from '../stores/users'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue'
import Swal from 'sweetalert2'
import { vMaska } from 'maska'

const usersStore = useUsersStore()

const updatedUser = ref({})
const router = ref(false)
const id = ref('')
const errors = ref([])
const show = ref(false)

const formatDateString = (dateString) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
  return new Date(dateString).toLocaleDateString('pt-BR', options)
}

const checkForm = async () => {
  errors.value = []

  if (!updatedUser.value.name) {
    errors.value.push('O campo Nome é obrigatório')
  }

  if (updatedUser.value.profile === 'pf') {
    checkRequiredField(updatedUser.value.date, 'O campo Data de nascimento é obrigatório')
  } else {
    checkRequiredField(updatedUser.value.date, 'O campo Data de constituição é obrigatório')
  }
  if (errors.value.length === 0) {
    const result = await Swal.fire({
      title: 'Deseja salvar esse cadastro?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Salvar',
      confirmButtonColor: '#00392a',
      denyButtonText: `Não salvar`,
      cancelButtonText: 'Cancelar',
      color: '#00392a'
    })

    if (result.isConfirmed) {
      usersStore.edit({
        id: updatedUser.value.id,
        name: updatedUser.value.name,
        register: updatedUser.value.register,
        profile: updatedUser.value.profile,
        date: updatedUser.value.date,
        budget: updatedUser.value.budget,
        phone: updatedUser.value.phone
      })
      const ok = await Swal.fire({ title: 'Salvo!', confirmButtonColor: '#00392a' })
      if (ok.isConfirmed) {
        router.value = true
        id.value = updatedUser.value.id
      }
    } else if (result.isDenied) {
      Swal.fire({ title: 'O cadastro não foi salvo', confirmButtonColor: '#00392a' })
    }
  }
}

const checkRequiredField = (value, errorMessage) => {
  if (!value) {
    errors.value.push(errorMessage)
  }
}
</script>

<template>
  <div v-show="show">{{ (updatedUser = usersStore.getOne($route.params.id)) }}</div>
  <div class="card-container">
    <div class="top-profile">
      <img
        class="avatar"
        :src="`https://api.dicebear.com/7.x/initials/svg?seed=${
          usersStore.getOne($route.params.id).name
        }&radius=50&backgroundType=gradientLinear`"
        alt="avatar"
      />
      <div>
        <p class="name">{{ usersStore.getOne($route.params.id).name }}</p>
        <p class="id">{{ usersStore.getOne($route.params.id).id }}</p>
      </div>
    </div>
    <div class="infos">
      <div class="content">
        <div v-if="usersStore.getOne($route.params.id).profile === 'pf'">
          <div class="line">
            <div class="field">
              <span class="label">Nome: *</span>
              <input type="text" v-model="usersStore.getOne($route.params.id).name" />
            </div>
            <div class="field">
              <span class="label">CPF:</span> {{ usersStore.getOne($route.params.id).register }}
            </div>
          </div>
          <div class="line">
            <div class="field">
              <span class="label">Telefone:</span>
              <input
                type="text"
                v-model="usersStore.getOne($route.params.id).phone"
                placeholder="+00 (00) 00000-0000"
                v-maska
                data-maska="['+## (##) #####-####', '+## (##) #####-####']"
              />
            </div>
            <div class="field">
              <span class="label">Data de nascimento: *</span>
              <VueDatePicker
                v-model="usersStore.getOne($route.params.id).date"
                :format="'dd/MM/yyyy'"
              />
            </div>
          </div>
          <div class="line">
            <div class="field"><span class="label">Perfil:</span> Pessoa física</div>
            <div class="field">
              <span class="label">Renda (mensal):</span>
              <input type="text" v-model="usersStore.getOne($route.params.id).budget" />
            </div>
          </div>
        </div>
        <div v-else-if="usersStore.getOne($route.params.id).profile === 'pj'">
          <div class="line">
            <div class="field">
              <span class="label">Nome: *</span>
              <input type="text" v-model="usersStore.getOne($route.params.id).name" />
            </div>
            <div class="field">
              <span class="label">CNPJ:</span> {{ usersStore.getOne($route.params.id).register }}
            </div>
          </div>
          <div class="line">
            <div class="field">
              <span class="label">Telefone:</span>
              <input type="text" v-model="usersStore.getOne($route.params.id).phone" />
            </div>
            <div class="field">
              <span class="label">Data de constituição: *</span>
              <input
                type="text"
                :v-model="formatDateString(usersStore.getOne($route.params.id).date)"
              />
            </div>
          </div>
          <div class="line">
            <div class="field"><span class="label">Perfil:</span> Pessoa jurídica</div>
            <div class="field">
              <span class="label">Faturamento (mensal):</span>
              <input type="text" v-model="usersStore.getOne($route.params.id).budget" />
            </div>
          </div>
        </div>
        <p class="obs">OBS.: O asterisco (*) marca os campos obrigatórios</p>
        <div v-if="errors.length > 0">
          <div v-for="error in errors" :key="error">
            <p class="error">{{ error }}</p>
          </div>
        </div>
      </div>
      <div class="btns">
        <button type="submit" @click="checkForm()">Salvar</button>
        <button>Cancelar</button>
      </div>
    </div>
    <div>
      {{ router ? this.$router.push(`/details/${usersStore.getOne($route.params.id).id}`) : '' }}
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
  padding: 15px;
  gap: 5px;
}

.obs {
  color: var(--secondary-background-color);
  font-size: 13px;
}

.avatar {
  display: flex;
  width: 100px;
  height: 100px;
}

.top-profile {
  display: flex;
  gap: 10px;
  align-items: center;
}

.name {
  font-size: 20px;
  font-weight: 500;
}

.id {
  font-size: 10px;
}

.infos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.content {
  background-color: var(--light-color);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.field {
  display: flex;
  align-items: center;
  background-color: var(--color-background);
  padding: 5px;
  width: 100%;
  height: 30px;
  margin: 10px;
  font-size: 13px;
  gap: 5px;
}

.line {
  display: flex;
}

.label {
  font-weight: 600;
}

input {
  width: 60%;
}

.btns {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.btns button {
  border: none;
  padding: 10px;
  background-color: var(--accent-color);
  color: var(--light-color);
  transition: 0.5s;
  cursor: pointer;
}

.btns button:hover {
  background-color: var(--light-green-color);
  transition: 0.5s;
}

.error {
  color: var(--alert-color);
  font-size: 13px;
}
</style>
