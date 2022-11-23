<template>
  <main>
    <section
      class="fixed left-0 right-0 top-10 mx-auto flex flex-col-reverse h-screen max-w-[1350px] items-center justify-evenly md:justify-center md:flex-row md:top-0"
    >
      <div
        class="relative h-[450] w-[300px] transition-all duration-500 md:inline lg:h-[500px] lg:w-[500px]"
      >
        <img src="../assets/elephants.png" layout="fill" objectFit="contain" />
      </div>
      <div>
        <h1
          class="space-y-3 text-5xl font-semibold tracking-wide lg:text-7xl xl:text-7xl"
        >
          <span class="block bg-pink-500 bg-clip-text text-transparent">
            I
          </span>
          <span
            class="block uppercase bg-gradient-to-r from-pink-600 to-violet-500 bg-clip-text text-transparent"
            >Love</span
          >
          <span
            class="block bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent"
            >Contacts</span
          >
        </h1>
        <button
          @click="goTo('form')"
          class="link top-4 animate-fast-pulse uppercase bg-gradient-to-r from-violet-900 to-pink-500 bg-clip-text text-transparent"
        >
          Write something
        </button>
      </div>
    </section>
    <div class="static h-[200vh]"></div>
    <div
      class="fixed w-full flex items-center text-white justify-center z-40 h-20 top-[90vh] md:top-[95vh]"
    >
      <font-awesome-icon
        @click="goTo('form')"
        icon="fa-solid fa-arrow-down"
        class="arrow"
      />
    </div>
    <section ref="form" class="relative z-40 -mt-[100vh] min-h-screen">
      <div>
        <ContactForm />
      </div>
    </section>
  </main>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";

export default {
  methods: {
    goTo(ref) {
      let element = this.$refs[ref];
      let top = element.offsetTop;
      window.scrollTo({ top: top, left: 0, behavior: "smooth" });
    },
  },
  components: { ContactForm },
};
</script>
