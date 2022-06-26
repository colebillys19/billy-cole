<script lang="ts">
	import HornsDivider from '$lib/blogPost/horns-divider.svelte';
	import PostFooter from '$lib/blogPost/post-footer.svelte';

	import store from '../../../store';

	const { isDarkMode } = store;
</script>

<div class:isDarkMode={$isDarkMode} class="blogPostContainer">
	<h1>Design Psychology: 10 Examples</h1>
	<p class="date">June 26th, 2022</p>
	<img
		class="mainImg"
		src="https://res.cloudinary.com/dxklaorw6/image/upload/v1656257009/billycole.dev/brain.jpg"
		alt="brain"
	/>
	<p>
		Psychology plays a big role in design. To a certain extent a product should behave how a user
		"expects" it to. Designers try to figure out how the user thinks and design something with that
		in mind. When a developer is designing an interface they have some sense for when something
		looks "right". When something looks/behaves how they want it to they move on. But wait... why
		was that the case?
	</p>
	<p>
		There's an old poem called "The Centipede's Dilemma" about a centipede who struggled to explain
		how she walks. When she actually stopped to think about how she coordinated her dozens and
		dozens of legs it left her confused. Similarly, if you asked the average person why certain
		applications look and feel "right" they probably couldn't give you a detailed explanation. How
		does the brain comprehend design at the most fundamental level?
	</p>
	<p>
		I recently read the book <a
			aria-label="100 things every designer needs to know about people"
			href="https://www.amazon.com/Things-Designer-People-Voices-Matter/dp/0321767535"
			target="_blank">100 Things Every Designer Needs to Know About People</a
		> by psychologist Dr. Susan Weinschenk - it reveals some pretty interesting stuff about how people
		think. The book shines light on how the brain processes design and reacts to certain cues. I feel
		like it helped me get a better sense for why I was making some of my design decisions. I wanted to
		touch on ten ideas I found interesting.
	</p>
	<div class="divider" />
	<h2>People Identify Objects by Recognizing Patterns</h2>
	<p>
		The brain uses grouping and white space to create patterns. People look for them subconsciously.
		You can use this idea to make an interface more intuitive.
	</p>
	<p>
		The following image shows the Japanese e-commerce site Rakuten. Even if you don't speak the
		language you should be able to recognize the structure here. Notice the use of white space and
		patterns - there are barely any borders or contrasting backgrounds but the sections are
		distinguishable.
	</p>
	<img
		class="exampleImg"
		src="https://res.cloudinary.com/dxklaorw6/image/upload/v1656257009/billycole.dev/design-ideas-03.jpg"
		alt="rakuten"
	/>
	<div class="divider" />
	<h2>People Scan Screens Based on Past Experience and Expectation</h2>
	<p>
		Consider how the user's vision will navigate a page. It's usually safe to structure things so
		vision follows a normal reading pattern. If you'd never used the internet before and someone
		showed you a Wikipedia page you'd probably have a sense for how to navigate it. It reads like a
		book would. We've been conditioned to consume text a certain way. Wikipedia leverages this to
		communicate an impressive amount of information. The same idea applies to a blog post like this
		one.
	</p>
	<p>
		Side note: when designing a web page, try to avoid structure where vision has to jump back and
		forth to accomplish a task - don't put important content along the outer edges.
	</p>
	<div class="divider" />
	<h2>Reading and Comprehending are Two Different Things</h2>
	<p>
		Don't assume people will remember specific information an application provides. What they
		understand and remember usually depends on things like point of view, prior instruction, and
		previous experience.
	</p>
	<p>
		I remember the first time I read a book. Well the first one that wasn't children's picture book.
		It was maybe fifty pages of large text. Anyway, I was very excited to tell my parents. When I
		went downstairs and told my Mom she asked me to explain what the book was about. It was at that
		moment I realized something important. When you read something you actually have to comprehend,
		internalize, and ideally learn something from what you read. Less than a minute after putting it
		down I had completely forgotten what it was about.
	</p>
	<p>
		As a designer you want to leverage your skills to help the user internalize important
		information as easily as possible. If we're just talking about text - you can use things like
		bold and/or italic fonts, highlighting, supplemental images, etc. News websites do a good job of
		this. Notice the use of images and bold text in the following BBC article:
	</p>
	<img
		class="exampleImg"
		src="https://res.cloudinary.com/dxklaorw6/image/upload/v1656257010/billycole.dev/design-ideas-14.png"
		alt="bbc"
	/>
	<div class="divider" />
	<h2>People Remember Only Four Items at Once</h2>
	<p>
		Think in fours. Four sections, four sentences, four list items, etc. This isn't always possible
		but it's useful to keep in mind.
	</p>
	<p>
		The following image shows the Amazon landing page. Notice how there are four white boxes, two of
		which show four image links. The design team at Amazon is utilizing the number four here. If the
		user closes the page straight away without clicking anything they're more likely to remember
		what they saw.
	</p>
	<img
		class="exampleImg"
		src="https://res.cloudinary.com/dxklaorw6/image/upload/v1656257009/billycole.dev/design-ideas-20.jpg"
		alt="amazon"
	/>
	<div class="divider" />
	<h2>People Have to Use Information to Make it Stick</h2>
	<p>
		Practice makes perfect. If you want the user to remember something, repeat it where you can.
		Additionally, if you have a sense for who your users are try to repeat things in a way that
		caters to how they think.
	</p>
	<div class="divider" />
	<h2>People Process Information Better in Bite-Sized Chunks</h2>
	<p>
		Try to identify the most relevant information you want to convey and structure things around
		that. You'll want to avoid lumping in extra information if possible. In the context of web
		development, you might want to put extra information on a separate page and provide a link -
		rather than having everything in one place. Dr. Weinschenk points out how extra clicking is
		better than extra thinking.
	</p>
	<p>
		Tabs are another way to break down a large amount of information into smaller pieces. You'll see
		tabs often on the web. Here are some used by NewEgg <span class="parens"
			>(a computer parts retailer)</span
		> on their product pages:
	</p>
	<img
		class="exampleImg"
		src="https://res.cloudinary.com/dxklaorw6/image/upload/v1656257010/billycole.dev/design-ideas-27.jpg"
		alt="newegg"
	/>
	<div class="divider" />
	<h2>People Learn Best From Examples</h2>
	<p>
		If you want the user to do something <span class="parens"
			>(e.g. make a purchase on an e-commerce site)</span
		> you might want to consider showing them how to do it. The simplest way to do this is to include
		images like I'm doing here. &#x1F601;
	</p>
	<p>
		A particularly good example of this is <a
			aria-label="flexbox froggy"
			href="https://flexboxfroggy.com/"
			target="_blank">Flexbox Froggy</a
		>, a game meant to help web developers learn the CSS tool flexbox. Learning something tricky is
		a lot easier when you have interactive examples. Even better if you can make things fun!
	</p>
	<img
		class="exampleImg"
		src="https://res.cloudinary.com/dxklaorw6/image/upload/v1656257010/billycole.dev/design-ideas-34.jpg"
		alt="flexbox-froggy"
	/>
	<div class="divider" />
	<h2>People are More Motivated as They Get Closer to a Goal</h2>
	<p>
		If you want the user to do something, consider showing them a visual representation of progress.
		So let's say you want the user to sign up for a service... as the user goes through steps, show
		them the steps and indicate which one they're on. Check out the following image from the New
		York Times signup page. Notice how the three main parts of the signup flow are shown at the top
		along with a progress bar. This is a subtle way of influencing the user.
	</p>
	<img
		class="exampleImg"
		src="https://res.cloudinary.com/dxklaorw6/image/upload/v1656257010/billycole.dev/design-ideas-50.jpg"
		alt="new-york-times"
	/>
	<div class="divider" />
	<h2>Anecdotes Persuade More Than Data</h2>
	<p>
		You can help the user internalize something by giving it some sort of emotional hook. Everyone
		is empathetic to a certain extent, we have an easier time internalizing stories than we do
		statistics. Try to communicate information with a story when you can - if not a story maybe a
		quote or an analogy.
	</p>
	<p>
		Perhaps the best example of this is the user testimonial. Gaining the user's trust is
		invaluable. Providing examples of prior satisfied users helps a ton. Here's a good example of a
		testimonial section on law firm's website:
	</p>
	<img
		class="exampleImg"
		src="https://res.cloudinary.com/dxklaorw6/image/upload/v1656257010/billycole.dev/design-ideas-74.jpg"
		alt="law-firm"
	/>
	<div class="divider" />
	<h2>People Make Most Decisions Unconsciously</h2>
	<p>
		More often then not the reason someone will give you for doing something will differ from their
		unconscious motivation. Some common motivating factors might include the decisions others made,
		what they identify with, what choice solves some other problem, whether the choice is
		impermanent, etc. If you have enough data to determine how your average user thinks at a
		fundamental level, speak to their most basic motivations.
	</p>
	<div class="divider" />
	<h2>When People Are Uncertain, They Let Others Decide What To Do</h2>
	<p>
		If you give the user the ability to choose what to do, make the option you want them to choose
		the most appealing. An e-commerce site will often display the most favorable reviews of a
		product first. This way if a customer is on the fence about buying there's a better chance
		they'll do so.
	</p>
	<p>
		Here's the first few reviews for a guitar on the musical instrument retailer Sweetwater's site:
	</p>
	<img
		class="exampleImg"
		src="https://res.cloudinary.com/dxklaorw6/image/upload/v1656257010/billycole.dev/design-ideas-98.jpg"
		alt="sweetwater"
	/>
	<div class="divider" />
	<p class="lessBottomMargin">
		The book is chock full of cool ideas. While they all relate to design, some of them had me
		thinking about human nature and life in general. &#x1F914; For example:
	</p>
	<ul>
		<li>The meanings of colors vary by culture.</li>
		<li>People reconstruct memories each time they remember them.</li>
		<li>The most vivid memories are wrong.</li>
		<li>People are driven to create categories.</li>
		<li>Culture affects how people think.</li>
		<li>People are inherently lazy.</li>
		<li>The "strong tie" group size limit is 150 people.</li>
		<li>People are hard-wired for imitation and empathy.</li>
		<li>People are happier when they're busy.</li>
		<li>The more difficult something is to achieve, the more people like it.</li>
	</ul>
	<HornsDivider />
	<p>
		In the context of UI/UX - good designers are considered good not because they stop and think of
		these kinds of ideas when they're building something, but because they've spent countless hours
		creating things and critiquing the work of others. The brain has a wonderful way of taking
		information/experience and turning it into skill. With that said, it's useful to consider these
		ideas from time to time - especially when you're asked to leverage design to motivate a user to
		do something.
	</p>
</div>
<PostFooter />

<style src="../../../styles/blog-post-styles.scss"></style>
