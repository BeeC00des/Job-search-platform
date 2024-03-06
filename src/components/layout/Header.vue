<template>
  <nav class="z-1" :class="{ 'dark': isDarkMode }">
    <div class="h-[100px] w-full relative bg-[#f3f5f7] dark:bg-[#121721]">
      <img src="../../assets/Header2.png" class="w-full h-full object-cover" />
    </div>
    <div class="absolute top-0 md:px-32 px-4 py-8 h-full w-full">
      <div class="flex justify-between">
        <h1 class="text-[28px] font-medium dark:text-white">devjobs</h1>
        <div class="flex items-center space-x-4">

          <Sun />
          <button
            @click="toggleDarkMode"
            class="relative rounded-full w-12 h-6 transition duration-300 ease-in-out bg-gray-400 dark:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300 flex justify-center ">
            <div
              class="absolute left-0 w-6 h-6 bg-white  rounded-full shadow-md transform transition-transform"
            ></div>
          </button>
          <Moon />
          <div class="flex items-center">
            <button
            @click="login"
            class="relative rounded-lg w-24 h-12 transition text-black bg-gray-400 dark:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300 flex justify-center pr-4">
            Login
          </button>
          <button
            @click="signUp"
            class="relative rounded-lg w-24 h-12 transition text-black bg-gray-400 dark:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300 flex justify-center "
          >
              Sign
          </button>
          </div>
        
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Sun from "../icons/Sun.vue";
import Moon from "../icons/Moon.vue";
import { ref, onMounted } from "vue";

export default {
  components: {
    Sun,
    Moon,
  },
  setup() {
    const isDarkMode = ref(false);

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      const html = document.querySelector("html");
      html.classList.toggle("dark", isDarkMode.value);
      localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
    };

    // Set initial theme on mount
    onMounted(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        isDarkMode.value = true;
        document.querySelector("html")?.classList.add("dark");
      }
    });

    return {
      isDarkMode,
      toggleDarkMode,
    };
  },
};
</script>
