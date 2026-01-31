import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const __VLS_props = defineProps({
    message: String,
});
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.FontAwesomeIcon} */
FontAwesomeIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    icon: (__VLS_ctx.faTriangleExclamation),
    ...{ class: "text-[#EF4444] bg-[#FEF2F2] px-6 py-6 rounded-full text-xl my-5" },
    'aria-hidden': "true",
}));
const __VLS_2 = __VLS_1({
    icon: (__VLS_ctx.faTriangleExclamation),
    ...{ class: "text-[#EF4444] bg-[#FEF2F2] px-6 py-6 rounded-full text-xl my-5" },
    'aria-hidden': "true",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['text-[#EF4444]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#FEF2F2]']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-6']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['my-5']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
    ...{ class: "text-slate-900 text-2xl leading-8 font-bold my-3" },
});
/** @type {__VLS_StyleScopedClasses['text-slate-900']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-8']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['my-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "text-[1rem] leading-6.5 w-90 text-center" },
});
/** @type {__VLS_StyleScopedClasses['text-[1rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-6.5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-90']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
(__VLS_ctx.message);
// @ts-ignore
[faTriangleExclamation, message,];
const __VLS_export = (await import('vue')).defineComponent({
    props: {
        message: String,
    },
});
export default {};
//# sourceMappingURL=ErrorMessage.vue.js.map