<script lang="ts">
	import HornsDivider from '$lib/blog-horns-divider.svelte';
	import PostFooter from '$lib/blog-post-footer.svelte';

	import store from '../../../store';

	const { isDarkMode } = store;
</script>

<div class:isDarkMode={$isDarkMode} class="blogPostContainer">
	<h1>Intro to WordPress</h1>
	<p>
		Content management systems <span class="parens">(or CMS for short)</span> are used to manage the
		creation and modification of digital content. There are quite a few web page CMS options out
		there, but one stands out from the rest as the most widely used. Enter WordPress. WordPress is a
		free, open-source content management system. It's written in PHP and paired with a MySQL
		<span class="parens">(or MariaDB)</span>
		database. WordPress is very popular among those with little to no coding experience who want to create
		and manage a website for cheap. It's also popular among freelance web developers with small business
		clients. Although it's not at the forefront of web developement tech like it was in it's hay day,
		it still holds its own. WordPress was originally intended to be a tool for bloggers
		<span class="parens">(hence the name)</span>, but over the years folks have started using it for
		much, much more. Pretty much anyone can use it - it's unique in that you can set up a pretty
		formidable site with no code at all ...orrr you can go under the hood and customize whatever you
		want.
	</p>
	<p>
		Recently I decided to check it out for myself. In a nutshell - when you're setting up a
		WordPress site, first you pick the "theme" you'd like to use. This determines the overall feel
		of your site. A theme will take care of things like layout, styling, fonts, etc. Then you can
		add to your site with "plugins". Plugins are pretty much just functionality developers have
		created and made available for others to use. There are plenty of free plugins, but some are
		paid.
	</p>
	<p>
		From a web development perspective I got the sense that once you get a feel for PHP language
		basics, the WordPress "loop", and how to create your own themes and plugins - it's a very
		powerful tool. But this wasn't immedeately obvious. I was confused at first. Where should you
		start? How do I host my site? I wanted to make a blog post that'll help folks get their first
		project up and running. I feel a good starting point is to spin up a site and bring in a super
		minimal theme to experiment with. That's what I'll outline here.
	</p>
	<div class="divider" />
	<p>
		First, you'll need to figure out how to host your site. There are several free ways to stand up
		an environment in which you can run a WordPress site
		<span class="parens">(Docker, XAMPP, etc.)</span> - but I found the best way is with
		<a aria-label="wp engine wordpress platform" href="https://wpengine.com/" target="_blank"
			>WP Engine's</a
		> "Local". Keep in mind I'm on a Mac so I can't speak for those Windows and Linux land.
	</p>
	<p>
		Local is great because it streamlines the whole process of downloading an up-to-date version of
		WordPress, setting up project file architecture, and hosting your site. Using other methods, you
		typically have to do all of this separately. Plus the UI on the Local native app is &#x1F525;.
	</p>
	<p>Run through the following steps:</p>
	<ol>
		<li>
			go to <a aria-label="local wordpress development" href="https://localwp.com/" target="_blank"
				>https://localwp.com/</a
			>
		</li>
		<li>download it for free</li>
		<li>
			you'll be prompted for name/email/phone - but this information doesn't have to be real
			&#x1F601;
		</li>
		<li>install it and open it up</li>
		<li>create a new site</li>
		<li>pick a site name</li>
		<li>choose "Preferred"</li>
		<li>
			choose a WordPress username and password <span class="parens"
				>(email isn't important here and can be changed later)</span
			>
		</li>
		<li>once the site is running, click the WordPress admin button</li>
		<li>login with the credentials you chose</li>
	</ol>
	<p>
		At this point you'll be looking at the WordPress dashboard, the interface that allows you to
		build and customize your site. To access the site as it will appear to the user, click the
		button in the top left that shows the site name with a house icon. As is, your site should just
		contain a header with some links, a summary/link to a single blog post, and a footer with more
		links. Side note - when working with WordPress I like to view the site in a separate incognito
		window, that way it doesn't show the admin menu up top.
	</p>
	<p>
		Let's go back to the dashboard. You'll see a sidebar that includes things like "posts", "pages",
		"appearance", "plugins", and "settings". At this point I suggest getting your hands dirty
		tinkering with different things available to you here. When you make changes, refresh your site
		and see how things update.
	</p>
	<p>
		<a
			aria-label="free code camp wordpress tutorial"
			href="https://www.youtube.com/watch?v=O79pJ7qXwoE"
			target="_blank">This freeCodeCamp tutorial</a
		>
		gives a pretty solid rundown of how the dashboard works among other things.
		<span class="parens">(skip to 14:47)</span>
	</p>
	<p class="boxParagraph">
		<b>DISCLAIMER:</b> You may encounter a bug where doing certain things
		<span class="parens">(e.g. creating a new page)</span> will result in the following error being shown:
		"The response is not a valid JSON response." If that happens check out the blurb at the end of this
		post.
	</p>
	<p>
		Although the functionality the dashboard provides is perfect for someone with little to no
		coding experience, you may be wanting to get down to the HTML/CSS nitty gritty. Let's do that by
		bringing in our own theme and activating it. Here's a <a
			aria-label="wordpress boilerplate theme"
			href="https://github.com/colebillys19/wordpress-theme-boilerplate"
			target="_blank">simple theme</a
		> I created that you can use as a sort of jumping off point for future projects. Either download
		the zip file or clone the repo.
	</p>
	<p>
		Back in Local, right click the name of your site in the sites pane and click "reveal in finder".
		Next, navigate to <span class="monospace">app</span> > <span class="monospace">public</span> >
		<span class="monospace">wp-content</span> > <span class="monospace">themes</span>. Paste the
		boilerplate theme directory here. Finally, go to "Themes"
		<span class="parens">(in the appearance menu)</span> in the WordPress dashboard and activate it.
	</p>
	<p>
		Depending on what you tinkered with earlier, your site may or may not have much content at this
		point. I suggest doing the following in order to give it a similar structure to a blog site you
		might see online. First we'll add home and blog pages:
	</p>
	<ol>
		<li>go to "Pages"</li>
		<li>click "Add New"</li>
		<li>set the title as "Home" or something similar</li>
		<li>add anything you'd like in the body</li>
		<li>click "Publish"</li>
		<li>return to pages menu</li>
		<li>click "Add New"</li>
		<li>set the title as "Blog"</li>
		<li>don't add anything in body here</li>
		<li>click "Publish"</li>
	</ol>
	<p>Next, we'll give those two pages the proper roles:</p>
	<ol>
		<li>go to "Settings" > "Reading"</li>
		<li>for "Your homepage displays" select "A static page"</li>
		<li>set "Homepage" to your home page</li>
		<li>set the "Posts" page to your blog page</li>
		<li>click "Save Changes"</li>
	</ol>
	<p>Finally, we'll update the navigation menu order:</p>
	<ol>
		<li>go to "Appearance > Menus"</li>
		<li>under "Menu structure" set the menu name to "Nav Menu" or something similar</li>
		<li>click "Create Menu"</li>
		<li>under "Menu Settings" check the "Primary Menu" box</li>
		<li>click "Save Menu"</li>
	</ol>
	<p>Voila! You've got yourself a blog site to work with.</p>
	<p>
		Now open up the boilerplate theme directory
		<span class="parens">(that you added to your site directory earlier)</span> in your IDE of choice
		and experiment! Make changes to the files and see what's affected on your site.
	</p>
	<p>
		If you don't have any experience using PHP, this is a good time to give it a go. This minimal
		theme should serve as a nice playground. Here's a <a
			aria-label="youtube video: PHP Basics for WordPress"
			href="https://www.youtube.com/watch?v=mgGAvq9hmyU"
			target="_blank">good tutorial</a
		>
		to get you started. And once you're more comfortable, take a look at the other themes WordPress provides
		by default. There you'll see how a theme "should" be organized. And if you want to do a deep dive
		on how to create a theme from scratch, here's
		<a
			aria-label="youtube video: How to Create a Custom WordPress Theme"
			href="https://www.youtube.com/watch?v=-h7gOJbIpmo"
			target="_blank">another good tutorial</a
		>.
	</p>
	<p>Something something something.</p>
	<HornsDivider />
	<p>
		<b>More on that JSON error</b>: This is a bug related to the new WordPress editor that's used to
		create and edit content. Although these errors are displayed, you'll find they aren't actually
		preventing you from doing anything. For example, if it says you failed to publish a page,
		returning to the main pages menu will show that the page was indeed published. You can either
		ignore these errors, or if you want to get rid of them you can just install the "Classic Editor"
		plugin. You can do that by going to the plugins menu, clicking "Add New", searching for it
		<span class="parens">(though it may already be displayed under "Featured")</span>, installing
		it, and activating it. You may get the error one last time while installing, but like before you
		can disregard. The classic editor doesn't have all the functionality the new one does, but it
		works fine.
	</p>
</div>
<PostFooter />

<style src="../../../styles/blog-post-styles.scss"></style>
