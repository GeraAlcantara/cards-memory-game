import EmberSVG from "../img/ember.svg";
import NodeSVG from "../img/node.svg";
import ReactSVG from "../img/react.svg";
import VueSVG from "../img/vue.svg";
import SvelteSVG from "../img/svelte.svg";
import AngularSVG from "../img/angular.svg";

export const createMatrix = () => {
  const images = [EmberSVG, NodeSVG, SvelteSVG, AngularSVG, ReactSVG, VueSVG];  
  const distinct = ["ember", "node", "svelte", "angular", "react", "vue"];
  const matrix = [];
  for (let i = 0; i < distinct.length; i++) {
    const cell = {
      face: distinct[i],
      image: images[i],
    };
    let pair = [cell, cell];
    matrix.push(...pair);
  }
  // shuffle array
  for (let i = matrix.length - 1; i > 0; i--) {
    let randomPos = Math.floor(Math.random() * (i + 1));
    [matrix[i], matrix[randomPos]] = [matrix[randomPos], matrix[i]];
  }
  return matrix.map((cell, index) => ({
    ...cell,
    id: index,
    revealed: false,
  }));
};
