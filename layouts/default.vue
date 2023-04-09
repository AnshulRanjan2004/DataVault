<template>
  <div class="bg-gray-100 min-h-screen dark:bg-gray-700">
    <div class="relative top-0 z-10 w-full">
      <div class="flex justify-between items-center px-5 lg:px-10 py-5">
        <n-link to="/" class="flex items-stretch font-bold text-2xl md:text-4xl px-4 py-2 dark:text-white"
          ><img class="h-8 w-8 md:h-12 md:w-12" src="../static/icon.png">DataVault</n-link
        >
        <div class="flex justify-center items-center">
          <n-link
            to="/myfiles"
            class="
              rounded-full
              font-bold
              px-4
              py-2
              transition
              duration-300
              ease-in-out
              betterhover:hover:bg-blue-500
              betterhover:hover:text-white
              text-sm
              text-center
              text-xl
              md:text-2xl
            "
            :class="$route.name=='myfiles'?'bg-blue-500 text-white':'text-blue-500 dark:text-blue-300'"
            >My Files</n-link
          >
        </div>
      </div>
    </div>
    
    <div
      v-if="checked"
      class="flex flex-col justify-center items-center flex-grow min-h-screen-80"
    >
      <Security v-if="!(secure || ['faq', 'donate'].indexOf($route.name) != -1 )" />
      <Nuxt v-else />
    </div>
    <div
      v-else
      class="
        md:py-12
        px-4
        sm:px-6
        lg:px-8
        relative
        flex
        items-center
        justify-center
        min-h-screen-80
      "
    >
      <Spinner />
    </div>
    <div class="relative top-0 z-10 w-full">
      <div class="flex justify-start items-center px-10 py-5">
        <p class="text-gray-400 dark:text-gray-200">v1.0.0</p>
        <a
            href="https://github.com/AnshulRanjan2004/DataVault"
            target="_external"
            class="
              px-4
              py-2
            "
            title="View source code"
            ><GithubIcon class="dark:bg-white rounded-full border-2"/></a>
      </div>
    </div>
  </div>
</template>

<script>
import Warning from '~/components/Warning.vue'
export default {
    data() {
        return {
            secure: true,
            checked: false,
        };
    },
    async mounted() {
        if (!window.isSecureContext) {
            // Page is a secure context so service workers are now available
            console.log("not secure context detected");
            this.secure = false;
        }
        else {
            console.log("secure");
        }
        this.checked = true;
    },
    components: { Warning }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
.min-h-screen-80 {
  min-height: 83vh;
}
</style>