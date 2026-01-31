import { store } from "@/store/useStore";
import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";
import Hero from "@/components/Hero.vue";
import dayjs from "dayjs";
import ErrorLoading from "./ErrorLoading.vue";
await store.fetchPosts();
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.main, __VLS_intrinsics.main)({
    ...{ class: "flex flex-col justify-center" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
if (__VLS_ctx.store.loading) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "px-5.25 flex flex-col items-center lg:px-40" },
    });
    /** @type {__VLS_StyleScopedClasses['px-5.25']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['lg:px-40']} */ ;
    const __VLS_0 = Hero;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        title: "Latest Blog Posts",
        description: "Insights, stories, and updates ",
    }));
    const __VLS_2 = __VLS_1({
        title: "Latest Blog Posts",
        description: "Insights, stories, and updates ",
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
        ...{ class: "mb-4" },
    });
    /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
    for (const [post] of __VLS_vFor((__VLS_ctx.store.posts))) {
        const __VLS_5 = Card;
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
            key: (post.id),
            id: (post.id),
            category: (post.category),
            published: (__VLS_ctx.dayjs(post.publishedAt).format('dddd, DD MMMM YYYY')),
            readTime: (__VLS_ctx.store.calculateReadTime(post.content) > 1
                ? __VLS_ctx.store.calculateReadTime(post.content) + ' minutes'
                : __VLS_ctx.store.calculateReadTime(post.content) + ' minute'),
            title: (post.title),
            content: (post.content),
            author: "Alex Johnson",
            handleClick: (() => __VLS_ctx.store.selectedCardPost(post)),
        }));
        const __VLS_7 = __VLS_6({
            key: (post.id),
            id: (post.id),
            category: (post.category),
            published: (__VLS_ctx.dayjs(post.publishedAt).format('dddd, DD MMMM YYYY')),
            readTime: (__VLS_ctx.store.calculateReadTime(post.content) > 1
                ? __VLS_ctx.store.calculateReadTime(post.content) + ' minutes'
                : __VLS_ctx.store.calculateReadTime(post.content) + ' minute'),
            title: (post.title),
            content: (post.content),
            author: "Alex Johnson",
            handleClick: (() => __VLS_ctx.store.selectedCardPost(post)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        // @ts-ignore
        [store, store, store, store, store, store, dayjs,];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex justify-center my-7" },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['my-7']} */ ;
    const __VLS_10 = Button;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
        ...{ 'onClick': {} },
        text: "Load more posts",
        ...{ class: "bg-[#4F46E5] text-white px-6 py-3 rounded-lg leading-4 tracking-[0-5px] hover:cursor-pointer" },
    }));
    const __VLS_12 = __VLS_11({
        ...{ 'onClick': {} },
        text: "Load more posts",
        ...{ class: "bg-[#4F46E5] text-white px-6 py-3 rounded-lg leading-4 tracking-[0-5px] hover:cursor-pointer" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    let __VLS_15;
    const __VLS_16 = ({ click: {} },
        { onClick: (...[$event]) => {
                if (!(__VLS_ctx.store.loading))
                    return;
                __VLS_ctx.store.loadMorePosts();
                // @ts-ignore
                [store,];
            } });
    /** @type {__VLS_StyleScopedClasses['bg-[#4F46E5]']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['leading-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['tracking-[0-5px]']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:cursor-pointer']} */ ;
    var __VLS_13;
    var __VLS_14;
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "px-10 text-center flex flex-col items-center justify-center" },
    });
    /** @type {__VLS_StyleScopedClasses['px-10']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
    const __VLS_17 = ErrorLoading;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({}));
    const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=PostLists.vue.js.map