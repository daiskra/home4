import "./index.css";
import MY_IMAGE from './assets/ufx1msnzl3xgtcmlt-rkqhpytma.png';

const text = document.createElement("h1");
text.innerText = "I love JavaScript";
document.body.append(text);

const img = document.createElement("img");
img.src = MY_IMAGE;
document.body.append(img);