// Node.jsのすべてのAPIがプリロードプロセスで利用できます。
// ！Chrome の拡張機能と同じサンドボックスを持っています。

window.addEventListener('DOMContentLoaded', () => {
	const replaceText = (selector, text) => {
		const element = document.getElementById(selector)
		if (element) element.innerText = text
	}

	for (const dependency of ['chrome', 'node', 'electron']) {
		replaceText(`${dependency}-version`, process.versions[dependency])
	}
})
