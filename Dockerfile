# Build stage
FROM eclipse-temurin:17-jdk-jammy as builder
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline
COPY ./src ./src
RUN ./mvnw clean install

# Package stage
FROM eclipse-temurin:17-jre-jammy
EXPOSE 8080
COPY --from=builder /target/*.jar /*.jar
ENTRYPOINT ["java","-jar","/*.jar"]