# Stage 1: Build the React App 
FROM node:18-alpine AS builder

# Set working Directory 
WORKDIR /app 

#Copy package.json and package-lock.json
COPY package*.json ./

# Install Dependencies 
RUN npm install 

# Copy rest of the source code 
COPY . . 

# ✅ Add this missing line to build the app
RUN npm run build

#  Stage 02: Serve with nginx 
FROM nginx:stable-alpine 

# copy build asset from the builder 
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]