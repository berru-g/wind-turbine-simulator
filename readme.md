### Plan de Site de simulation de production énergétique pour une éolienne maison utilisant une API météo.

#### Conception et Structure du Site
        Page d'accueil avec une brève introduction.
        Formulaire pour que l'utilisateur entre sa localisation.
        Page de résultats affichant la production d'électricité estimée.

#### Choix de l'API Météo
        Utilisation d'une API météo pour obtenir des données sur le vent (ex. OpenWeatherMap, WeatherAPI, etc.).

#### Backend pour les Calculs
        Un backend qui récupère les données météo, calcule la production énergétique et renvoie les résultats.

#### Frontend pour l'Interface Utilisateur
        Interface utilisateur simple et intuitive pour entrer la localisation et afficher les résultats.

#### Technologies à Utiliser

    Frontend: HTML, CSS, JavaScript, React (pour une interface dynamique).
    Backend: Node.js, Express (pour traiter les requêtes et faire des calculs).
    API Météo: OpenWeatherMap API (facile à utiliser et bien documentée).


## 1. Initialisation du Projet

    Créez un dossier pour votre projet et initialisez un projet Node.js:

            mkdir wind-turbine-simulator
            cd wind-turbine-simulator
            npm init -y

## Installez les dépendances nécessaires:


            npm install express axios
            npx create-react-app client

## Remplacez le contenu du App.js dans le dossier client/src par l'existant dans le repo:


    

## 4. Lancer le Projet

                Ajoutez un script pour démarrer à la fois le serveur backend et le serveur React dans le package.json à la racine du projet:

###    json

                "scripts": {
                "start": "concurrently \"nodemon server.js\" \"npm start --prefix client\""
                }

## Installez concurrently et nodemon:


                npm install concurrently nodemon

## Lancez le projet:



                npm start

## Deployer via app.netlify.com