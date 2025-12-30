# --- Stage 1: Build (Common) ---
FROM node:20-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# --- Stage 2: Development (Hot Reload) ---
FROM build-stage AS dev
# Vite needs port 5173
EXPOSE 5173
# The 'host' flag is required to access the dev server from outside the container
CMD ["npm", "run", "dev", "--", "--host"]

# --- Stage 3: Production (Nginx) ---
FROM build-stage AS production-build
RUN npm run build

FROM nginx:stable-alpine AS prod
# Copy the 'dist' folder (Vite) or 'build' folder (CRA) to Nginx
COPY --from=production-build /app/dist /usr/share/nginx/html
# Copy a custom nginx config to handle React Router routes
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]