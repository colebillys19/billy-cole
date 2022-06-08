<script lang="ts">
	import CodeSnip from '$lib/blogPost/code-snippet.svelte';
	import HornsDivider from '$lib/blogPost/horns-divider.svelte';
	import PostFooter from '$lib/blogPost/post-footer.svelte';

	import snippetStylesDark from '../../../styles/codeSnippetStyles/dark';
	import snippetStylesLight from '../../../styles/codeSnippetStyles/light';
	import store from '../../../store';

	import {
		computedSvelte,
		computedVue,
		conditionalSvelte,
		conditionalVue,
		inputBindingSvelte,
		inputBindingVue,
		loopingSvelte,
		loopingVue,
		namedSlotsSvelte,
		namedSlotsVue,
		propsSvelte,
		propsVue,
		reactiveSvelte,
		reactiveVue,
		svelteA,
		vueA,
		vueB
	} from './snippets';

	const { isDarkMode } = store;
</script>

<svelte:head>
	{@html $isDarkMode ? snippetStylesDark : snippetStylesLight}
</svelte:head>
<div class:isDarkMode={$isDarkMode} class="blogPostContainer">
	<h1>Vue vs. Svelte</h1>
	<p class="date">April 8th, 2022</p>
	<p>
		Javascript frameworks like React, Vue, and Svelte make building robust web applications easier.
		They provide a declarative layer that acts as sort of a middle-man between the user and DOM. The
		user communicates the output they want and the framework takes care of the busy work involved
		with manipulating the page.
	</p>
	<p>
		In the past I've worked primarily with React. But I don't think there is a "best" framework.
		Each framework shines in different situations. And in an effort to add more tools to my web dev
		belt, I thought it may be interesting to write a blog post where I take React out of the picture
		and compare Vue and Svelte.
	</p>
	<p>So first up is Vue. What made it unique at the time it was created? Let's go back to 2013.</p>
	<p>
		These days we kind of take JavaScript frameworks for granted. It's pretty easy to stand up a
		sleek, performant web application. But when Evan You began building Vue, most web developers
		relied on tools like jQuery to build their apps. This was a very hands on approach - the more
		complex an application became, the more painful it was to keep everything working in unison.
	</p>
	<p>
		To help solve this problem, Evan leveraged the concept of declarative and reactive rendering.
		The idea was that when a user interacts with an application their actions should change state,
		not the DOM itself. And then there's logic in place that updates the DOM efficiently based on
		what state changed. I should mention that in 2013 this idea was already being used by other
		frameworks. However, Evan was striving to offer better performance and simpler syntax. Not only
		did he want to improve on other frameworks' functionality, he wanted to make sure new developers
		could pick up Vue and be productive as fast as possible.
	</p>
	<p>
		When a developer builds a Vue application they assemble the UI by combining small, manageable
		pieces called "components". This not only improves the aesthetic of a page, it allows for a
		separation of concerns with application state. For example, the button the user clicks to sign
		out shouldn't have any knowledge of how many items are in their shopping cart. Each small piece
		of an interface should be concerned with as little state as possible. When state changes in a
		Vue application, a diffing algorithm compares the new state to the old and determines which
		components need to be updated. It will then re-render only those components. This makes the app
		performant while also preventing changes to irrelevant components.
	</p>
	<p>
		The main thing that helps ensure Vue is easy to learn is the way the components are written.
		Each component uses a template syntax that's accessible to any developer with a rudimentary
		knowledge of HTML, CSS, and JavaScript.
	</p>
	<CodeSnip code={vueA} />
	<p>
		Additionally, it's possible to create a Vue application without a build step - you can pull the
		framework into an HTML document via a script tag and you're off to the races.
	</p>
	<CodeSnip code={vueB} />
	<p>
		A framework like Angular sometimes gets described as having too many tools included out of the
		box. Which isn't desirable to developers who want to make a simple application. On the contrary,
		a framework like React sometimes gets described as not having enough included. This makes it
		challenging to figure out which tools to reach for. Vue does a great job of keeping things
		minimal, while at the same time including just enough out of the box to get your app up and
		running quickly. Also, it's clear which tools to reach for <span class="parens"
			>(and how to use them)</span
		> when you want to scale up your project's complexity.
	</p>
	<div class="divider" />
	<p>
		In 2016, a developer named Rich Harris started working on a new framework called Svelte. His aim
		was to push Evan's ideas even further. He wanted to make a tool that was more performant than
		Vue and even easier to use.
	</p>
	<p>
		Rich wanted to take a slightly different approach. He wanted Svelte to handle as much of the
		work as possible at build-time instead of run-time. The idea was that the magic would happen
		prior to deploying your application, when your code is compiled to static files the browser can
		interpret. With a framework like Vue, the magic happens while your application is actually
		running in the browser. This is only possible because Vue includes the extra code needed in the
		files generated. So Rich's approach would allow for smaller files, hence the application would
		load faster.
	</p>
	<p>
		Although Vue's declarative/reactive model works like a charm, it leaves more to be desired from
		a performance standpoint. The 2022 user expects speedy applications. Svelte is more surgical in
		how it updates the page when state changes. Instead of diffing the entire application with each
		change, Svelte <span class="parens">(or rather just JavaScript)</span> updates the HTML elements
		associated with that changed state. With Svelte there are no components in play by the time your
		app is running in the browser, everything's already been converted to plain JS.
	</p>
	<p>
		In <a
			aria-label="youtube video: Svelte with Rich Harris"
			href="https://www.youtube.com/watch?v=JIBZwYZcwIo"
			target="_blank">this LogRocket interview</a
		>, Rich mentions he feels the concept of a virtual DOM
		<span class="parens">(referring to React's approach to declarative/reactive rendering)</span> is
		less about performance and "more about providing this really nice, declarative programming model".
		He goes on to say how there are other ways to provide that same declarative programming model without
		the overhead that comes with it. Essentially he wanted to create a tool that provides the same functionality
		but without the extra baggage.
	</p>
	<p>
		Rich says: "Svelte analyzes your code during your build step and converts it into <span
			class="parens">(essentially)</span
		>
		vanilla JavaScript. Or as close as possible to what you would write if you were writing your code
		by hand." So, as far as the browser's concerned, you're not even using a framework. It performs lightning
		quick.
	</p>
	<p class="lessBottomMargin">
		Svelte's component syntax is pretty similar to Vue, but it's even simpler:
	</p>
	<CodeSnip code={svelteA} />
	<p>
		With all that said - the Vue team has started adopting Svelte's ideas in recent years. Compared
		to the original version, the most recent version of Vue does more at compile time in an effort
		to provide smaller files and faster performance. There's less of a difference between the two
		frameworks than there was five years ago. But the developer experience Svelte provides is still
		second to none.
	</p>
	<HornsDivider />
	<p>
		Depending on what you're looking to do, both Vue and Svelte are great options. I should mention
		I built out basic todo list applications as a way to get a better feel for these two
		technologies. If you want to check out the Vue one, the repo's <a
			href="https://github.com/colebillys19/vue-todo"
			target="_blank">here</a
		>, and app is deployed <a href="https://vuetodo919.herokuapp.com/" target="_blank">here</a>. For
		the Svelte one, the repo's
		<a href="https://github.com/colebillys19/svelte-todo" target="_blank">here</a>, and app is
		deployed <a href="https://sveltetodo919.herokuapp.com/" target="_blank">here</a>.
	</p>
	<p>To wrap up, here's a syntax comparison for a few common scenarios:</p>
	<h2 style="margin-bottom: 48px;">Conditionals</h2>
	<CodeSnip caption="Vue" code={conditionalVue} />
	<CodeSnip caption="Svelte" code={conditionalSvelte} />
	<h2 style="margin-bottom: 48px;">Looping</h2>
	<CodeSnip caption="Vue" code={loopingVue} />
	<CodeSnip caption="Svelte" code={loopingSvelte} />
	<h2 style="margin-bottom: 48px;">Reactive Values</h2>
	<CodeSnip caption="Vue" code={reactiveVue} />
	<CodeSnip caption="Svelte" code={reactiveSvelte} />
	<h2 style="margin-bottom: 48px;">Binding an Input Value</h2>
	<CodeSnip caption="Vue" code={inputBindingVue} />
	<CodeSnip caption="Svelte" code={inputBindingSvelte} />
	<h2 style="margin-bottom: 48px;">Computed Values</h2>
	<CodeSnip caption="Vue" code={computedVue} />
	<CodeSnip caption="Svelte" code={computedSvelte} />
	<h2 style="margin-bottom: 48px;">Props</h2>
	<CodeSnip caption="Vue" code={propsVue} />
	<CodeSnip caption="Svelte" code={propsSvelte} />
	<h2 style="margin-bottom: 48px;">Named Slots</h2>
	<CodeSnip caption="Vue" code={namedSlotsVue} />
	<CodeSnip caption="Svelte" code={namedSlotsSvelte} noMargin={true} />
</div>
<PostFooter />

<style src="../../../styles/blog-post-styles.scss"></style>
