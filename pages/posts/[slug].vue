<script setup lang="ts">
const { path } = useRoute()
const { data: post } = await useAsyncData(`posts-${path}`, () => {
  return queryCollection("posts").path(path).first();
});

// 메타 데이터 설정
useHead({
  title: post.value?.title,
  meta: [
    {
      name: 'description',
      content: post.value?.description || '',
    },
  ],
})
</script>

<template>
  <div>
    <BHeader />

    <div class="container mx-auto px-4 py-8 max-w-screen-lg">
      <div class="grid grid-cols-3 gap-6">
        <article v-if="post" class="col-span-3 lg:col-span-2">
          <header class="mb-8">
            <h1 class="text-4xl font-bold ">{{ post.title }}</h1>
            <div class="text-gray-500 mt-2">
              {{ new Date(post.meta.date).toLocaleDateString('ko-KR') }}
            </div>
            <div v-if="post.tags" class="flex gap-2 mt-4">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md text-sm"
              >
                {{ tag }}
              </span>
            </div>
          </header>

          <div class="prose dark:prose-invert">
            <ContentRenderer :value="post" />
          </div>

          <footer class="mt-8 pt-8 border-t">
            <nav class="flex justify-between">
              <NuxtLink
                v-if="post.prev"
                :to="post.prev._path"
                class="text-blue-500 hover:underline"
              >
                ← {{ post.prev.title }}
              </NuxtLink>
              <NuxtLink
                v-if="post.next"
                :to="post.next._path"
                class="text-blue-500 hover:underline ml-auto"
              >
                {{ post.next.title }} →
              </NuxtLink>
            </nav>
          </footer>
        </article>

        <div v-else class="col-span-2 text-center py-20">
          <h1 class="text-2xl font-bold">글을 찾을 수 없습니다</h1>
          <NuxtLink to="/" class="text-blue-500 hover:underline mt-4 inline-block">
            시작 화면으로
          </NuxtLink>
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
