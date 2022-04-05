import { MiniReact } from "../core/index.js";

export class ListDogs extends MiniReact.Component {
  constructor(properties) {
    super(properties);
  }

  onClick = function () {

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then(function(data) {
        console.log(data.message);
        let img = document.getElementById('dogImg');
        
      })
  }

  render = () => {
    return MiniReact.createElement("ul", { id: "listDogs" }, [
      MiniReact.createElement("li", { class: "dog" }, "Labrador"),
      MiniReact.createElement("li", { class: "dog" }, "Saint Bernard"),
      MiniReact.createElement("li", { class: "dog" }, "Yorkshire"),
      MiniReact.createElement("li", { class: "dog" }, MiniReact.createElement('button', { onClick: this.onClick }, "photo chien")),
      MiniReact.createElement("li", { class: "dog" }, MiniReact.createElement('img', {id: "dogImg", src: ""}, null)),

    ]);{

    }
  };
}
