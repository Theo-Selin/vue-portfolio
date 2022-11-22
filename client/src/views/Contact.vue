<template>
  <main>
    <section
      class="fixed left-0 right-0 top-36 mx-auto flex flex-col gap-10 h-screen max-w-[1350px] items-center md:top-64"
    >
      <div>
        <h1
          class="space-y-8 text-5xl font-semibold tracking-wide lg:text-7xl xl:text-7xl"
        >
          <span
            class="block bg-gradient-to-r from-violet-900 to-pink-500 bg-clip-text text-transparent"
          >
            I
          </span>
          <span
            class="block uppercase bg-gradient-to-r from-violet-900 to-pink-500 bg-clip-text text-transparent"
            >Love</span
          >
          <span
            class="block uppercase bg-gradient-to-r from-violet-900 to-pink-500 bg-clip-text text-transparent"
            >Contacts</span
          >
        </h1>
      </div>

      <div
        class="relative w-1/2 h-[450px] md:w-full transition-all duration-500 md:inline lg:h-[300px] lg:w-[300px]"
      >
        <img src="../assets/heart.gif" layout="fill" objectFit="contain" />
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
