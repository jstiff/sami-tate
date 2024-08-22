<script lang="ts">
  import Cup from "$lib/Cup.svelte"
  import Keyboard from "$lib/Keyboard.svelte"
  import {
    WebsiteName,
    WebsiteBaseUrl,
    WebsiteDescription,
  } from "./../../config"

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WebsiteName,
    url: WebsiteBaseUrl,
  }
  const jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(ldJson) + "<"
  }/script>`

  const features = [
    {
      name: "Free for a week",
      description:
        "Try it for a week, have all the kids play around with it to see if it's something you think will be valuable",
      link: "www.google.com",
      linkText: "Docs",
      newPage: true,
      svgContent: `<svg
  id="eWJSuAMtq081"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 800 600"
  shape-rendering="geometricPrecision"
  text-rendering="geometricPrecision"
  ><ellipse
    rx="99.516028"
    ry="16.634243"
    transform="matrix(.9 0 0 1 400.024144 444.200478)"
    fill="#eca64a"
    stroke-width="0"
  /><g transform="matrix(-1 0 0 1 802.33194-.557571)"
    ><path
      d="M471.048009,329.413003C501.82273,351.031152,506.409133,341.552492,499.6751,400"
      transform="translate(-.039823 0.000001)"
      fill="none"
      stroke="#000"
      stroke-width="4"
      stroke-linecap="round"
    /><path
      d="M485,389.338579q16.823823-10.402038,16.823823-10.402038"
      transform="translate(.000001 0)"
      fill="#3f5787"
      stroke="#000"
      stroke-width="4"
      stroke-linecap="round"
    /></g
  ><path
    d="M360.500001,369.591583q0,80.538066,0,79.685811l-20.695259.426128"
    transform="translate(18.195259-9.647552)"
    fill="none"
    stroke="#000"
    stroke-width="5"
    stroke-linecap="round"
  /><path
    d="M360.500001,369.591583q0,80.538066,0,79.685811l-20.695259.426128"
    transform="matrix(-1 0 0 1 781.255551-9.647552)"
    fill="none"
    stroke="#000"
    stroke-width="5"
    stroke-linecap="round"
  /><ellipse
    rx="40"
    ry="40"
    transform="translate(529.588569 277.500062)"
    fill="none"
    stroke="#fff"
    stroke-width="26"
  /><path
    d="M400,400c-52.49484,0-95.54229-40.44912-99.6751-91.88013C300.11199,307.11346,300,306.06981,300,305v-90c0-8.28427,6.71573-15,15-15h170c8.28427,0,15,6.71573,15,15v90c0,1.06981-.11199,2.11346-.3249,3.11987C495.54229,359.55088,452.49484,400,400,400Z"
    fill="#fff"
    stroke-width="0"
  /><g transform="translate(.000001 0.000001)"
    ><ellipse
      rx="2.5"
      ry="5"
      transform="translate(360.5 265)"
      stroke-width="0"
    /><ellipse
      rx="2.5"
      ry="5"
      transform="translate(380.5 265)"
      stroke-width="0"
    /><path
      d="M360,280c3,10,16.933573,10,20,0"
      transform="translate(.5-2.499939)"
      fill="none"
      stroke="#3f5787"
      stroke-width="4"
      stroke-linecap="round"
    /><ellipse
      rx="5"
      ry="5"
      transform="translate(344.804742 270.509061)"
      fill="#eaafe1"
      stroke-width="0"
    /><ellipse
      rx="5"
      ry="5"
      transform="translate(395 270)"
      fill="#eaafe1"
      stroke-width="0"
    /></g
  ><g transform="matrix(.904967 0 0 0.824906 45.406172 70.095817)"
    ><path
      d="M471.048009,329.413003C501.82273,351.031152,506.409133,341.552492,499.6751,400"
      transform="translate(-.039823-.746495)"
      fill="none"
      stroke="#000"
      stroke-width="4"
      stroke-linecap="round"
    /><path
      d="M485,389.338579q16.823823-10.402038,16.823823-10.402038"
      transform="translate(.000001 0)"
      fill="#3f5787"
      stroke="#000"
      stroke-width="4"
      stroke-linecap="round"
    /></g
  ></svg
>
`,
    },
    {
      name: "User Auth",
      link: "/login",
      description:
        "Sign up, sign out, forgot password, email verification, and oAuth. Powered by Supabase Auth.",
      svgContent: `<path
                  d="M14.2084 13.5521C16.3025 13.5521 18 11.8615 18 9.77606C18 7.6906 16.3025 6 14.2084 6C12.1144 6 10.4169 7.6906 10.4169 9.77606C10.4169 10.742 10.8578 11.4446 10.8578 11.4446L6.27264 16.011C6.0669 16.2159 5.77886 16.7486 6.27264 17.2404L6.8017 17.7673C7.00743 17.9429 7.52471 18.1888 7.94796 17.7673L8.56519 17.1526C9.18242 17.7673 9.88782 17.416 10.1523 17.0647C10.5932 16.45 10.0642 15.8353 10.0642 15.8353L10.2405 15.6597C11.087 16.5027 11.8277 16.011 12.0922 15.6597C12.5331 15.045 12.0922 14.4303 12.0922 14.4303C11.9159 14.079 11.5632 14.079 12.004 13.64L12.5331 13.113C12.9564 13.4643 13.8264 13.5521 14.2084 13.5521Z"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />`,
    },
    {
      name: "Pricing Page",
      link: "/pricing",
      description:
        "Customizable and fast pricing page, integrated into the billing portal.",
      svgContent: `<path d="M12 6V18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,
    },
  ]
</script>

<svelte:head>
  <title>{WebsiteName}</title>
  <meta name="description" content={WebsiteDescription} />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<div class="hero min-h-[60vh]">
  <div class="hero-content text-center py-12">
    <div class="max-w-xl">
      <div
        class="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4 md:mb-8"
      >
        Sami-tate
      </div>

      <div
        class="text-4xl md:text-6xl font-bold px-2"
        style="line-height: 1.2;"
      >
        An
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >exciting way</span
        >,
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >to learn typing!</span
        >
        For
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >kids of all ages</span
        >
      </div>

      <div class="mt-6 md:mt-2">
        <div class="bg-slate-200 rounded-2xl"><Cup /></div>
      </div>
    </div>
  </div>
</div>
<div class="px-4">
  <Keyboard />
</div>

<div class="min-h-[60vh]">
  <div class="pt-20 pb-8 px-7">
    <div class="max-w-lg mx-auto text-center">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
      >
        Explore the Features
      </div>
      <div class="mt-6 text-xl font-bold">
        And try them on this
        <span
          class="underline decoration-secondary decoration-[3px] md:decoration-[4px]"
        >
          fully functional demo
        </span>
      </div>
    </div>

    <div
      class="flex gap-6 mt-12 max-w-[1064px] mx-auto place-content-center flex-wrap"
    >
      {#each features as feature}
        <div class="card bg-white w-[270px] min-h-[300px] flex-none shadow-xl">
          <div class="card-body items-center text-center p-[24px] pt-[32px]">
            <div>
              <svg
                width="50px"
                height="50px"
                class="mb-2 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                {@html feature.svgContent}
              </svg>
            </div>
            <h2 class="card-title">
              {feature.name}
            </h2>
            <p class="text-sm">
              {feature.description}
            </p>
            {#if feature.link}
              <a
                href={feature.link}
                class="pb-4"
                target={feature.newPage ? "_blank" : ""}
              >
                <button
                  class="btn btn-xs btn-outline rounded-full btn-primary min-w-[100px]"
                  >{feature.linkText ? feature.linkText : "Try It"}</button
                >
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
<div class="hero min-h-[60vh] mt-12">
  <div class="hero-content text-center pb-16 pt-4 px-4">
    <div class="max-w-lg">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mt-4"
      >
        See it in Action
      </div>
      <div
        class="flex flex-col lg:flex-row mt-8 gap-6 place-content-center content-center"
      >
        <div class="hidden md:block">
          <a href="https://criticalmoments.io" target="_blank" class="link">
            <div class="mockup-browser border">
              <div class="mockup-browser-toolbar">
                <div class="input" style="background:#eee;">
                  https://criticalmoments.io
                </div>
              </div>
              <div class="flex justify-center">
                <img
                  alt="Screenshot of criticalmoments.io homepage"
                  class="aspect-[2044/1242]"
                  src="/images/example-home.png"
                />
              </div>
            </div>
          </a>
        </div>
        <div class="md:hidden">
          <a href="https://criticalmoments.io" target="_blank" class="link">
            <div class="card shadow-xl border overflow-hidden">
              <img
                alt="Screenshot of criticalmoments.io homepage"
                class="aspect-[2044/1242]"
                src="/images/example-home.png"
              />
            </div></a
          >
        </div>
        <div class="min-w-[270px] lg:min-w-[420px] flex mt-6 lg:mt-0">
          <div class="my-auto">
            <div class="px-4 text-lg md:text-xl">
              <a href="https://criticalmoments.io" class="" target="_blank"
                >SaaS Starter was created by <span
                  class="font-bold whitespace-nowrap">Critical Moments</span
                >: a SDK to to help mobile apps
                <span class="underline decoration-secondary decoration-[3px]"
                  >increase conversion rates and app-ratings.</span
                ></a
              >
            </div>
            <div class="px-4 mt-6 text-lg md:text-xl">
              Our <a
                href="https://criticalmoments.io"
                class="link font-bold"
                target="_blank">webpage</a
              > is the best example of SaaS Starter with style and real content.
            </div>
            <div class="mt-4 text-large">
              <a href="https://criticalmoments.io" target="_blank">
                <button class="btn btn-primary btn-wide mt-3"
                  >See it in Action</button
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
