<template>
    <div class="header">
        <h2>Toutes les recettes</h2>
    </div>

    <div class="body">
        <div v-if="postsPending">
            <p>Loading data</p>
        </div>
        <div v-else-if="blogError">
          <p>error: {{ blogError }}</p>
        </div>
    
        <div v-else>
            <ul>
                <li v-for="post in posts.allPosts" :key="post.id">
                    <nuxt-link :to="{name: 'blog-slug', params: {slug: post.slug}}">
                        <img :src="post.coverImage.url" :alt="post.title">
                        <span class="category">
                            {{ post.category.name }}
                        </span>
                        <p>
                            {{ post.title }}
                        </p>
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import allPostsQuery from '@/cms/queries/allPosts';

    const { data: posts, pending: postsPending, error: blogError } = await useLazyAsyncQuery(allPostsQuery)
</script>
