<template>
  <main>
    <section
      class="fixed left-0 right-0 top-20 mx-auto flex flex-col h-screen max-w-[1350px] items-center justify-evenly md:flex-row md:top-0"
    >
      <div class="space-y-8">
        <h1
          class="space-y-3 text-5xl font-semibold tracking-wide lg:text-7xl xl:text-7xl"
        >
          <span
            class="block bg-gradient-to-r from-violet-900 to-pink-500 bg-clip-text text-transparent"
          >
            Theo Selin
          </span>
          <span class="block">Developer</span>
          <span class="block">Designer</span>
        </h1>

        <div class="flex items-center space-x-10">
          <router-link
            to="/contact"
            class="link animate-fast-pulse bg-gradient-to-r from-violet-900 to-pink-500 bg-clip-text text-transparent uppercase"
            >Contact</router-link
          >
          <button @click="goTo('info')" class="link uppercase">Details</button>
        </div>
      </div>

      <div
        class="relative h-[450px] w-full transition-all duration-500 md:inline lg:h-[800px] lg:w-[500px]"
      >
        <img src="../assets/me.png" layout="fill" objectFit="contain" />
      </div>
    </section>
    <div class="static h-[200vh]"></div>
    <div
      class="fixed w-full flex items-center text-white justify-center z-40 h-20 top-[90vh] md:top-[95vh]"
    >
      <font-awesome-icon
        @click="goTo('info')"
        icon="fa-solid fa-arrow-down"
        class="arrow"
      />
    </div>
    <section
      ref="info"
      class="relative z-40 -mt-[100vh] min-h-screen bg-black/80 backdrop-blur-md"
    >
      <div class="space-y-10">
        <div>Extra info</div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  methods: {
    goTo(ref) {
      let element = this.$refs[ref];
      let top = element.offsetTop;
      window.scrollTo({ top: top, left: 0, behavior: "smooth" });
    },
  },
};
</script>
