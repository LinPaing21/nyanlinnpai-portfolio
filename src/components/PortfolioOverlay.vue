<script setup lang="ts">
import { activeZone, showOverlay } from '../composables/useScrollCamera'

const frontend = [
  { name: 'Javascript', icon: 'fa-brands fa-js' },
  { name: 'Vue 3', icon: 'fa-brands fa-vuejs' },
  { name: 'Flutter', icon: 'fa-brands fa-flutter' },
  // { name: 'TypeScript', icon: 'fa-brands fa-js' },
  { name: 'Tailwind', icon: 'fa-brands fa-tailwind-css' },
  { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
]

const backend = [
  { name: 'PHP', icon: 'fa-brands fa-php' },
  { name: 'Laravel', icon: 'fa-brands fa-laravel' },
  { name: 'Python', icon: 'fa-brands fa-python' },
  { name: 'Fastapi', icon: 'fa-brands fa-python' },
  { name: 'Go', icon: 'fa-brands fa-golang' },
  { name: 'MySQL', icon: 'fa-solid fa-database' },
  { name: 'PostgreSQL', icon: 'fa-brands fa-postgresql' },
  { name: 'MongoDB', icon: 'fa-solid fa-database' },
]

const tools = [
  { name: 'Linux', icon: 'fa-brands fa-linux' },
  { name: 'Docker', icon: 'fa-brands fa-docker' },
  { name: 'Git', icon: 'fa-brands fa-git-alt' },
  { name: 'AWS', icon: 'fa-brands fa-aws' },
  { name: 'Digital Ocean', icon: 'fa-brands fa-digital-ocean' },
  { name: 'BitBucket', icon: 'fa-brands fa-bitbucket' },
  { name: 'Click Up', icon: 'fa-solid fa-c' },
]

const projects = [
  {
    name: 'ShweAI',
    type: 'AI · Full Stack',
    desc: 'Agentic chat platform with FastAPI, WebSockets, Vue 3 and Laravel — real-time AI interactions across web and MiniApp.',
    live: 'https://shweai.ai/',
  },
  {
    name: 'Kawaii JLPT Master',
    type: 'Personal · Web App',
    desc: 'TALL Stack JLPT exam practice app with MongoDB, AWS Lambda web scraper for automated data ingestion.',
    live: 'https://kawaii-jlpt.laravel.cloud/',
  },
  {
    name: 'Padesar KBZPay',
    type: 'MiniApp · Vue.js',
    desc: 'H5 e-commerce MiniApp embedded in KBZPay with auto-login and payment integration APIs.',
    live: '#',
  },
  {
    name: 'ShweMandalar',
    type: 'Mobile + API · Flutter + Laravel',
    desc: 'Customer/Reseller ticketing app with Flutter, RESTful APIs.',
    live: 'https://play.google.com/store/apps/details?id=com.shwemandalar.app&pcampaignid=web_share',
  },
]

const contactLinks = [
  { icon: 'fa-solid fa-file', label: 'NyanLinnPai_Resume.pdf', href: '/NyanLinnPai_Resume.pdf' },
  { icon: 'fa-solid fa-envelope', label: 'plin5757@gmail.com', href: 'mailto:plin5757@gmail.com' },
  { icon: 'fa-brands fa-github', label: 'github.com/LinPaing21', href: 'https://github.com/LinPaing21' },
  { icon: 'fa-brands fa-linkedin', label: 'linkedin.com/in/nyan-lin-paing', href: 'https://linkedin.com/in/nyan-lin-paing-9a7245318' },
]
</script>

<template>
  <div class="fixed inset-0 pointer-events-none z-10">
    <!-- Hero — center -->
    <Transition name="slide-up" mode="out-in">
      <div
        v-if="activeZone === 0 && showOverlay"
        class="absolute bottom-4 lg:bottom-16 left-0 right-0 flex justify-center px-0 lg:px-4 pointer-events-auto"
        style="touch-action: pan-y;"
      >
        <div class="max-w-xs lg:max-w-md w-full bg-slate-950/70 backdrop-blur-xl border border-cyan-900/30 rounded-2xl p-2 lg:p-8 text-white text-center">
          <p class="text-sm tracking-widest text-blue-400 mb-2 hidden lg:block">Hi, I am</p>
          <h1 class="text-2xl lg:text-4xl font-bold text-cyan-400 mb-0 lg:mb-2">Nyan Linn Pai</h1>
          <p class="text-base lg:text-lg text-blue-300 mb-1 lg:mb-6">Full Stack Developer</p>
          <p class="text-blue-900 text-xs lg:text-sm animate-pulse">scroll to explore ↓</p>
        </div>
      </div>
    </Transition>

    <!-- About — right side -->
    <Transition name="slide-left" mode="out-in">
      <div
        v-if="activeZone === 1 && showOverlay"
        class="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 max-w-xs lg:max-w-md w-full bg-slate-950/70 backdrop-blur-xl border border-cyan-900/30 rounded-2xl p-5 lg:p-8 text-white pointer-events-auto"
        style="touch-action: pan-y;"
      >
        <h2 class="text-base lg:text-xl font-bold text-cyan-400 uppercase tracking-widest mb-4 lg:mb-6 pb-2 border-b border-cyan-900/40">About Me</h2>
        <p class="text-blue-300 leading-relaxed mb-4 text-xs lg:text-base">
          Full stack developer based in Myanmar with 2+ years building
          production web and mobile applications. I specialize in Laravel + Vue3
          and enjoy creating smooth, interactive user experiences.
        </p>
        <div class="flex gap-3">
          <a
            href="/NyanLinnPai_Resume.pdf"
            target="_blank"
            class="px-3 lg:px-4 py-2 bg-cyan-500/20 border border-cyan-500 rounded-lg text-cyan-400 text-xs hover:bg-cyan-500/30 transition-colors"
          >
            Resume ↗
          </a>
          <a
            href="https://github.com/LinPaing21"
            target="_blank"
            class="px-3 lg:px-4 py-2 border border-cyan-900 rounded-lg text-blue-300 text-xs hover:border-cyan-500 transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </Transition>

    <!-- Skills — left side -->
    <Transition name="slide-right" mode="out-in">
      <div
        v-if="activeZone === 2 && showOverlay"
        class="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 max-w-xs lg:max-w-md w-full bg-slate-950/70 backdrop-blur-xl border border-cyan-900/30 rounded-2xl p-5 lg:p-8 text-white pointer-events-auto max-h-[70vh] overflow-y-auto"
        style="touch-action: pan-y;"
      >
        <h2 class="text-base lg:text-xl font-bold text-cyan-400 uppercase tracking-widest mb-4 lg:mb-6 pb-2 border-b border-cyan-900/40">Skills</h2>
        <p class="text-cyan-400 text-xs uppercase tracking-widest mb-2">Frontend</p>
        <div class="flex flex-wrap gap-1.5 lg:gap-2 mb-3 lg:mb-4">
          <span
            v-for="t in frontend"
            :key="t.name"
            class="flex items-center gap-1 lg:gap-1.5 px-2 lg:px-3 py-1 rounded-full text-xs text-cyan-400 border border-cyan-900 bg-cyan-950/30"
          >
            <i :class="t.icon"></i>{{ t.name }}
          </span>
        </div>
        <p class="text-cyan-400 text-xs uppercase tracking-widest mb-2">Backend</p>
        <div class="flex flex-wrap gap-1.5 lg:gap-2 mb-3 lg:mb-4">
          <span
            v-for="t in backend"
            :key="t.name"
            class="flex items-center gap-1 lg:gap-1.5 px-2 lg:px-3 py-1 rounded-full text-xs text-cyan-400 border border-cyan-900 bg-cyan-950/30"
          >
            <i :class="t.icon"></i>{{ t.name }}
          </span>
        </div>
        <p class="text-cyan-400 text-xs uppercase tracking-widest mb-2">Tools</p>
        <div class="flex flex-wrap gap-1.5 lg:gap-2">
          <span
            v-for="t in tools"
            :key="t.name"
            class="flex items-center gap-1 lg:gap-1.5 px-2 lg:px-3 py-1 rounded-full text-xs text-cyan-400 border border-cyan-900 bg-cyan-950/30"
          >
            <i :class="t.icon"></i>{{ t.name }}
          </span>
        </div>
      </div>
    </Transition>

    <!-- Projects — right side -->
    <Transition name="slide-left" mode="out-in">
      <div
        v-if="activeZone === 3 && showOverlay"
        class="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 max-w-xs lg:max-w-md w-full bg-slate-950/70 backdrop-blur-xl border border-cyan-900/30 rounded-2xl p-5 lg:p-8 text-white pointer-events-auto max-h-[70vh] overflow-y-auto"
        style="touch-action: pan-y;"
      >
        <h2 class="text-base lg:text-xl font-bold text-cyan-400 uppercase tracking-widest mb-3 lg:mb-4 pb-2 border-b border-cyan-900/40">Work Experience</h2>
        <div class="mb-4 lg:mb-6 p-3 rounded-lg border border-cyan-900/30 bg-cyan-950/20">
          <div class="flex justify-between items-start mb-1">
            <h3 class="text-cyan-400 font-semibold text-xs lg:text-sm">GMBF Group</h3>
            <span class="text-blue-500 text-xs flex items-center gap-1">Nov 2024 – Present</span>
          </div>
          <div class="flex justify-between items-start mb-1">
            <p class="text-blue-300 text-xs mb-1">Full Stack Developer</p>
            <span class="text-xs text-blue-500">Remote</span>
          </div>
        </div>
        <h2 class="text-base lg:text-xl font-bold text-cyan-400 uppercase tracking-widest mb-4 lg:mb-6 pb-2 border-b border-cyan-900/40">Projects</h2>
        <div class="flex flex-col gap-2 lg:gap-3">
          <div
            v-for="project in projects"
            :key="project.name"
            class="p-3 rounded-lg border border-cyan-900/30 bg-cyan-950/20"
          >
            <div class="flex justify-between items-start mb-1">
              <h3 class="text-cyan-400 font-semibold text-xs lg:text-sm">{{ project.name }}</h3>
              <span class="text-xs text-blue-500">{{ project.type }}</span>
            </div>
            <p class="text-blue-300 text-xs mb-2">{{ project.desc }}</p>
            <div class="flex gap-3">
              <a
                v-if="project.live !== '#'"
                :href="project.live"
                target="_blank"
                class="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Live ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Contact — left side -->
    <Transition name="slide-right" mode="out-in">
      <div
        v-if="activeZone === 4 && showOverlay"
        class="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 max-w-xs lg:max-w-md w-full bg-slate-950/70 backdrop-blur-xl border border-cyan-900/30 rounded-2xl p-5 lg:p-8 text-white pointer-events-auto"
        style="touch-action: pan-y;"
      >
        <h2 class="text-base lg:text-xl font-bold text-cyan-400 uppercase tracking-widest mb-4 lg:mb-6 pb-2 border-b border-cyan-900/40">Contact</h2>
        <p class="text-blue-300 mb-3 lg:mb-6 text-sm lg:text-base">Let's Work Together</p>
        <p class="text-blue-300 text-xs lg:text-sm mb-4 lg:mb-6">
          Open to full-time roles and freelance projects.
          Based in Myanmar, available remotely worldwide.
        </p>
        <div class="flex flex-col gap-3 lg:gap-4">
          <a
            v-for="link in contactLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            class="flex items-center gap-3 text-blue-300 hover:text-cyan-400 transition-colors group"
          >
            <i class="text-cyan-400 w-5 text-center text-xs lg:text-base" :class="[link.icon]"></i>
            <span class="text-xs lg:text-sm group-hover:translate-x-1 transition-transform">{{ link.label }}</span>
          </a>
          <div class="flex items-center gap-3 text-blue-300 hover:text-cyan-400 transition-colors group">
            <i class="text-cyan-400 w-5 text-center fa-solid fa-phone text-xs lg:text-base"></i>
            <span class="text-xs lg:text-sm group-hover:translate-x-1 transition-transform">
              +959-76675-7417 / +668-1715-7257
            </span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* == SLIDE FROM RIGHT (left-side cards) == */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
.slide-right-enter-to,
.slide-right-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* == SLIDE FROM LEFT (right-side cards) == */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
.slide-left-enter-to,
.slide-left-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* == SLIDE UP (hero center card) == */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.slide-up-enter-to,
.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
