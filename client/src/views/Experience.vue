<template>
  <main>
    <section
      class="fixed mt-10 left-0 right-0 top-20 mx-auto flex flex-col h-screen max-w-[1350px] items-center justify-evenly md:flex-row md:top-0"
    >
      <div class="space-y-10">
        <h1
          class="space-y-3 text-5xl font-semibold tracking-wide lg:text-7xl xl:text-7xl"
        >
          <span
            class="typography bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent"
          >
            UI/UX
          </span>
          <span class="typography">Backend</span>
          <span
            class="typography bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
          >
            Frontend
          </span>
          <span class="typography">JavaScript</span>
        </h1>

        <div
          class="flex items-center justify-center space-x-4 md:justify-start"
        >
          <button @click="goTo('info')" class="link uppercase">Details</button>
          <router-link
            to="/contact"
            class="link animate-fast-pulse uppercase bg-gradient-to-r from-violet-900 to-pink-500 bg-clip-text text-transparent"
            >Contact</router-link
          >
        </div>
      </div>

      <div
        class="relative image h-[450px] w-[550px] transition-all duration-500 md:inline lg:h-[1000px] lg:w-[450px]"
      >
        <img src="../assets/parrot.png" layout="fill" objectFit="contain" />
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
      class="relative flex items-center justify-center z-40 -mt-[100vh] min-h-screen bg-black/80 backdrop-blur-md"
    >
      <div class="space-y-10">
        <div class="flex flex-col">
          <div
            class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
          >
            <div
              class="grid items-center grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"
            >
              <img
                src="../assets/infocaption.png"
                alt="infocaption logo"
                class="w-1/2 mx-auto"
              />
              <img
                src="../assets/nackademin.png"
                alt="nackademin logo"
                class="w-1/2 mx-auto"
              />
              <img src="../assets/dozer.png" alt="dozer logo" class="mx-auto" />
              <img
                src="../assets/elgiganten.png"
                alt="elgiganten logo"
                class="w-1/2 mx-auto"
              />
            </div>
            <div>
              <h2
                class="flex justify-center text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl"
              >
                Experience
              </h2>

              <dl class="mt-16 grid grid-cols-1 gap-y-10 sm:gap-y-8 lg:gap-x-8">
                <div
                  v-for="feature in features"
                  :key="feature.name"
                  class="border-t border-gray-200 pt-4"
                >
                  <dt class="font-medium text-gray-200">{{ feature.name }}</dt>
                  <dd class="mt-2 text-sm text-gray-400">
                    {{ feature.description }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
const features = [
  {
    name: "InfoCaption",
    description:
      "I'm currently an intern at InfoCaption where I learn how to work agile as a team and where I get the chance to polish my technical skills.",
  },
  {
    name: "Nackademin",
    description:
      "Studied Full-Stack developer at Nackademin with top grades in most categories. I found that Frontend was appealing to me because of my history with design.",
  },
  {
    name: "Dozer",
    description:
      "Worked as a technical consult for smaller companies and startups like Doktor.se and Storytell. I found my interest in Web development when I created a boarding-system for Doktor.se.",
  },
  {
    name: "Elgiganten",
    description:
      "Started in the warehouse and worked my way up the ladder until I was warehouse & aftersales manager in Bromma. I moved on because I wanted to work in IT.",
  },
];
export default {
  data() {
    return {
      features,
    };
  },
  methods: {
    goTo(ref) {
      let element = this.$refs[ref];
      let top = element.offsetTop;
      window.scrollTo({ top: top, left: 0, behavior: "smooth" });
    },
  },
};
</script>
