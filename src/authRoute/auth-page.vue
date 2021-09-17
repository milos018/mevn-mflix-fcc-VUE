<template>
  <section class="w-full max-w-lg mx-auto">
    <div class="w-full flex justify-between items-center text-xl" p="x-2 y-8">
      <p
        @click="switchMode('login')"
        p="y-2 x-5"
        cursor="pointer"
        :class="{ 'font-bold': mode === 'login' }"
      >
        Login
      </p>
      <p
        @click="switchMode('signup')"
        p="y-2 x-5"
        cursor="pointer"
        :class="{ 'font-bold': mode === 'signup' }"
      >
        Signup
      </p>
    </div>
    <form @submit.prevent="getAuth" p="y-8 x-2" class="flex gap-5 flex-col">
      <div class="flex flex-col">
        <label for="password" w="full lg:auto" text=" gray-700">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          p="2"
          class="rounded-lg border-1 border-solid border-[magenta]"
          v-model="email"
        />
      </div>
      <div class="flex flex-col">
        <label for="password" w="full lg:auto" text=" gray-700">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          p="2"
          class="rounded-lg border border-1 border-solid border-[magenta]"
          v-model="password"
        />
      </div>

      <button
        bg="[magenta]"
        font="bold"
        m="y-9"
        p="y-2 x-5"
        class="text-white rounded-md"
      >
        {{ mode === "login" ? "Login" : "Signup" }}
      </button>
      <p
        v-if="reqError"
        text="white center"
        bg=" red-500"
        p="2"
        class="rounded-lg"
      >
        {{ reqError }}
      </p>
    </form>
  </section>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import axios from "axios";

import { updateUser } from "../hooks/useAuth";

const mode = ref("login");
const switchMode = (newMode) => (mode.value = newMode);

const email = ref("");
const password = ref("");

const router = useRouter();
const reqError = ref("");

const getAuth = async () => {
  const url = import.meta.env.PROD
    ? "https://mevn-mflix-fcc.herokuapp.com/auth/" + mode.value
    : "http://localhost:5500/auth/" + mode.value;
  try {
    const response = await axios.post(url, {
      email: email.value,
      password: password.value,
    });

    const { data } = response;

    updateUser(data);
    router.push("/");
  } catch (err) {
    reqError.value = err.response.data.error;
  }
};
</script>
