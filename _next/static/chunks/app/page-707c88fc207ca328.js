(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2950:function(e,t,s){Promise.resolve().then(s.bind(s,2590))},2590:function(e,t,s){"use strict";s.r(t);var l=s(7437),n=s(2265);t.default=()=>{let[e,t]=(0,n.useState)("Parth's"),[s,a]=(0,n.useState)(""),[r,i]=(0,n.useState)(""),[c,x]=(0,n.useState)([]),d=e=>{let t=[...c];t.splice(e,1),x(t)},o=(0,l.jsx)("h2",{children:"No Task Available"});return c.length>0&&(o=c.map((e,t)=>(0,l.jsxs)("li",{className:"flex items-center justify-between",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between mb-8 w-2/3",children:[(0,l.jsx)("h5",{className:"text-2xl font-semibold",children:e.title}),(0,l.jsx)("h6",{className:"text-lg font-medium",children:e.desc})]}),(0,l.jsx)("button",{onClick:()=>{d(t)},className:"bg-red-500 text-white px-4 py-2 rounded font-bold",children:"Delete"})]},t))),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h1",{className:"bg-black text-white p-5 text-5xl font-bold text-center",children:[e," Todo List"]}),(0,l.jsxs)("form",{onSubmit:e=>{e.preventDefault(),x([...c,{title:s,desc:r}]),a(""),i(""),console.log(c)},children:[(0,l.jsx)("input",{type:"text",className:"text-2xl border-zinc-800 border-4 m-8 px-4 py-2",placeholder:"Enter Title here",value:s,onChange:e=>{a(e.target.value)}}),(0,l.jsx)("input",{type:"text",className:"text-2xl border-zinc-800 border-4 m-8 px-4 py-2",placeholder:"Enter Description here",value:r,onChange:e=>{i(e.target.value)}}),(0,l.jsx)("button",{className:"bg-black text-white px-2 py-2 text-2xl rounded m-5",children:"Add Task"})]}),(0,l.jsx)("hr",{}),(0,l.jsx)("div",{className:"p-8 bg-slate-200",children:(0,l.jsx)("ul",{children:o})})]})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=2950)}),_N_E=e.O()}]);