
<template>
    <div id="postBySlug" class="body">
        <nuxt-link :to="{name: 'index'}" class="goBack">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            Retour
        </nuxt-link>
        <div class="header">
            <h2>{{ post.title }}</h2>
            <span class="category">
                {{ post.category.name }}
            </span>
        </div>
        <img :src="post.coverImage.url" :alt="post.title">
        <DatocmsStructuredText :data="post.content" class="content" />
        
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import postBySlug from '@/cms/queries/postBySlug';
    import { StructuredText as DatocmsStructuredText } from "vue-datocms";

    const route = useRoute();
    const slug = route.params.slug;

    const { data: postData, pending: postPending, error: postError } = await useLazyAsyncQuery(postBySlug, { slug: slug });

    const post = postData.value.post;

    console.log(post)
</script>