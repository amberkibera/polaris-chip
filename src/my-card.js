import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";

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
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host { 
        display: block;
        font-family: sans-serif;
        margin: 8px;
        max-width: 500px;
      }
      :host([fancy]) {
        background-color: blue;
        color: white;
      }
      .card.toggled {
        background-color: gray;
        color: blue;
      }

  .card {
    width: 100%;
    max-width: 400px;
    border: 8px blue;
    border-color: black;
    border-radius: 10px;
    margin: 16px;
    padding: 16px;
    background-color: green;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.fancy {
  background-color: orange;
  color: #FF0099;
}

.card-image {
  width: 300px;
  height: 300px;
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

details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
  }

  details[open] summary {
    font-weight: bold;
  }
  
  details div {
    border: 2px solid black;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }

    `;
  }

  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div class="card">
        <meme-maker class="card-image" alt="Card Image" image-url="${this.image}" bottom-text="Bottom Bro" top-text="I am the"></meme-maker>
        <!-- put this in your render method where you had details -->
      <details ?open="${this.fancy}" @toggle="${this.openChanged}"> 
        <div class="card-text">
          <h3 class="card-title">${this.title}</h3>
          <slot></slot>
          <ul class="links">
            <li><a href="${this.link}" target="_blank">Details</a></li>
          </ul>
          </div>
      </details>
        
    </div>  
    </div> 
    
    `;


  }


  
  static get properties() {
    return {
      fancy: {type: Boolean, reflect: true },
      title: { type: String },
      image: { type: String },
      description: { type: String },
      link: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
