function a() {
  return localStorage.getItem("xo_dev_editor_content") || "";
}
function l(t) {
  localStorage.setItem("xo_dev_editor_content", t);
}
function d() {
  return { history: JSON.parse(localStorage.getItem("xo_dev_command_history") || "[]"), historyIndex: -1 };
}
function u(t) {
  localStorage.setItem("xo_dev_command_history", JSON.stringify(t.slice(0, 50)));
}
function f() {
  localStorage.removeItem("xo_dev_command_history");
}
async function s(t, n = "GET", e = null) {
  const r = `/devtools/config/${t}`, i = { method: n, headers: { "Content-Type": "application/json" } };
  e && (i.body = JSON.stringify(e));
  const o = await fetch(r, i);
  if (!o.ok)
    throw new Error(`Vault ${n} failed: ${o.status}`);
  return await o.json();
}
async function p(t, n, e) {
  await s(t, "POST", {
    history: n,
    editor: e
  });
}
async function m(t) {
  return await s(t);
}
const c = (
  /** @type {XODevWindow} */
  window
);
function x({ clearHistory: t, resetEditor: n }) {
  const e = {
    ":reset": () => {
      t(), n();
    },
    ":inspectPeers": () => {
      c.inspectPeers ? c.inspectPeers() : console.log("⚠️ inspectPeers() not defined");
    }
  };
  return (r) => e[r] ? e[r]() : !1;
}
function y(t, n) {
  const e = document.createElement("button");
  return e.innerText = t, e.onclick = n, e;
}
function g(t) {
  const n = document.createElement("button");
  return n.innerText = "🌓 Theme", n.style.cssText = "margin: 8px; background: #222; color: #0f0; border: 1px solid #0f0; border-radius: 4px;", n.onclick = () => {
    const e = t.dataset.theme !== "light";
    t.dataset.theme = e ? "light" : "dark", t.style.background = e ? "#f8f8f8" : "#111", t.style.color = e ? "#111" : "#0f0", n.style.color = e ? "#111" : "#0f0";
  }, n;
}
function b(t, n = "⚙️ Dev Tools") {
  const e = document.createElement("div");
  return e.innerText = n, Object.assign(e.style, {
    position: "fixed",
    top: "10px",
    right: "10px",
    zIndex: 9999,
    padding: "6px 10px",
    background: "#111",
    color: "#0f0",
    border: "1px solid #0f0",
    borderRadius: "6px",
    fontSize: "13px",
    cursor: "pointer"
  }), e.onclick = () => {
    t.style.display = t.style.display === "none" ? "block" : "none";
  }, e;
}
function h() {
  const t = document.createElement("div");
  t.style.display = "flex";
  const n = document.createElement("div");
  n.style.padding = "10px";
  function e(r, i) {
    const o = document.createElement("button");
    o.innerText = r, Object.assign(o.style, {
      flex: 1,
      background: "#222",
      color: "#0f0",
      border: "1px solid #0f0",
      borderBottom: "none",
      cursor: "pointer",
      padding: "5px"
    }), o.onclick = () => {
      n.innerHTML = "", i(n);
    }, t.appendChild(o);
  }
  return { tabs: t, content: n, addTab: e };
}
export {
  y as addActionBtn,
  f as clearHistoryState,
  x as createCommandRunner,
  h as createTabPanel,
  g as createThemeToggle,
  b as createToggleButton,
  a as loadEditorContent,
  d as loadHistoryState,
  m as pullFromVault,
  p as pushToVault,
  l as saveEditorContent,
  u as saveHistoryState,
  s as vaultApi
};
