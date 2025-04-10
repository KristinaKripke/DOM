export function header() {
    const base = "https://kristinakripke.github.io/DOM/";
    if (location.hostname !== 'localhost') {
        document.head.insertAdjacentHTML('afterbegin', `<base href="${base}">`);
    }
    
    const menu = [
        {text: 'Home', href: './'},
        {text: 'Text', href: './text'},
        {text: 'Food', href: './food'},
        {text: 'Darzas', href: './darzas'},
        {text: 'Header', href: './header'},
        {text: 'Click', href: './click'},
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
        <img class="logo" src="../food/pizza.webp" alt="Logo">
        <nav class="main-nav">${linksHTML}</nav>
    </header>`;

    document.body.insertAdjacentHTML('afterbegin', HTML);  // toks priejimas veikia tik su body, galima net nerasyti const
}