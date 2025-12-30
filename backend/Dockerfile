# --- Stage 1: Base (Common for both) ---
FROM php:8.2-fpm-alpine AS base

# Install system dependencies
RUN apk add --no-cache \
    libpng-dev libjpeg-turbo-dev libxml2-dev oniguruma-dev \
    icu-dev libzip-dev zip unzip git curl

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql bcmath gd intl zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# --- Stage 2: Development ---
FROM base AS dev
# We don't copy code here because we use 'volumes' in compose.dev.yaml
CMD ["php-fpm"]

# --- Stage 3: Production ---
FROM base AS prod
# Copy all project files
COPY . .

# Install production dependencies
RUN composer install --no-dev --optimize-autoloader

# Set permissions for Laravel
RUN chown -R www-data:www-data storage bootstrap/cache
RUN chmod -R 775 storage bootstrap/cache

# Production optimization
RUN php artisan config:cache && php artisan route:cache

CMD ["php-fpm"]