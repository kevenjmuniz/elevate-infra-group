# ==========
# BUILD STAGE
# ==========
FROM node:20-alpine AS build
# Se seu app estiver em subpasta (ex.: apps/site), troque o valor de APP_DIR
ARG APP_DIR=.
WORKDIR /usr/src/app

# Copia apenas os manifests para aproveitar cache
COPY ${APP_DIR}/package*.json ./
# Use npm ci se houver package-lock.json
RUN npm ci --no-audit --no-fund

# Copia o restante do código e roda o build
COPY ${APP_DIR} .
# Se for Vite/React, o script "build" deve existir no package.json (ex.: "vite build")
RUN npm run build

# ==========
# RUNTIME STAGE
# ==========
FROM node:20-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app

# Instala um servidor estático leve
RUN npm i -g serve

# Copia apenas a saída do build
COPY --from=build /usr/src/app/dist ./dist

# Segurança: usuário não-root
RUN addgroup -S app && adduser -S app -G app
USER app

# Porta interna padrão (o EasyPanel pode sobrescrever com a env PORT)
EXPOSE 3000

# Healthcheck simples (opcional)
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:${PORT:-3000}/ >/dev/null 2>&1 || exit 1

# Inicia servindo a pasta dist e respeitando a variável PORT
CMD sh -c "serve -s dist -l ${PORT:-3000}"
