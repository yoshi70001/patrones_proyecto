import { _, o as a, c, p as n, a as d, b as t, d as u, r as h, e as s, w as o, T as m, f, g } from "./index.bab77bf1.js"; import { _ as v } from "./logo.ecef8639.js"; const y = "./assets/auth-img.b95038f7.png"; const b = {}, i = e => (n("data-v-635bf0b9"), e = e(), d(), e), x = { class: "logo" }, w = i(() => t("img", { src: v, alt: "Logo Medical", class: "logo__img" }, null, -1)), I = i(() => t("h1", { class: "logo__title" }, [u("Medical"), t("span", { style: { color: "var(--color-secundary)" } }, ".")], -1)), $ = [w, I]; function A(e, r) { return a(), c("header", x, $); } const B = _(b, [["render", A], ["__scopeId", "data-v-635bf0b9"]]); const L = e => (n("data-v-4cd05308"), e = e(), d(), e), S = { class: "auth" }, k = { class: "auth__container" }, C = L(() => t("section", { class: "auth__side" }, [t("img", { src: y, alt: "Imagen de la vista de autenticaci\xF3n", class: "side_img" })], -1)), N = { class: "auth__side auth__side-page" }, T = { __name: "AuthLayout", setup(e) { return (r, V) => { const l = h("router-view"); return a(), c("div", S, [t("article", k, [C, t("section", N, [s(B), s(l, { class: "auth__view" }, { default: o(({ Component: p }) => [s(m, { name: "fade", mode: "out-in" }, { default: o(() => [(a(), f(g(p)))]), _: 2 }, 1024)]), _: 1 })])])]); }; } }, M = _(T, [["__scopeId", "data-v-4cd05308"]]); export { M as default };
