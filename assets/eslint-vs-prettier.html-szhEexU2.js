import{_ as t,r as p,o,c as r,b as n,d as s,e,a as l}from"./app-ZSiTPGtE.js";const i={},c=n("p",null,"用一句话概括 eslint 和 prettier 的区别:",-1),d=n("p",null,"Prettier for formatting and linters for catching bugs!",-1),u={href:"https://prettier.io/docs/en/comparison",target:"_blank",rel:"noopener noreferrer"},k={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"},v=l(`<h2 id="_1-prettier-的使用" tabindex="-1"><a class="header-anchor" href="#_1-prettier-的使用" aria-hidden="true">#</a> 1. Prettier 的使用</h2><p>Prettier 的本质作用就是格式化代码，没有其他的副作用。 Prettier 有两种使用方式，你既可以在一个<strong>标准的 Nodejs 项目</strong>中使用它，也可以在<strong>不含 Nodejs 的项目中</strong>使用它。</p><h3 id="在-nodejs-项目中" tabindex="-1"><a class="header-anchor" href="#在-nodejs-项目中" aria-hidden="true">#</a> 在 Nodejs 项目中</h3><p>TODO</p><h3 id="在非-nodejs-项目中" tabindex="-1"><a class="header-anchor" href="#在非-nodejs-项目中" aria-hidden="true">#</a> 在非 Nodejs 项目中</h3><p>在非 Nodejs 项目中，由于缺少 nodejs 环境，无法通过命令格式化文件。此时的格式化是依赖于编辑器的。例如在 vscode 中，需要安装扩展插件<code>esbenp.prettier-vscode</code>。并在<code>./.vscode/settings.json</code>中加入如下配置，使得 prettier 插件能生效。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// 使用prettier插件作为默认格式化器</span>
  <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 关闭时自动保存</span>
  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 保存时格式化整个文件，而不仅仅是修改的部分</span>
  <span class="token property">&quot;editor.formatOnSaveMode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 关闭json插件自带的格式化，如果本地有其他语言的格式化器，请也关闭，避免冲突</span>
  <span class="token property">&quot;json.format.enable&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 修改指定的语言的配置（以上都是默认配置，</span>
  <span class="token comment">// 某些语言可能本地有单独的配置，优先级更高，</span>
  <span class="token comment">// 此处是为了覆盖那些优先级更高的配置）</span>
  <span class="token property">&quot;[javascript,typescript,markdown,json]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后书写 prettier 配置文件<code>./prettierrc.js</code>。vscode 会根据该文件进行代码的格式化。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 一行最多 120 字符</span>
  <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用 2 个空格缩进</span>
  <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">// 不使用制表符，而使用空格</span>
  <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 行尾需要有分号</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用单引号</span>
  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 对象的 key 仅在必要时用引号</span>
  <span class="token literal-property property">quoteProps</span><span class="token operator">:</span> <span class="token string">&#39;as-needed&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// jsx 不使用单引号，而使用双引号</span>
  <span class="token literal-property property">jsxSingleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 末尾不需要逗号</span>
  <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 大括号内的首尾需要空格</span>
  <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// jsx 标签的反尖括号需要换行</span>
  <span class="token literal-property property">jsxBracketSameLine</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 箭头函数，只有一个参数的时候，也需要括号</span>
  <span class="token literal-property property">arrowParens</span><span class="token operator">:</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 每个文件格式化的范围是文件的全部内容</span>
  <span class="token literal-property property">rangeStart</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rangeEnd</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
  <span class="token comment">// 不需要写文件开头的 @prettier</span>
  <span class="token literal-property property">requirePragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 不需要自动在文件开头插入 @prettier</span>
  <span class="token literal-property property">insertPragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用默认的折行标准</span>
  <span class="token literal-property property">proseWrap</span><span class="token operator">:</span> <span class="token string">&#39;preserve&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 根据显示样式决定 html 要不要折行</span>
  <span class="token literal-property property">htmlWhitespaceSensitivity</span><span class="token operator">:</span> <span class="token string">&#39;css&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 换行符使用 lf</span>
  <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-eslint-的使用" tabindex="-1"><a class="header-anchor" href="#_2-eslint-的使用" aria-hidden="true">#</a> 2. Eslint 的使用</h2><p>TODO</p>`,11);function b(h,y){const a=p("ExternalLinkIcon");return o(),r("div",null,[c,n("blockquote",null,[d,n("p",null,[s("---- come from "),n("a",u,[s("prettier.io"),e(a)])])]),n("p",null,[s("此处放置 "),n("a",k,[s("Eslint"),e(a)]),s(" 和 "),n("a",m,[s("Prettier"),e(a)]),s(" 的官网地址。")]),v])}const f=t(i,[["render",b],["__file","eslint-vs-prettier.html.vue"]]);export{f as default};
