
# Stage 1: Build the application
FROM gradle:7.5.1-jdk17 AS build
WORKDIR /app
COPY . .
RUN gradle build --no-daemon -x test -Dspring.profiles.active=build

# Stage 2: Create the runtime image
FROM openjdk:17
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
