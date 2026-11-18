# Galexora

A field guide to the eight planets, milestones in space exploration, and NASA’s Astronomy Picture of the Day.

Run `npm ci` and `npm run dev` to open the site locally. Use `node --test tests/apod.test.mjs` to check the APOD feed adapter.

APOD is fetched on the server from NASA Science’s [public APOD Basic JSON feed](https://science.nasa.gov/wp-json/wp/v2/apod-basic). The feed requires no API key and revalidates every 30 minutes. The site links to the [NASA archive](https://science.nasa.gov/apod/apod-search/) when the feed is unavailable.

Planetary measurements are sourced from [JPL](https://ssd.jpl.nasa.gov/planets/phys_par.html) and [NASA Science](https://science.nasa.gov/solar-system/planets/planet-sizes-and-locations-in-our-solar-system/). The Earthrise photograph is credited to [NASA / Bill Anders](https://science.nasa.gov/resource/apollo-8s-iconic-earthrise/).
