<script lang="ts">
	import HornsDivider from '$lib/blogPost/horns-divider.svelte';
	import PostFooter from '$lib/blogPost/post-footer.svelte';

	import store from '../../../store';

	const { isDarkMode } = store;
</script>

<div class:isDarkMode={$isDarkMode} class="blogPostContainer">
	<h1>What is UX?</h1>
	<p class="date">June 21st, 2022</p>
	<img
		class="mainImg"
		src="https://res.cloudinary.com/dxklaorw6/image/upload/v1655908696/billycole.dev/designers.jpg"
		alt="designers"
	/>
	<p>
		Sometimes you'll hear a person describe an application's look and feel as it's "user experience"
		or "UX" for short. Although it makes sense to use the term this way, they're really not be
		giving credit where credit's due. UX is a whole subset of the tech industry - and it's big
		business.
	</p>
	<p>
		So what does a UX designer do? While their main priority is making sure an application is
		enjoyable to use, they're also trying to steer the user in a certain direction. This is a big
		motivating factor when deciding on things like what content appears on which page, what
		navigation elements lead where, and how the user is rewarded for their actions. For example -
		have you ever noticed how when you're on an e-commerce checkout page it seems a lot easier to
		complete your order than it does to return to a previous page? This wasn't an accident.
	</p>
	<p>
		Let's switch up the language a bit here. I'm going to use the word "product" instead of
		"application". UX doesn't only exist in the context of application development. Whether you're
		designing a car, a suitcase, or a television - these concepts apply to all sorts of design.
	</p>
	<p>
		UX design is often the first step in creation of a new product. They're tasked with determining
		what, when, where, why, and how someone is going to use it. Then they'll use that data to make a
		blueprint that can be referenced going forward. With that said, this blueprint doesn't just have
		the user in mind. We can't forget the company who's producing said product. The company has
		goals and, more importantly, shareholders. UX designers are paid top dollar to help make a
		product as profitable as possible. They aim for the sweet spot where user needs and business
		needs overlap.
	</p>
	<p>
		So how does a UX designer approach things? Well the short answer is research ...but I'll
		elaborate.
	</p>
	<p>
		They start by asking: who's using the application and why are they using it? Then they ask:
		what's the company behind the application trying to achieve? They want to be familiar with both
		the user and the brand. Next they research. A lot. When someone hears the term "user experience
		design" it might sound like more of a creative thing... but any UX person will tell you it
		involves a lot of busy work.
	</p>
	<p>
		Perhaps the biggest mistake a UX designer can make is assuming anything. The choices they make
		will serve as the foundation for the whole project. The graphic designers, copy writers, and
		software engineers are going to be taking direction from UX. It's important to base decisions on
		cold hard facts. It's also important to be able to explain why certain decisions were made to
		management and shareholders.
	</p>
	<div class="divider" />
	<p>Let's take a look at a few parts of the UX process:</p>
	<h2>Surveying</h2>
	<p class="lessBottomMargin">
		Designers will often survey/interview large groups of people. The more data they have to work
		with the better. They might show test users either a mockup or a sample of an already existing
		product and ask questions like:
	</p>
	<ul class="lessBottomMargin">
		<li>"What are you thinking as you look at this?"</li>
		<li>"What do you think this feature does?"</li>
		<li>"Do you trust this product?"</li>
	</ul>
	<p class="lessBottomMargin">Or maybe:</p>
	<ul class="lessBottomMargin">
		<li>"How would you go about performing this task?"</li>
		<li>"What would you expect to happen if you did X?"</li>
		<li>"Is this interface easy to understand?"</li>
	</ul>
	<p>
		The answers they get will give them a foundation for the decision making process. The key here
		is variance. They want to talk to a wide variety of people. This way they have a sense for a
		bunch of different scenarios and can catch things they might not have accounted for.
	</p>
	<h2>User Personas</h2>
	<p>
		An interesting tool UX designers will use is something called a "user persona". This is where if
		they notice certain trends in how people intend to use the product, they will assign them a
		persona. So maybe "Jerry" accomplishes something by doing X, but "Susan" accomplishes that same
		thing by doing Y. The actions of Jerry and Susan represent the actions of a large amount of
		people who chose to do things the same way. Designers will typically run a persona through a
		variety of scenarios. This helps them to simplify things given they're working with a ton of
		data.
	</p>
	<h2>Wireframes</h2>
	<p>
		A UX designer will take the data they gather and create things like site maps, user flows, and
		mockups. But "wireframes" are perhaps the most important. A wireframe is the
		guide/layout/structure of the product being built. It's void of visual elements - it's all about
		structure, content, and flow. Is content X leading the user where we want them to go? Is the
		visual design going to hinder or help the stucture? Up until this point in the process there
		were a lot of ideas but nothing tangible to tie them together. Establishing a wireframe for a
		project is crucial as it can act as a sort of documented "master plan" that they can show
		everyone from shareholders to software engineers. A good wireframe is usually simple, well
		organized, and contains short/deliberate desscriptions. With all that said, a project's
		wireframe is a constant work in progress. Designers are always striving to improve them and
		there will often by multiple iterations.
	</p>
	<div class="divider" />
	<p>
		At this point in the process the rubber meets the road. In the context of an application, UX
		designers will work with graphic designers to dial in visual/copy elements and software
		engineers will start building. Eventually you get your finished product. But the job is not
		done!
	</p>
	<p>
		After a product is launched the UX will jump back in the research saddle. This is when they can
		do more surveying/interviewing and get a sense for how users are actually interacting with the
		product. They also conduct user testing sessions where they can observe the product being used
		in real time.
	</p>
	<p>
		So in a way the whole process starts over. They can begin designing a new and improved version.
		Rinse and repeat.
	</p>
	<HornsDivider />
	<p>
		When you think about it, a product's user can really be anyone. UX is challenging in that the
		designer is trying to correctly guess who it's going to be and optimize things from there. They
		use tools like surveys, user personas, and wireframes to help make this a bit easier. If reading
		this has been your introduction to UX, keep it in mind next time you're browsing the web. When
		you're wondering why it's so hard to find the "cancel my subscription" button you can thank your
		friendly neighborhood UX designer!
	</p>
</div>
<PostFooter />

<style src="../../../styles/blog-post-styles.scss"></style>
