<template>
  <button
    @click="$emit('open')"
    class="w-10 h-10 rounded-full bg-[#1cb8c4] text-white text-3xl flex items-center justify-center shadow-md hover:bg-[#159aa8] transition"
    aria-label="Yeni Görev Ekle"
  >
    +
  </button>
</template>
