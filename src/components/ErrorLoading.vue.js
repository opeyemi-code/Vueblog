import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import ErrorMessage from "./ErrorMessage.vue";
import ButtonWithIcon from "./ButtonWithIcon.vue";
import { store } from "@/store/useStore";
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
const __VLS_0 = ErrorMessage;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    message: "\u0057\u0065\u0020\u0063\u006f\u0075\u006c\u0064\u006e\u0027\u0074\u0020\u006c\u006f\u0061\u0064\u0020\u0074\u0068\u0065\u0020\u0062\u006c\u006f\u0067\u0020\u0070\u006f\u0073\u0074\u0073\u0020\u0061\u0074\u0020\u0074\u0068\u0065\u0020\u006d\u006f\u006d\u0065\u006e\u0074\u002e\u0020\u0050\u006c\u0065\u0061\u0073\u0065\u0020\u0063\u0068\u0065\u0063\u006b\u0020\u0079\u006f\u0075\u0072\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0063\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006f\u006e\u0020\u006f\u0072\u0020\u0074\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u002e",
}));
const __VLS_2 = __VLS_1({
    message: "\u0057\u0065\u0020\u0063\u006f\u0075\u006c\u0064\u006e\u0027\u0074\u0020\u006c\u006f\u0061\u0064\u0020\u0074\u0068\u0065\u0020\u0062\u006c\u006f\u0067\u0020\u0070\u006f\u0073\u0074\u0073\u0020\u0061\u0074\u0020\u0074\u0068\u0065\u0020\u006d\u006f\u006d\u0065\u006e\u0074\u002e\u0020\u0050\u006c\u0065\u0061\u0073\u0065\u0020\u0063\u0068\u0065\u0063\u006b\u0020\u0079\u006f\u0075\u0072\u000d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0063\u006f\u006e\u006e\u0065\u0063\u0074\u0069\u006f\u006e\u0020\u006f\u0072\u0020\u0074\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006e\u002e",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_5 = ButtonWithIcon || ButtonWithIcon;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    text: "Retry",
    ...{ class: "text-white block bg-blue-600 w-full p-3 rounded-lg my-5 hover:cursor-pointer" },
    handleClick: (() => __VLS_ctx.store.reloadPost()),
}));
const __VLS_7 = __VLS_6({
    text: "Retry",
    ...{ class: "text-white block bg-blue-600 w-full p-3 rounded-lg my-5 hover:cursor-pointer" },
    handleClick: (() => __VLS_ctx.store.reloadPost()),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['my-5']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:cursor-pointer']} */ ;
const { default: __VLS_10 } = __VLS_8.slots;
let __VLS_11;
/** @ts-ignore @type {typeof __VLS_components.fontAwesomeIcon | typeof __VLS_components.FontAwesomeIcon} */
fontAwesomeIcon;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent1(__VLS_11, new __VLS_11({
    icon: (__VLS_ctx.faArrowRotateRight),
}));
const __VLS_13 = __VLS_12({
    icon: (__VLS_ctx.faArrowRotateRight),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
// @ts-ignore
[store, faArrowRotateRight,];
var __VLS_8;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=ErrorLoading.vue.js.map