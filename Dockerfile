# Verwende ein offizielles Node.js-Image als Basis
FROM node:18

# Setze das Arbeitsverzeichnis in den Container
WORKDIR /app

# Kopiere die package.json und package-lock.json
COPY package*.json ./

# Installiere die Abhängigkeiten
RUN npm install

# Kopiere den Rest des Anwendungscodes in den Container
COPY . .

# Exponiere den Port (3000 und 3100), den dein WebSocket-Server nutzt
EXPOSE 3000 3100

# Starte die Node.js-Anwendung
CMD ["npm", "run", "all"]