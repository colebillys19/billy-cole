export const vueA = `<script>
  export default {
    data() {
      return { count: 0 };
    },
  };
</script>

<template>
  <button @click="count++">increment</button>
  <p>{{ count }}</p>
</template>

<style>
  p {
    color: blue;
  }
</style>
`;

export const vueB = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Hello World</title>
  <script src="https://unpkg.com/vue/dist/vue.min.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function () {
      new Vue({
        el: '#myDiv',
        data: {
          message: "Greetings!"
        }
      })
    })
  </script>
</head>
<body>
  <div id="myDiv">
    <p>{{ message }}</p>
  </div>
</body>
</html>`;

export const svelteA = `<script>
  let count = 0;
</script>

<button on:click={() => count++}>
  increment
</button>
<p>{count}</p>

<style>
  p {
    color: blue;
  }
</style>`;

export const conditionalVue = `<div v-if="conditionA">some content</div>
<div v-else-if="conditionB">some other content</div>
<div v-else>even more content</div>`;

export const conditionalSvelte = `{#if conditionA}
  <div>some content</div>
{:else if conditionB}
  <div>some other content</div>
{:else}
  <div>even more content</div>
{/if}`;

export const loopingVue = `<ul>
  <li v-bind:key="value" v-for="value in arr">
    {{ value }}
  </li>
</ul>`;

export const loopingSvelte = `<ul>
  {#each arr as value}
    <li>{value}</li>
  {/each}
</ul>`;

export const reactiveVue = `<script>
  export default {
    data() {
      return { count: 0 };
    },
  };
</script>

<template>
  <button @click="count++">increment</button>
  <div>{{ count }}</div>
</template>`;

export const reactiveSvelte = `<script>
  let count = 0;
</script>

<button on:click={() => count++}>
  increment
</button>
<p>{count}</p>`;

export const inputBindingVue = `<script>
  export default {
    data() {
      return {
        inputValue: "",
      };
    },
  };
</script>

<template>
  <input v-model="inputValue" />
</template>`;

export const inputBindingSvelte = `<script>
  let inputValue = 0;
</script>

<input bind:value={inputValue}>`;

export const computedVue = `<script>
  export default {
    data() {
      return { count: 0 };
    },
    computed: {
      double() {
        return this.count * 2;
      },
    },
  };
</script>

<template>
  <button @click="count++">increment</button>
  <p>{{ count }}</p>
  <p>{{ double }}</p>
</template>`;

export const computedSvelte = `<script>
  let count = 0;
  $: double = count * 2;
</script>

<button on:click={() => count++}>
  increment
</button>
<p>{count}</p>
<p>{double}</p>`;

export const propsVue = `<script>
  export default {
    props: ["count"],
  };
</script>

<template>
  <p>{{ count }}</p>
</template>`;

export const propsSvelte = `<script>
  export let count;
</script>

<p>{count}</p>`;

export const namedSlotsVue = `<BaseLayout>
  <template #header>
    <div>header content</div>
  </template>
  <template #default>
    <div>main content</div>
  </template>
  <template #footer>
    <div>footer content</div>
  </template>
</BaseLayout>

<template>
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>`;

export const namedSlotsSvelte = `<BaseLayout>
  <header slot="header">header content</header>
  <main>main content</main>
  <footer slot="footer">footer content</footer>
</BaseLayout>

<slot name="header"></slot>
<slot></slot>
<slot name="footer"></slot>`;
