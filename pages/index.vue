<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => queryCollection('posts').all())

useSeoMeta({
  title: 'Sun Glitter\'s',
  description: '윤슬.',
})
</script>

<template>
  <div>
    <BHeader />

    <div class="container mx-auto px-4 py-8 max-w-screen-lg">
      <div class="grid grid-cols-3 gap-6">
        <!-- 첫 번째 영역: 최신 블로그 포스트 -->
        <div class="col-span-3 lg:col-span-2">
          <div class="space-y-4 flex flex-col gap-8">
            <NuxtLink
              v-for="post in posts"
              :key="post.id"
              :to="post.path"
              class=""
            >
              <h3 class="font-sans underline-offset-8 font-bold text-3xl md:text-4xl underline mb-2">
                {{ post.title }}
              </h3>
              <time class="text-xl text-gray-500">
                {{ new Date(post.meta.date).toLocaleDateString('ko-KR') }}
              </time>
            </NuxtLink>
          </div>
        </div>
        <div class="hidden lg:block col-span-1">
          <BSideNav />
        </div>
      </div>
    </div>
  </div>
</template>
