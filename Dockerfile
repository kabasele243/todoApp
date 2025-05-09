FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY tsconfig.json ./
COPY src/ ./src/

# Build TypeScript code
RUN npm run build

# Remove development dependencies and source files
RUN npm prune --production
RUN rm -rf src/ tsconfig.json

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"] 