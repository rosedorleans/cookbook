<template>
    <h2>Toutes les recettes</h2>
    <div v-if="postsPending">
        <p>Loading data</p>
    </div>
    <div v-else-if="blogError">
      <p>error: {{ blogError }}</p>
    </div>
    <div v-else>
        <ul>
            <li v-for="post in posts.allPosts" :key="post.id">
                <img :src="post.coverImage.url" :alt="post.title">
                <nuxt-link :to="{name: 'blog-slug', params: {slug: post.id}}">
                    {{ post.title }}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import allPostsQuery from '@/cms/queries/allPosts';

    const { data: posts, pending: postsPending, error: blogError } = await useLazyAsyncQuery(allPostsQuery)
</script>
