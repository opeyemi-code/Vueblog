import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useRouter } from "vue-router";
const router = useRouter();
const goBack = () => {
    router.back();
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.goBack) },
    ...{ class: "ml-3 hover:cursor-pointer hover:text-blue-600 flex items-center gap-2" },
});
/** @type {__VLS_StyleScopedClasses['ml-3']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.FontAwesomeIcon} */
FontAwesomeIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    icon: (['fas', 'arrow-left']),
}));
const __VLS_2 = __VLS_1({
    icon: (['fas', 'arrow-left']),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
// @ts-ignore
[goBack,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=BackButton.vue.js.map