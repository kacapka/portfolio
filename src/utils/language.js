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
            description: <p>Jetsem front-end developerem, miłośnikiem JavaScriptu i technologii webowych. Swoją przygodę z kodowaniem zacząłem ponad rok temu czego owocem była moja piersza <a href='https://kacapka.github.io/genius/' target='_blank' className='about__link'>strona.</a> Wraz z czasem stawiałem sobie wyżej poprzeczkę i realizowałem kolejne <a href={process.env.PUBLIC_URL + '/projects'} className='about__link'>projekty.</a> Aktualnie pracuje przy użyciu ReactJS oraz Redux. Nie jestem fanem jQery oraz bootstrap. W swoich pracach również nie używam gotowych layoutów. W kolejnych projektach chciałbym tworzyć unikatowe aplikacje, które będą wymagać odemnie ciągłego rozwoju i rozwiązywania nowych problemów.</p>,
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
                wt: 'Aplikacja webowa do zarządzania oraz sprzedaży planów treningowych. Projekt zawiera stronę dla użytkowników - sprzedaż planów i ich zawartość, oraz panelu admina - zarządzanie treścią. Po mojej stronie wykonana została część dla użytkowników oraz wygląd panelu admina. Jest to mój pierwszy projekt napisany w ReactJS - Redux.',
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
            description: <p>I am front-end developer, I am enthusiast of JavaScript and web technologies. I began my journey as a web developer about year and a half ago, when I made my <a href='https://kacapka.github.io/genius/' target='_blank' className='about__link'>first website.</a> With the passage of time, I set a very high standard for myself so I could code more challenging <a href={process.env.PUBLIC_URL + '/projects'} className='about__link'>projects.</a> Now, I work with ReactJS and Redux. I am not a supporter of jQuery and bootstrap. I also don't use template layouts. I would like to work on interesting projects, create unique solutions and solve new problems.</p>,
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
                wt: 'Web app for personal trainer to manage and sell training plans. It has two parts, one for users and another for admin. I was responsible for front-end stuff in first part (users website) and styling second (admin panel). ',
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