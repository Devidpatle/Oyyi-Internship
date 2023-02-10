FROM node:18-alpine AS BUILD_IMAGE
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN apk add curl
RUN curl -sf https://gobinaries.com/tj/node-prune | sh
RUN apk del curl
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN npm prune --production
RUN node-prune



# Stage 2
FROM node:18-alpine
WORKDIR /app
COPY --from=BUILD_IMAGE /app/.output /app/.output
COPY --from=BUILD_IMAGE /app/package.json /app/
COPY --from=BUILD_IMAGE /app/node_modules /app/node_modules
COPY nuxt.config.ts .
RUN rm -rf /var/cache/apk/*
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]

