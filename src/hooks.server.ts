// ORIGINAL version

// src/hooks.server.ts supabase @ssr version
// import {
//   PUBLIC_SUPABASE_URL,
//   PUBLIC_SUPABASE_ANON_KEY,
// } from "$env/static/public"
// import { createServerClient } from "@supabase/ssr"
// import type { Handle } from "@sveltejs/kit"

// export const handle: Handle = async ({ event, resolve }) => {
//   event.locals.supabase = createServerClient(
//     PUBLIC_SUPABASE_URL,
//     PUBLIC_SUPABASE_ANON_KEY,
//     {
//       cookies: {
//         getAll() {
//           return event.cookies.getAll()
//         },
//         setAll(cookiesToSet) {
//           /**
//            * Note: You have to add the `path` variable to the
//            * set and remove method due to sveltekit's cookie API
//            * requiring this to be set, setting the path to an empty string
//            * will replicate previous/standard behavior (https://kit.svelte.dev/docs/types#public-types-cookies)
//            */
//           cookiesToSet.forEach(({ name, value, options }) =>
//             event.cookies.set(name, value, { ...options, path: "/" }),
//           )
//         },
//       },
//     },
//   )

//   /**
//    * Unlike `supabase.auth.getSession()`, which returns the session _without_
//    * validating the JWT, this function also calls `getUser()` to validate the
//    * JWT before returning the session.
//    */
//   event.locals.safeGetSession = async () => {
//     const {
//       data: { session },
//     } = await event.locals.supabase.auth.getSession()
//     if (!session) {
//       return { session: null, user: null }
//     }

//     const {
//       data: { user },
//       error,
//     } = await event.locals.supabase.auth.getUser()
//     if (error) {
//       // JWT validation has failed
//       return { session: null, user: null }
//     }

//     return { session, user }
//   }

//   return resolve(event, {
//     filterSerializedResponseHeaders(name) {
//       return name === "content-range" || name === "x-supabase-api-version"
//     },
//   })
// }

//***********************************************************************************************************

// import { createServerClient } from "@supabase/ssr"
// import { type Handle, redirect } from "@sveltejs/kit"
// import { sequence } from "@sveltejs/kit/hooks"

// import {
//   PUBLIC_SUPABASE_URL,
//   PUBLIC_SUPABASE_ANON_KEY,
// } from "$env/static/public"

// console.log("hooks.server.ts loaded!!!!!!!!!")

// const supabase: Handle = async ({ event, resolve }) => {
//   console.log("hooks.server.ts loaded inside supabase:Handle!!!!!!!!!")
//   /**
//    * Creates a Supabase client specific to this server request.
//    *
//    * The Supabase client gets the Auth token from the request cookies.
//    */
//   event.locals.supabase = createServerClient(
//     PUBLIC_SUPABASE_URL,
//     PUBLIC_SUPABASE_ANON_KEY,
//     {
//       cookies: {
//         getAll: () => event.cookies.getAll(),
//         /**
//          * SvelteKit's cookies API requires `path` to be explicitly set in
//          * the cookie options. Setting `path` to `/` replicates previous/
//          * standard behavior.
//          */
//         setAll: (cookiesToSet) => {
//           cookiesToSet.forEach(({ name, value, options }) => {
//             event.cookies.set(name, value, { ...options, path: "/" })
//           })
//         },
//       },
//     },
//   )

//   /**
//    * Unlike `supabase.auth.getSession()`, which returns the session _without_
//    * validating the JWT, this function also calls `getUser()` to validate the
//    * JWT before returning the session.
//    */

//   console.log(
//     "Setting safeGetSession() for event.locals inside hooks.server.ts",
//   )
//   event.locals.safeGetSession = async () => {
//     const {
//       data: { session },
//     } = await event.locals.supabase.auth.getSession()
//     if (!session) {
//       return { session: null, user: null }
//     }

//     const {
//       data: { user },
//       error,
//     } = await event.locals.supabase.auth.getUser()
//     if (error) {
//       // JWT validation has failed
//       return { session: null, user: null }
//     }

//     return { session, user }
//   }

//   return resolve(event, {
//     filterSerializedResponseHeaders(name) {
//       /**
//        * Supabase libraries use the `content-range` and `x-supabase-api-version`
//        * headers, so we need to tell SvelteKit to pass it through.
//        */
//       return name === "content-range" || name === "x-supabase-api-version"
//     },
//   })
// }

// const authGuard: Handle = async ({ event, resolve }) => {
//   console.log("Handle fired/1 hooks.sever.ts")
//   const { session, user } = await event.locals.safeGetSession()
//   event.locals.session = session
//   event.locals.user = user

//   if (!event.locals.session && event.url.pathname.startsWith("/private")) {
//     redirect(303, "/auth")
//   }

//   if (event.locals.session && event.url.pathname === "/auth") {
//     console.log(
//       "Handle function from hooks.server.ts. Inside if/logic checking is event.locals.session is true",
//       event.locals.session,
//     )
//     redirect(303, "/private")
//   }

//   return resolve(event)
// }

// export const handle: Handle = sequence(supabase, authGuard)

//************************************************************************************************** */

// StackOverflow version workaround....
// https://stackoverflow.com/questions/77917440/supabase-auth-not-storing-anything-in-cookies-sveltekit

// import {
//   PUBLIC_SUPABASE_URL,
//   PUBLIC_SUPABASE_ANON_KEY,
// } from "$env/static/public"
// import { createServerClient } from "@supabase/ssr"
// import type { Handle } from "@sveltejs/kit"

// export const handle: Handle = async ({ event, resolve }) => {
//   event.locals.supabase = createServerClient(
//     PUBLIC_SUPABASE_URL,
//     PUBLIC_SUPABASE_ANON_KEY,
//     {
//       cookies: {
//         get: (key) => event.cookies.get(key),
//         /**
//          * Note: You have to add the `path` variable to the
//          * set and remove method due to sveltekit's cookie API
//          * requiring this to be set, setting the path to an empty string
//          * will replicate previous/standard behaviour (https://kit.svelte.dev/docs/types#public-types-cookies)
//          */
//         set: (key, value, options) => {
//           event.cookies.set(key, value, { ...options, path: "/" })
//         },
//         remove: (key, options) => {
//           event.cookies.delete(key, { ...options, path: "/" })
//         },
//       },
//     },
//   )

//   /**
//    * a little helper that is written for convenience so that instead
//    * of calling `const { data: { session } } = await supabase.auth.getSession()`
//    * you just call this `await getSession()`
//    */
//   let sessionRetrieved = false
//   event.locals.getSession = async () => {
//     sessionRetrieved = true
//     const {
//       data: { session },
//     } = await event.locals.supabase.auth.getSession()
//     return session
//   }

//   if (!sessionRetrieved) {
//     await event.locals.supabase.auth.getSession()
//   }

//   return resolve(event, {
//     filterSerializedResponseHeaders(name) {
//       return name === "content-range"
//     },
//   })
// }

//**************************************************************************************************

// Ok, this version is from the latest SAASTemplate repo merge to master

// src/hooks.server.ts
import { PRIVATE_SUPABASE_SERVICE_ROLE } from "$env/static/private"
import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL,
} from "$env/static/public"
import { createServerClient } from "@supabase/ssr"
import { createClient } from "@supabase/supabase-js"
import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createServerClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll: () => event.cookies.getAll(),
        /**
         * SvelteKit's cookies API requires `path` to be explicitly set in
         * the cookie options. Setting `path` to `/` replicates previous/
         * standard behavior.
         */
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            event.cookies.set(name, value, { ...options, path: "/" })
          })
        },
      },
    },
  )

  event.locals.supabaseServiceRole = createClient(
    PUBLIC_SUPABASE_URL,
    PRIVATE_SUPABASE_SERVICE_ROLE,
    { auth: { persistSession: false } },
  )

  // https://github.com/supabase/auth-js/issues/888#issuecomment-2189298518
  if ("suppressGetSessionWarning" in event.locals.supabase.auth) {
    // @ts-expect-error - suppressGetSessionWarning is not part of the official API
    event.locals.supabase.auth.suppressGetSessionWarning = true
  } else {
    console.warn(
      "SupabaseAuthClient#suppressGetSessionWarning was removed. See https://github.com/supabase/auth-js/issues/888.",
    )
  }

  /**
   * Unlike `supabase.auth.getSession()`, which returns the session _without_
   * validating the JWT, this function also calls `getUser()` to validate the
   * JWT before returning the session.
   */
  event.locals.safeGetSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    if (!session) {
      return { session: null, user: null, amr: null }
    }

    const {
      data: { user },
      error: userError,
    } = await event.locals.supabase.auth.getUser()
    if (userError) {
      // JWT validation has failed
      return { session: null, user: null, amr: null }
    }

    const { data: aal, error: amrError } =
      await event.locals.supabase.auth.mfa.getAuthenticatorAssuranceLevel()
    if (amrError) {
      return { session, user, amr: null }
    }

    return { session, user, amr: aal.currentAuthenticationMethods }
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range" || name === "x-supabase-api-version"
    },
  })
}
