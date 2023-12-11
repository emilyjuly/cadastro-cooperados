<script setup>
import { ref } from 'vue'
import { vMaska } from 'maska'
import { useUsersStore } from '../stores/users'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const name = ref('')
const phone = ref('')
const radioCheck = ref('')
const cnpj = ref('')
const cpf = ref('')
const date = ref('')
const budget = ref('R$')
const errors = ref([])
const router = ref(false)
const createdUser = ref({})
const id = ref('')

const usersStore = useUsersStore()

const checkForm = async () => {
  errors.value = []

  if (!name.value) {
    errors.value.push('O campo Nome é obrigatório')
  }

  if (radioCheck.value === 'pf') {
    checkRequiredField(cpf.value, 'O campo CPF é obrigatório')
    checkRequiredField(date.value, 'O campo Data de nascimento é obrigatório')
    checkMaskCompleteness(cpf.value, 'O campo CPF está incompleto', 14)
  } else {
    checkRequiredField(cnpj.value, 'O campo CNPJ é obrigatório')
    checkRequiredField(date.value, 'O campo Data de constituição é obrigatório')
    checkMaskCompleteness(cnpj.value, 'O campo CNPJ está incompleto', 18)
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
      createdUser.value = usersStore.create({
        id: uuidv4(),
        name: name.value,
        register: cnpj.value ? cnpj.value : cpf.value,
        profile: radioCheck.value,
        date: date.value,
        budget: budget.value,
        phone: phone.value
      })
      if (!createdUser.value) {
        await Swal.fire({
          title: 'Esse CPF/CNPJ já está cadastrado',
          confirmButtonColor: '#00392a'
        })
      } else {
        const ok = await Swal.fire({ title: 'Salvo!', confirmButtonColor: '#00392a' })
        if (ok.isConfirmed) {
          router.value = true
          id.value = createdUser.value.id
        }
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

const checkMaskCompleteness = (value, errorMessage, length) => {
  if (value.length < length) {
    errors.value.push(errorMessage)
  }
}
</script>

<template>
  <div class="card-container">
    <p class="label">Nome *</p>
    <input class="input" type="text" name="name" placeholder="Informe o nome" v-model="name" />
    <p class="label">Telefone</p>
    <input
      class="input"
      type="text"
      name="phone"
      placeholder="+00 (00) 00000-0000"
      v-model="phone"
      v-maska
      data-maska="['+## (##) #####-####', '+## (##) #####-####']"
    />
    <p class="label">Perfil *</p>
    <div class="radios">
      <div class="group">
        <input class="radio" type="radio" name="pf" id="pf" value="pf" v-model="radioCheck" />
        <label class="label-radio" for="pf">Pessoa física</label><br />
      </div>
      <div class="group">
        <input class="radio" type="radio" id="pj" name="pj" value="pj" v-model="radioCheck" />
        <label class="label-radio" for="pj">Pessoa jurídica</label><br />
      </div>
    </div>
    <div class="card-container" v-if="radioCheck === 'pj'">
      <p class="label">CNPJ *</p>
      <input
        class="input"
        type="text"
        name="cnpj"
        placeholder="00.000.000/0000-00"
        v-model="cnpj"
        v-maska
        data-maska="['##.###.###/####-##']"
      />
      <p class="label">Data da constituição *</p>
      <VueDatePicker v-model="date" :format="'dd/MM/yyyy'" />
      <p class="label">Faturamento</p>
      <input class="input" type="text" name="budget" placeholder="R$" v-model="budget" />
    </div>
    <div class="card-container" v-if="radioCheck === 'pf'">
      <p class="label">CPF *</p>
      <input
        class="input"
        type="text"
        name="cpf"
        placeholder="000.000.000-00"
        v-model="cpf"
        v-maska
        data-maska="['###.###.###-##']"
      />
      <p class="label">Data de nascimento *</p>
      <VueDatePicker v-model="date" :format="'dd/MM/yyyy'" />
      <p class="label">Renda</p>
      <input class="input" type="text" name="budget" placeholder="R$" v-model="budget" />
    </div>
    <p class="obs">OBS.: O asterisco (*) marca os campos obrigatórios</p>
    <div class="options" v-if="radioCheck">
      <div>
        <button class="btn" type="submit" @click="checkForm()">Salvar</button>
        <button class="btn" type="button" @click="$router.push('/users')">Cancelar</button>
      </div>

      <div v-if="errors.length > 0">
        <div v-for="error in errors" :key="error">
          <p class="error">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
  <div>
    {{ router ? $router.push(`/details/${id}`) : '' }}
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: var(--medium-grey-color);
  width: 70%;
  padding: 15px;
  gap: 5px;
}
.label {
  font-size: 15px;
}

.input {
  border: none;
  height: 30px;
  padding: 5px;
}

.radios {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-direction: column;
}

.group {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;
}

.radio {
  margin-right: 5px;
}

.label-radio {
  font-size: 15px;
}

.obs {
  color: var(--secondary-background-color);
  font-size: 13px;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: right;
}

.btns {
  gap: 10px;
}

.btn {
  border: none;
  background-color: var(--accent-color);
  padding: 10px;
  transition: 0.5s;
  cursor: pointer;
  color: var(--light-color);
  margin: 10px;
}

.btn:hover {
  background-color: var(--light-green-color);
  transition: 0.5s;
}

.error {
  color: var(--alert-color);
  font-size: 13px;
}
</style>
