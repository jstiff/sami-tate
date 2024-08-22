# Try to document this whole process.

- The first major hangup was hooking up the Resend DNS records over to Cloudflare. This link really helped [Paste DNS records properly into Cloudflare](https://resend.com/docs/dashboard/domains/cloudflare).
- Since successfully connection Resend DNS records into Cloudflare, I'm recieving this error message, which shuts down the Sveltekit server randomly. Making working on updating the Frontend impossible. 
  ```
  Error: Cannot use `cookies.set(...)` after the response has been generated
    at event.cookies.set

	
  ```

- This link may be promising...[Github bug report](https://github.com/supabase/auth-helpers/issues/466)
- See if this boilerplate uses 'streaming Promises'.
- Might need to convert Supabase 'auth-helper' module to '@supabase/ssr' [Supabase with Sveltekit](https://supabase.com/docs/guides/auth/auth-helpers/sveltekit#set-up-the-supabase-client). 