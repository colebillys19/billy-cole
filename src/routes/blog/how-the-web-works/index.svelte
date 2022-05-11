<script lang="ts">
	import HornsDivider from '$lib/blog-horns-divider.svelte';
	import PostFooter from '$lib/blog-post-footer.svelte';

	import store from '../../../store';

	const { isDarkMode } = store;
</script>

<div class:isDarkMode={$isDarkMode} class="blogPostContainer">
	<h1>How the Web Works</h1>
	<p>
		Let's say your phone charger just stopped working and you want to order a new one. You open our
		internet browser, type “amazon.com” into the address bar and hit enter. The Amazon home page
		appears and you start shopping away. But what happened there when you hit enter? A whole lot
		happened there.
	</p>
	<p>
		Some insane amount of web pages are visited every day. But what's going on behind the scenes?
		What allows you to "visit a web page"? Let's start with what you typed in: “amazon.com”. This is
		called a URL address. URL is short for uniform resource locator. Basically it's a way to locate
		some resource on the internet. Resources can be web pages, image files, user profile data, etc.
	</p>
	<p>
		There are two main concepts to keep in mind here. There's our internet browser <span
			class="parens">(chrome, safari, edge, etc.)</span
		> and there's the server. Our internet browser is known as the “client” in web jargon speak. Typically
		the “server” refers to a computer located somewhere in the world that's tied to a database with a
		bunch of resources. This is what we call the "client-server model". The client requests a resource/service
		and the server provides it.
	</p>
	<p>
		So when you hit enter you told one of Amazon's <span class="parens">(many, many, many)</span> servers
		to send you back the Amazon home page - and a moment later it got delivered to you. This isn't unlike
		ordering food at a restaurant - you tell the waiter what you'd like to order and they deliver it
		to you.
	</p>
	<p class="lessBottomMargin">
		After a web page loads up, if you double click the address bar you can view the full address
		text:
	</p>
	<p class="lessBottomMargin"><span class="monospace">https://www.amazon.com/</span></p>
	<p>
		No doubt this looks familiar. The message <span class="parens">(request)</span> we send to the
		server is formatted based on a protocol called HTTP - this stands for “Hypertext Transfer
		Protocol”. The “s” added to the end essentially just means it has an extra layer of security -
		this is important for websites dealing with any sort of sensitive information
		<span class="parens">(e.g. Amazon uses your payment information)</span>. In a nutshell, HTTP is
		the language that clients and servers use to talk to each other - but let's ignore this for now.
	</p>
	<p class="lessBottomMargin">Here's a simple example of an HTTP request:</p>
	<p class="lessBottomMargin">
		<span class="monospace">GET /index.html HTTP/1.1</span><br />
		<span class="monospace">Host: www.amazon.com</span><br />
		<span class="monospace">Accept-Language: en-us</span><br />
	</p>
	<ul>
		<li>
			on the first line it says that it wants to get a page or a file called “index.html” using HTTP
			version 1.1 <span class="parens"
				>(in most cases, “index.html” is the main file for a website)</span
			>
		</li>
		<li>the second line tells us the host</li>
		<li>the third line tells us the language our browser is using</li>
	</ul>
	<p>This is just a little sample, you don't need to worry about memorizing it.</p>
	<p>
		Every data exchange using the HTTP protocol involves two messages - a request and a response. We
		just took a look at the request, now let's take a look at the response.
	</p>
	<p>
		After the server receives a request, it takes a look at it and figures out what it needs to send
		back. If we revisit our restaurant example, this is like the chef taking a look at your order -
		they need to figure out what to cook. They prepare the order and give it to the waiter. Our HTTP
		response is like the waiter delivering you your meal.
	</p>
	<p class="lessBottomMargin">Here's a simple example of an HTTP response:</p>
	<p class="lessBottomMargin">
		<span class="monospace">HTTP/1.1 200 OK</span><br />
		<span class="monospace">Date: 1 Jan 2022 09:00</span><br />
		<span class="monospace">Content-Type: text/html</span><br /><br />
		<span class="monospace">{'<!DOCTYPE html>'}</span><br />
		<span class="monospace">{'<html>'}</span><br />
		<span class="monospace">&nbsp;&nbsp;...</span><br />
		<span class="monospace">{'</html>'}</span><br />
	</p>
	<ul>
		<li>
			on the first line you can see the version of http protocol used, followed by the “status code”
			<span class="parens">(a 200 status code means the response was successful)</span>
		</li>
		<li>the second line tells you when the response happened</li>
		<li>the third line tells you the type of content that's being delivered</li>
		<li>lastly, you can see the content itself <span class="parens">(some HTML code)</span></li>
	</ul>
	<p>
		Once our browser receives the response it now has the main building blocks it needs to show us
		the Amazon home page. As the browser reads the HTML document, it constructs what we call a “DOM”
		<span class="parens">(document object model)</span>. The DOM represents the elements that make
		up an HTML document. HTML elements are the foundation of every single page on the web.
	</p>
	<p>
		As the browser goes through the document, it typically sees references to other resources the
		page needs. For example: images, fonts, scripts, etc. In order to successfully build the page,
		each resource will need to be requested from the server in a similar manner. So when all is said
		in done a standard web page will make quite a few requests to one or more servers. Luckily,
		these requests happen in parallel so web pages to load quickly. Once the browser has everything
		it needs we're presented with the content on our screen.
	</p>
	<p>
		Another important thing to understand is how requests know how to reach the server they're
		looking for, and how responses know how to reach the client they're looking for. In order to
		understand this we need to understand two things: what an IP address is, and how clients and
		servers are connected.
	</p>
	<p class="lessBottomMargin">Going back to our URL:</p>
	<p class="lessBottomMargin"><span class="monospace">https://www.amazon.com/</span></p>
	<p class="lessBottomMargin">
		The “www.amazon.com” part <span class="parens">(or just amazon.com)</span> is the “domain name”.
		A domain name is actually a sort of translation that helps us memorize the address. Under the hood,
		a request or response is actually using an “IP address” to figure out where it needs to go. A typical
		IP address looks like this:
	</p>
	<p class="lessBottomMargin"><span class="monospace">17.172.224.47</span></p>
	<p class="lessBottomMargin">
		This is much more difficult to memorize than "amazon.com". So the address a request/response
		uses would look like:
	</p>
	<p><span class="monospace">https://17.172.224.47/</span></p>
	<p>
		When we enter a URL into our address bar and hit enter, the first thing our computer does is
		access “Domain Name System” <span class="parens">(or DNS for short)</span> in order to translate
		the domain name to an IP address. The numbers contained in an IP help a request or response navigate
		the complicated journey to their destination. Let's take a look at what that journey may look like.
	</p>
	<p>
		The physical internet exists as a huge, complex network of optical fiber cables. Essentially
		it's just a bunch of cables connected to each other. Anywhere two or more cables intersect
		there's a piece of equipment called a router. Routers direct requests/responses around the
		internet. Every request you fire off from your browser will hit upwards of a dozen or more
		routers. In addition to the client and server in question, each router has its own IP address.
		So if your browser hits 15 routers, a request will reach its destination with 15 IP addresses
		attached. This is like a trail of breadcrumbs the response will use to find its way back to your
		browser. So when the server fires off the response, it has the directions it needs to make it's
		journey.
	</p>
	<HornsDivider />
	<p>
		It's kind of overwhelming to think about - but this complicated process happens every time you
		visit a web page. It's even more overwhelming when you think about the number of people browsing
		the internet every second. No doubt we take the technology at our disposal for granted!
	</p>
</div>
<PostFooter />

<style src="../../../styles/blog-post-styles.scss"></style>
