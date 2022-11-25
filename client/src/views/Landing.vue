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
            class="typography bg-gradient-to-r from-violet-900 to-pink-500 bg-clip-text text-transparent"
          >
            Theo Selin
          </span>
          <span class="typography">Developer</span>
          <span class="typography">Designer</span>
        </h1>

        <div
          class="flex items-center justify-center space-x-4 md:justify-start"
        >
          <router-link to="/about" class="link uppercase">About</router-link>
          <router-link
            to="/contact"
            class="link animate-fast-pulse bg-gradient-to-r from-violet-900 to-pink-500 bg-clip-text text-transparent uppercase"
            >Contact</router-link
          >
        </div>
      </div>

      <div
        class="relative image h-[450px] w-full transition-all duration-500 md:inline lg:h-[800px] lg:w-[500px]"
      >
        <img src="../assets/me.png" layout="fill" objectFit="contain" />
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
