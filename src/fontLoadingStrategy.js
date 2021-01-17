import Observer from "fontfaceobserver";

// import fonts stylesheet
import "./fonts.scss";
var fontVariants = [
  {
    name: "Poppins",
    variants: [{ weight: 400 }, { weight: 700 }, { weight: 800 }],
  },
];

var observers = [];

// Make one observer for each font,
// by iterating over the data we already have
export const onFontIsLoaded = (callback) => {
  fontVariants.forEach((family) => {
    family.variants.forEach((variant) => {
      var obs = new Observer(family.name, variant);
      observers.push(obs.load());
    });
  });

  Promise.all(observers)
    .then(function (fonts) {
      // document.querySelector("#root").classList.add("fonts-loaded");
      callback();
      fonts.forEach(function (font) {
        console.log(font);
        // console.log(font.family + " " + font.weight + " " + "loaded");
      });
    })
    .catch(function (err) {
      console.warn("Some critical font are not available:", err);
      callback();
    });
};
