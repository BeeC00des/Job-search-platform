<!-- Modal.vue -->
<template>
  <div
    v-if="show"
    class="fixed inset-0 overflow-y-auto "
    :class="{ 'dark': isDarkMode }"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity" @click="closeModal">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
      <!-- align-middle is used to center the modal vertically in the viewport -->
      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <!-- Your modal content goes here -->
        <div class="bg-white dark:bg-[#19202D]  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <input
              placeholder="Filter by location"
              class="w-[280px] h-12 outline-none px-2 dark:bg-[#19202D bg-white border-b-2 dark:border-b-[#19202D] dark:bg-[#19202D] "
            />
            <div class="mt-3 text-left sm:mt-0 sm:ml-4 sm:text-left">
              <div class="w-[280px]">
                <label class="mx-2 font-semibold  w-[280px] h-12 dark:text-white">
                  <input type="checkbox" class="mr-2  dark:bg-transparent " />
                  Full-time only
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse dark:bg-[#19202D] ">
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#5964E0] text-base font-medium text-white hover:bg-[#5964E0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5964E0] sm:ml-3 sm:w-auto sm:text-sm"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    openModal() {
      this.show = true;
    },
    closeModal() {
      this.show = false;
    },
  },
};
</script>
