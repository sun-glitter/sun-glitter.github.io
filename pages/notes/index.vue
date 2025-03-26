<script setup lang="ts">
const { data: notes } = await useAsyncData('notes', () => queryCollection('notes').all())

// 메타 데이터 설정
useHead({
  title: '노트',
  meta: [
    {
      name: 'description',
      content: '노트',
    },
  ],
})
</script>

<template>
  <div>
    <BHeader />

    <div class="container mx-auto px-4 py-8 max-w-screen-lg">
      <div class="grid grid-cols-3 gap-6">
        <div class="col-span-2">
          <div class="mb-20">
            <h1 class="text-4xl font-bold">노트</h1>
            <p class="text-2xl">자세히 적을만한 건 아닌 짧은 기록</p>
          </div>
          <div v-for="note in notes" :key="note.id" class="border-2 p-4 bg-gray-100 relative">
              <div class="absolute top-[-20px] left-4 border-2 bg-white px-2 py-1 line-clamp-1">
                {{ new Date(note.meta.date).toLocaleDateString('ko-KR') }}
              </div>
              <div class="mt-8 mb-4">
                <ContentRenderer :value="note" />
              </div>
          </div>
        </div>

        <div class="hidden lg:block col-span-1">
          <BSideNav />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prose {
  width: 100%;
  max-width: 65ch;
}
</style>
