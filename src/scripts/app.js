export default {
    createApp: () => {
        //app base
        const app = document.createElement('div');
        app.id = "app";
        app.classList.add('app');
        document.body.appendChild(app);

        //app navbar
        const navbar = document.createElement('div');
        navbar.id = "appNavbar";
        navbar.classList.add('app-element');
        navbar.classList.add('app-navbar');
        app.appendChild(navbar);

        //app main part
        const main = document.createElement('div');
        main.id = "appMain";
        main.classList.add('app-element');
        main.classList.add('app-main');
        app.appendChild(main);

        //app bottom panel
        const bottom = document.createElement('div');
        bottom.id = "appBottom";
        bottom.classList.add('app-element');
        bottom.classList.add('app-bottom');
        app.appendChild(bottom);
    }
}