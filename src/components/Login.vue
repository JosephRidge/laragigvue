<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <!-- <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600" alt="Your Company" /> -->
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up to create your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6" >
        <div>
          <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Full Name(s)</label>
          <div class="mt-2 ">
            <input id="name" name="name" v-model="name" type="text" autocomplete="name" required="" class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" v-model="email" type="email" autocomplete="email" required="" class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-green-600 hover:text-green-500">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input id="password" v-model="password" name="password" type="password" autocomplete="current-password" required="" class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
          </div>
        </div> 
        <div>
          <button   
          @click="registerUserData()"
          :class=" loading === true? 'animate-pulse flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
          : 'flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
          ">
          {{buttonLgn}}</button>
        </div>
      </div>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <a href="#" class="font-semibold leading-6 text-green-600 hover:text-green-500">Start a 14 day free trial</a>
      </p>
      <!-- token -->
 <div>
    Token : <span class="bg-gray-400 font-bold">{{token}}</span>
 </div>
    </div> 
  </div>
</template> 

<script>
import axios from "axios";
export default {
    data(){
        return{
            email:"",
            password:"",
            name:"",
            token:"",
            buttonLgn:"create account",
            loading:false
        }
    },
   methods:{
    registerUserData() {
      this.loading = true;
      this.buttonLgn = "creating ..."
      http://127.0.0.1:8000/api/register?name=JKR&email=test@qwe.net&password=123456'
      axios
        .post(`http://127.0.0.1:8000/api/register?name=${this.name}&email=${this.email}.net&password=${this.password}`)
        .then((response) => 
           { 
            this.token = response.data.accessToken
            this.loading = false;
            this.buttonLgn = "create account "
        }
            
            );
    },
   }
}
</script>

<style>

</style>