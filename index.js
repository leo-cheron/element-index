if(typeof(HTMLElement) !== 'undefined') {
	HTMLElement.prototype.index = function() {
		let self = this, i = 0;

		while (self = self.previousElementSibling) i++;

		return i;
	}
}