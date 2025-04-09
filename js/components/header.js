export function header() {
    const menu = [
        {text: 'Home', href: 'DOM/'},
        {text: 'Text', href: 'DOM/text'},
        {text: 'Food', href: 'DOM/food'},
        {text: 'Darzas', href: 'DOM/darzas'},
        {text: 'Header', href: 'DOM/header'},
        {text: 'Click', href: 'DOM/click'},

    ];

    const lp = location.pathname; 
    const currentPage = lp.length > 1 && lp.at(-1) === '/' ? lp.slice(0, -1) : lp;
    let linksHTML = '';

    for (const link of menu) {
        let activePage = '';
        if (link.href === currentPage) {
            activePage = 'active';
        }
        linksHTML += `<a class="link ${activePage}" href="${link.href}">${link.text}</a>`;
    }

    const HTML = `
    <header class="main-header">
        <img class="logo" src="../../food/pizza.png" alt="Logo">
        <nav class="main-nav">${linksHTML}</nav>
    </header>`;

    document.body.insertAdjacentHTML('afterbegin', HTML);  // toks priejimas veikia tik su body, galima net nerasyti const
}