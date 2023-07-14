# Stage 1: Build the application
FROM mcr.microsoft.com/dotnet/sdk:7.0-bookworm-slim-amd64 AS build
WORKDIR /src

# Copy the .csproj and restore dependencies
COPY umoa-titres-interest-simulator.sln .
COPY Umoa.Titres.Interest.Simulator.Core/Umoa.Titres.Interest.Simulator.Core.csproj ./Umoa.Titres.Interest.Simulator.Core/
COPY Umoa.Titres.Interest.Simulator.Web.Api/Umoa.Titres.Interest.Simulator.Web.Api.csproj ./Umoa.Titres.Interest.Simulator.Web.Api/
RUN dotnet restore

# Copy the entire project and build the application
COPY . .

# Set the working directory inside the web API folder in the container
WORKDIR /src/Umoa.Titres.Interest.Simulator.Web.Api

# Build the app
RUN dotnet build -c Release

# Stage 2: Publish the application
FROM build AS publish
RUN dotnet publish -c Release -o /app

# Stage 3: Create the final image
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=publish /app .

# Set the environment variable for the port
ENV ASPNETCORE_ENVIRONMENT Production
ENV DOTNET_RUNNING_IN_CONTAINER true
ENV DOTNET_ENVIRONMENT Production

# Set the entry point for the container
ENTRYPOINT ["dotnet", "Umoa.Titres.Interest.Simulator.Web.Api.dll"]