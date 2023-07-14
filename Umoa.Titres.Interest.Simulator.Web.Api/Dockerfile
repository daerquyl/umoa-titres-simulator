# Use the official .NET Core SDK as the base image
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env

# Set the working directory inside the container
WORKDIR /app

# Copy the .csproj and restore dependencies
COPY ../Umoa.Titres.Interest.Simulator.Core/*.csproj ./
COPY *.csproj ./
RUN dotnet restore

# Copy the entire project and build the application
COPY . ./
RUN dotnet publish -c Release -o out

# Use the official .NET Core runtime as the base image for the final image
FROM mcr.microsoft.com/dotnet/aspnet:6.0

# Set the working directory inside the container
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=build-env /app/out ./

# Set the entry point for the container
ENTRYPOINT ["dotnet", "Umoa.Titres.Interest.Simulator.Web.Api.dll"]