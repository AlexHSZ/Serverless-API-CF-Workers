addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const CLIENT_ID = "9HH4HOO-aCj6HfQrvyQbTE2Wt3eujHTArZR5HVNustA"
  const resp = await fetch("https://api.unsplash.com/photos", {
    headers: {
      Authorization: `Client-ID ${CLIENT_ID}`
    }
  })
  const data = await resp.json()
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-type': 'application/json'
    }
  })
}
