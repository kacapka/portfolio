import React from 'react';

const lang = {
    
    pl: {
        home: {
            title: {
                top: 'CZ',
                bottom: 'EŚĆ'
            }
        },
        about: {
            title: {
                top: 'O',
                bottom: 'MNIE'
            },
            nav: 'O mnie',
            greeting: {
                name: "Cześć, nazywam się Wojtek Urbański.",
                description: <h3>Tworzę <span>super</span> strony internetowe.</h3>
            },
            description: <p>Jetsem front-end developerem, miłośnikiem JavaScriptu i technologii webowych. Swoją przygodę z kodowaniem zacząłem 2 lata temu kiedy stworzyłem swoją pierwszą <a href='https://kacapka.github.io/genius/' target='_blank' className='about__link'>strona.</a> Wraz z czasem stawiałem sobie wyżej poprzeczkę i realizowałem kolejne <a href={process.env.PUBLIC_URL + '/projects'} className='about__link'>projekty.</a> Aktualnie pracuje przy użyciu ReactJS oraz Redux. Nie jestem fanem jQery oraz bootstrap. W swoich pracach również nie używam gotowych layoutów. W kolejnych projektach chciałbym tworzyć unikatowe aplikacje, które będą wymagać odemnie ciągłego rozwoju i rozwiązywania nowych problemów.</p>,
            more: 'Poza kodowanie wolny czas spędzam w Crossfitowym boxie. Kasę i urlop przeznaczam na podróże.',
            contact: <p>Jeśli chcesz mnie zatrudnić lub wspólnie stworzyć ciekawy projekt zapraszam do <a href={process.env.PUBLIC_URL + '/contact'} className='about__link'>kontaktu.</a></p>
        },
        projects: {
            title: {
                top: 'PRO',
                bottom: 'JEKTY'
            },
            nav: 'Projekty',
            description: {
                cf: 'Strona boxu crossfitowego. Jest to mój pierwszy projekt wykonany w celu testowania oraz wdrażania nabytych umiejętności z użyciem html, css oraz JS. Tu napisałem pierszą funkcję, pierwszą animację oraz responsywny wygląd.',
                bj: 'Wyszukiwarka lokali gastronomicznych dla miasta Warszawa. W ramach nauki postanowiłem przekóć mój niedoszly startup w działający produkt. Aplikacja webowa opierająca się głównie na interfejsie mapy. Projekt stworzony na paczce react-create-app. W celu autoryzacji uzytkowników oraz zastosowaniu bazy danych użyłem Firebase. (baza lokali nieaktualna).',
                mig: <p>Sklep internetowy z odzieżą marki GENIUS. Projekt obejmuje responsywną stronę dla klienta, oraz dedytkowany system cms dla właściciela. Odwiedź <a href='https://madeingenius.herokuapp.com/admin' target='_blank' className='projects__description__link'>panel admin</a> aby przetestować funkcjonalność systemu cms, użyj loginu: test@admin.pl oraz hasła: testadmin.</p>,
                portfolio: 'Projekt oparty na szablonie create-react-app. Prosty interfejs, który w głownej mierze oparty jest na dynamicznie zmienijących się stylach.'
            }
        },
        contact: {
            title: {
                top: 'KON',
                bottom: 'TAKT'
            },
            nav: 'Kontakt',
            textMail: 'Śmiało, napisz na poniższy adres, z chęcią odpowiem na każdą wiadomość.',
            textPhone: 'Dostępny jestem również pod telefonem.',
            textSocial: 'ZNAJDŹ MNIE NA SOCIAL MEDIA'
        },
        city: 'Warszawa, Wola'
    },
    
    en: {
        home: {
            title: {
                top: 'HE',
                bottom: 'LLO'
            }
        },
        about: {
            title: {
                top: 'AB',
                bottom: 'OUT'
            },
            nav: 'About',
            greeting: {
                name: "Hi, I am Wojtek Urbański.",
                description: <h3>I make <span>cool</span> websites.</h3>
            },
            description: <p>I am front-end developer, I am enthusiast of JavaScript and web technologies. I began my journey as a web developer 2 years ago, when I made my <a href='https://kacapka.github.io/genius/' target='_blank' className='about__link'>first website.</a> With the passage of time, I set a very high standard for myself so I could code more challenging <a href={process.env.PUBLIC_URL + '/projects'} className='about__link'>projects.</a> Now, I work with ReactJS and Redux. I am not a supporter of jQuery and bootstrap. I also don't use template layouts. I would like to work on interesting projects, create unique solutions and solve new problems.</p>,
            more: 'I enjoy crossfit, where I spent my free time. I also like travel and explore the world.',
            contact: <p>Please <a href={process.env.PUBLIC_URL + '/contact'} className='about__link'>contact </a> me if you would like to work on a project together, or want to hire me.</p>
        },
        projects: {
            title: {
                top: 'PRO',
                bottom: 'JECTS'
            },
            nav: 'Projects',
            description: {
                cf: 'Crossfit box website. My first project, created to test my knowledge about HTML, CSS and pure JavaScript. My first function, animation and RWD.',
                bj: 'I decided to turn my startup idea into product. Web app for exploring and searching food corners in Warsaw. Project based on Google Maps API, created with ReactJS (create-react-app) and Redux. As a databse and user authentication I used Firebase.',
                mig: <p>E-commerce project with love to GENIUS. Responsive, minimalism design for client part. Cms panel made from scratch, dedicated for client needs. For testing purpose visit <a href='https://madeingenius.herokuapp.com/admin' target='_blank' className='projects__description__link'>this page</a>. Use login: test@admin.pl and password: testadmin. Feel free to mess around with products and database, test functionality and of course hit me with feedback.</p>,
                portfolio: 'Portfolio created with boilerplate create-react-app. Simple interface mostly based on dynamically changing styles.'
            }
        },
        contact: {
            title: {
                top: 'CON',
                bottom: 'TACT'
            },
            nav: 'Contact',
            textMail: "Feel free to contact me through the email below, I'd love to chat.",
            textPhone: 'You can also reach me through this number.',
            textSocial: 'WHERE TO FIND ME'
        },
        city: 'Warsaw, Wola'
    },
    
    
}

export default lang;