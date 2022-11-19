class SwatchPicker extends HTMLSelectElement {
  constructor() {
    super();
    const myRequest = new Request("https://jenil.github.io/bulmaswatch/api/themes.json");
    fetch(myRequest).then((response) => {
        if (!response.ok) {
    		throw new Error(`HTTP error, status = ${response.status}`);
		}
		return response.text();
	}).then((text) => {
        const themes = JSON.parse(text).themes;
        for (var i = 0; i < themes.length; i++) {
            const option = document.createElement('option');
            option.setAttribute('value',themes[i].css);
            if (themes[i].name==='Default') option.setAttribute('selected','true');
            option.textContent = themes[i].name;
            this.add(option);
		}
	});
  }
}
customElements.define('swatch-picker', SwatchPicker, { extends: 'select' });
