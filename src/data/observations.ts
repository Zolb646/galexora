export interface Observation {
  src: string;
  alt: string;
  credit: string;
  source: string;
}

export const observations: Record<string, Observation> = {
  earthrise: {
    src: "/observations/earthrise.jpg",
    alt: "Earth rising above the lunar horizon, photographed from Apollo 8",
    credit: "NASA / Bill Anders",
    source: "https://science.nasa.gov/resource/apollo-8s-iconic-earthrise/",
  },
  viking: {
    src: "/observations/viking.webp",
    alt: "Rocks, soil and a lander foot in Viking 1’s first photograph from the surface of Mars",
    credit: "NASA / JPL",
    source: "https://science.nasa.gov/photojournal/first-photograph-taken-on-mars-surface/",
  },
  titan: {
    src: "/observations/titan.webp",
    alt: "A hazy orange landscape with ice pebbles, photographed by Huygens on Titan",
    credit: "NASA / JPL / ESA / University of Arizona",
    source: "https://science.nasa.gov/image-detail/pia07232-3/",
  },
  pluto: {
    src: "/observations/pluto.webp",
    alt: "Pluto in natural color, with the bright Sputnik Planitia basin visible",
    credit: "NASA / JHUAPL / SwRI / Alex Parker",
    source: "https://science.nasa.gov/resource/true-colors-of-pluto/",
  },
  webb: {
    src: "/observations/webb.webp",
    alt: "Stars and sculpted clouds at the edge of the Carina Nebula, captured by Webb",
    credit: "NASA / ESA / CSA / STScI",
    source: "https://science.nasa.gov/asset/webb/cosmic-cliffs-in-the-carina-nebula-nircam-image/",
  },
  mercury: {
    src: "/observations/mercury.webp",
    alt: "An enhanced-color globe of Mercury from MESSENGER imaging data",
    credit: "NASA / JHUAPL / Carnegie Institution of Washington",
    source: "https://science.nasa.gov/resource/colors-of-the-innermost-planet-view-1/",
  },
  venus: {
    src: "/observations/venus.webp",
    alt: "A false-color view of the cloud cover on Venus, assembled from Mariner 10 images",
    credit: "NASA / JPL-Caltech / Kevin M. Gill",
    source: "https://science.nasa.gov/image-detail/venus-mariner-10-pia23791-fig2-2/",
  },
  earth: {
    src: "/observations/earth.webp",
    alt: "The Blue Marble photograph of Earth showing Africa and Antarctica",
    credit: "NASA Johnson Space Center / Apollo 17",
    source: "https://science.nasa.gov/resource/the-blue-marble/",
  },
  mars: {
    src: "/observations/mars.webp",
    alt: "A global color mosaic of Mars showing its polar cap and canyon system",
    credit: "NASA / JPL / USGS",
    source: "https://science.nasa.gov/photojournal/global-color-views-of-mars/",
  },
  jupiter: {
    src: "/observations/jupiter.webp",
    alt: "Jupiter’s cloud bands and Great Red Spot in Cassini’s color mosaic",
    credit: "NASA / JPL / Space Science Institute",
    source: "https://science.nasa.gov/photojournal/cassini-jupiter-portrait/",
  },
  saturn: {
    src: "/observations/saturn-hubble.webp",
    alt: "Hubble’s view of Saturn’s golden cloud bands framed by bright, tilted rings",
    credit: "NASA, ESA, A. Simon, M. H. Wong, and the OPAL Team",
    source: "https://science.nasa.gov/asset/hubble/saturn-2019/",
  },
  uranus: {
    src: "/observations/uranus.webp",
    alt: "The pale blue-green disk of Uranus as seen by Voyager 2",
    credit: "NASA / JPL",
    source: "https://science.nasa.gov/image-detail/amf-pia18182/",
  },
  neptune: {
    src: "/observations/neptune.webp",
    alt: "Neptune’s full disk with bright clouds, assembled from Voyager 2 images",
    credit: "NASA / JPL",
    source: "https://science.nasa.gov/image-detail/amf-2a9a3aef-acf0-4334-b13e-9adb839cf331/",
  },
};
