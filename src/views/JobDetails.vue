<template>
  <div
    :class="{ 'dark': isDarkMode }"
    class="bg-[#F4F6F8] absolute z-1 flex  flex-col justify-center items-center w-full dark:bg-[#121721]  "
  >
    <div v-if="isLoading" class="text-gray-700 mt-4">Loading...</div>

    <div
      v-else
      class="lg:w-[730px] sm:w-full lg:h-full sm:px-8 xs:p-2 xsi:p-2 xss:p-2 "
    >
      <div class="-mt-4  flex justify-center ">
        <div
          class=" bg-white lg:h-[140px] xs:h-[203px] sm:w-full rounded-md shadow-md lg:p-0 md:p-0 flex-shrink-0 flex xs:px-2 sm:h-[140px] xs:hidden lg:block md:block xsi:hidden xss:hidden  "
        >
          <div class="flex justify-center items-center">
            <div class=" flex justify-between items-center w-full  dark:bg-[#19202D]">
              <div
                class="flex flex-col h-[140px] w-[150px] bg-[#e99210] text-white items-center justify-center text-2xl "
              >
                {{ Post.company?.name?.slice(0,2) }}
              </div>

              <div class="flex flex-col px-4 ">
                <p
                  class="text-[#19202D] text-[24px] font-normal leading-normal dark:text-white"
                >
                  {{ Post.company?.name }}
                </p>
                <p
                  class="text-[#19202D] text-[12px] font-normal leading-normal dark:text-[#6E8098]"
                >
                  {{ Post.refs?.landing_page }}
                </p>
              </div>

              <div class="px-2">
                <button
                  class="bg-[#EEEFFC] h-[48px] w-[147px] border-[#5964E0] text-center text-[14px] font-bold leading-normal rounded-[5px] dark:bg-transparent dark:text-white dark:border "
                >
                  Company site
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full h-[205px] rounded-md bg-white xs:block lg:hidden md:hidden xsi:block xss:block xs:p-4 xsi:p-4 xss:p-4 flex flex-col justify-center items-center dark:bg-[#19202D] "
        >
          <div
            class="h-[50px] w-[50px] flex items-center justify-center bg-[#e99210] text-white rounded-lg mx-auto -mt-10 mb-4"
          >
            {{ Post.company?.name?.slice(0, 2) }}
          </div>

          <div class="flex flex-col items-center mt-4">
            <p class="text-[#19202D] text-[20px] font-normal leading-normal">
              <span class="text-center">{{ Post.company?.name }}</span>
            </p>
            <p
              class="text-[#6E8098] text-[12px] font-normal leading-normal text-center"
            >
              {{ Post.refs?.landing_page }}
            </p>
          </div>
          <div class="mt-4  w-full flex justify-center">
            <button
              class="bg-[#EEEFFC] h-[48px] w-[147px] border-[#5964E0] text-[14px] font-bold leading-normal rounded-[5px]"
            >
              Company site
            </button>
          </div>
        </div>
      </div>
      <div
        class="flex flex-wrap  justify-center mt-4 bg-white rounded-md xs:w-full xs:mt-4  xs:px-2 xsi:w-full xsi:mt-4 xss:mb-2 dark:bg-[#19202D]"
      >
        <div class="flex flex-wrap">
          <div class="mt-2 md:p-8 xs:p-4 xsi:p-4 xss:p-4">
            <div
              class="flex text-[12px] font-normal text-[#6E8098] leading-normal"
            >
              <p>{{ formatDate(Post?.publication_date) }} day ago</p>
              .
              <p>{{ Post?.levels?.map(level => level.name).join(", ") }}</p>
            </div>
            <div
              class="flex w-full justify-between xss:flex-col md:flex-row  lg:flex-row "
            >
              <div>
                <p
                  class="flex text-[20px] font-[700] text-[#19202D] leading-normal mt-2 dark:text-[#fff]"
                >
                  {{Post.name
                  }}
                </p>
                <span
                  class="flex text-[12px] font-[700] text-[#5964E0] leading-normal mb-2  "
                >
                  {{ Post?.locations?.map(location => location.name).join(", ") }}
                </span>
              </div>
              <div class="">
                <button
                  class="bg-[#5964E0] h-[48px] lg:w-[147px] md:w-[147px] xss:w-full text-white text-[14px] font-bold leading-normal rounded-[5px]"
                >
                  Apply now
                </button>
              </div>
            </div>

            <div>
              <div
                class="mb-2 mt-4 text-[#6E8098] text-[14px] leading-normal font-normal dark:text-[#9DAEC2]"
                v-html="Post.contents"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mt-8 h-[96px] bg-white w-full flex justify-center items-center sm:px-8 dark:bg-[#19202D] "
    >
      <div class="flex md:w-[730px] justify-between w-full px-2 md:px-0">
        <div>
          <p class="dark:text-[#FFFFFF]">{{Post?.name}}</p>
          <p class="dark:text-[#6E8098]">{{Post?.company?.name}}</p>
        </div>
        <div>
          <button
            class="bg-[#5964E0] p-4 text-white rounded-md text-center text-[14px] font-bold leading-normal"
          >
            Apply now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from "vue"
import axios from "axios"
import { useRoute } from 'vue-router'

export default {

setup(){
 const Post = ref([])
 const route = useRoute()
 const isLoading = ref(true);



const formatDate = (timestamp) => {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const currentTimestamp = Date.now();

  // Convert the timestamp to milliseconds
  const jobTimestamp = new Date(timestamp).getTime();

  const daysDifference = Math.floor((currentTimestamp - jobTimestamp) / millisecondsPerDay);
  return daysDifference;
};


 onMounted(async () => {
        try {
            const postId = route.params.id
            console.log(postId)
            const res = await axios.get(`https://www.themuse.com/api/public/jobs/${postId}`);
          Post.value = res.data;
          isLoading.value = false
          console.log(res.data)
        } catch (error) {
          console.error(error);
        }
      });

 return {
    Post,
    formatDate,
    isLoading
 }

}

}
</script>
