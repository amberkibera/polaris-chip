import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "https://via.placeholder.com/200"; 
    this.description = "This is a default description."; 
    this.link = "#"; 
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: sans-serif;
        margin: 8px;
      }

  .card {
  font-size: 1em;
  display: inline-flex;
  border: 2px solid grey;
  padding: 8px;
  margin: 8px;
  opacity: .8;
  background-color: navy;
  transition: .6s all ease-in-out;
}

.fancy {
  background-color: orange;
  color: #FF0099;
}

.card-image {
  width: 200px;
  height: 100%;
}

.card-text {
  width: 300px;
  padding: 0 8px 8px 8px;
  color: black;
  background-color: white;
  margin: 0 0 0 8px;
  height: 300px;
  overflow: auto;
}

.card-title {
  position: sticky;
  top: 0;
  background-color: #eeeeee;
  text-align: center;
  font-size: 2em;
  padding: 8px 8px 16px;
  margin: 0 -8px;
}

ul {
  margin: 0;
  padding: 0 32px;
}

ul li {
  padding: 8px 16px;
  list-style: square;
}

ul li:hover {
  list-style: "🤯";
  font-weight: bold;
  cursor: help;
}

a {
  text-decoration: none;
}

.links li:focus-within,
.links li:hover {
  list-style: "🃏";
  background-color: purple;
  color: blue;
}
.links li a:focus,
.links li:hover a {
  color: green;
  text-decoration: underline;
  cursor: move;
  outline: none;
}

ul li:nth-child(odd) {
  background-color: #eeeeee;
}

ul li:nth-child(even) {
  background-color: #dddddd;
}

.card:hover,
.card:focus-within {
  opacity: 1;
  outline: 2px solid green;
  outline-offset: 16px;
}

    `;
  }

  render() {
    return html`
   <div class="card">
        <img class="card-image" src="${this.image}" alt="Card Image">
        <div class="card-text">
          <h3 class="card-title">${this.title}</h3>
          <p>${this.description}</p>
          <ul class="links">
            <li><a href="${this.link}" target="_blank">Details</a></li>
          </ul>
    </div>  
    </div> 
    
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
      link: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
