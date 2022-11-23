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
            class="block bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent"
          >
            UI/UX
          </span>
          <span class="block">Backend</span>
          <span
            class="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
          >
            Frontend
          </span>
          <span class="block">JavaScript</span>
        </h1>

        <div class="flex items-center space-x-4">
          <router-link
            to="/contact"
            class="link animate-fast-pulse uppercase bg-gradient-to-r from-violet-900 to-pink-500 bg-clip-text text-transparent"
            >Contact</router-link
          >
          <button @click="goTo('info')" class="link uppercase">Details</button>
        </div>
      </div>

      <div
        class="relative h-[450px] w-[550px] transition-all duration-500 md:inline lg:h-[1000px] lg:w-[450px]"
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
      class="relative z-40 -mt-[100vh] min-h-screen bg-black/80 backdrop-blur-md"
    >
      <div class="space-y-10">
        <div class="flex flex-col">
          <div
            class="my-24 mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
          >
            <div>
              <img
                src="../assets/idle.gif"
                alt="pixel gif of person"
                class="w-full"
              />
            </div>
            <div>
              <h2
                class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Character Specifications
              </h2>
              <p class="mt-4 text-gray-400">
                Theo Selin is an aspiring web developer who loves making static
                sites come to life. He has years of experience with design and
                have a knack for UI/UX from years of gaming and scrolling the
                web. He grew up in the technical world and can easily tell when
                something doesn't "feel" right and he loves to create and birth
                new exciting experiences for the users. Click around or contact
                him to learn more. He's a talker!
              </p>

              <dl
                class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"
              >
                <div
                  v-for="feature in features"
                  :key="feature.name"
                  class="border-t border-gray-200 pt-4"
                >
                  <dt class="font-medium text-white">{{ feature.name }}</dt>
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
    name: "Origin",
    description:
      "Grew up in Delsbo, Hälsingland, with his mother and three siblings. They lived in a house that required chopped wood for warmth.",
  },
  {
    name: "Location",
    description:
      "Moved to his father in Solna after school and worked his way to his current situation in Hallonbergen, Stockholm",
  },
  {
    name: "Life",
    description:
      "30yrs, 180cm, 65kg. Worked in retail to find steady ground before moving to IT. He then moved on to Web Development to dive deeper into IT.",
  },
  {
    name: "Skill",
    description:
      "ReactJS, VueJS, Express, MongoDB, NextJS, NuxtJS, Adobe, PowerApps, Office",
  },
  {
    name: "Talent",
    description:
      "UI/UX, Graphic Design, Gaming, People, Motivation, Learning, Pedagogical.",
  },
  {
    name: "Considerations",
    description:
      "He's lovable and fun to be around. His mother is emotionally intelligent and his father has the spirit of an entrepreneur.",
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
