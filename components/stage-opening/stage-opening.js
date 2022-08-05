const testTemplate = document.createElement('template');
testTemplate.innerHTML = `
<style>
.drawer-opening{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.curtain {
    width: 100%;
    display: inline-block;
}
</style>
<div class="drawer-opening">
    <img src="img/proscenium/trad/top-suffit.webp"class="curtain"/>
</div>
`;


class StageOpeningComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(testTemplate.content.cloneNode(true));
    }
}

window.customElements.define('ph-stage-opening', StageOpeningComponent);

//./img/proscenium/trad/acropolis.webp
//./img/proscenium/trad/top-suffit.webp