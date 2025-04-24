FROM php:8.2-cli

# Install dependencies
RUN apt-get update && apt-get install -y \
    sqlite3 libsqlite3-dev unzip curl git \
    && docker-php-ext-install pdo pdo_sqlite

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Start Laravel server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]